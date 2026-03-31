"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { HomeProduct, ProductSize } from "@/components/home/home-products";

export type CartItem = HomeProduct & {
  cartKey: string;
  selectedSize: ProductSize;
  quantity: number;
};

type AddItemOptions = {
  size?: ProductSize;
};

type CartContextValue = {
  isCartOpen: boolean;
  items: CartItem[];
  subtotal: number;
  itemCount: number;
  addItem: (product: HomeProduct, options?: AddItemOptions) => void;
  openCart: () => void;
  closeCart: () => void;
  incrementItem: (cartKey: string) => void;
  decrementItem: (cartKey: string) => void;
  removeItem: (cartKey: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addItem = useCallback((product: HomeProduct, options?: AddItemOptions) => {
    const selectedSize = options?.size ?? product.defaultSize;
    const cartKey = `${product.id}:${selectedSize}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey);

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentItems, { ...product, cartKey, selectedSize, quantity: 1 }];
    });

    openCart();
  }, [openCart]);

  const incrementItem = useCallback((cartKey: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decrementItem = useCallback((cartKey: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback((cartKey: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey));
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      isCartOpen,
      items,
      subtotal,
      itemCount,
      addItem,
      openCart,
      closeCart,
      incrementItem,
      decrementItem,
      removeItem,
    }),
    [
      isCartOpen,
      items,
      subtotal,
      itemCount,
      addItem,
      openCart,
      closeCart,
      incrementItem,
      decrementItem,
      removeItem,
    ],
  );

  return createElement(CartContext.Provider, { value }, children);
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
