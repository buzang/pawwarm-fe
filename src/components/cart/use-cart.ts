"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  getProductById,
  type HomeProduct,
  type ProductSize,
} from "@/components/home/home-products";

const CART_STORAGE_KEY = "pawwarm-cart";

type CartEntry = {
  productId: string;
  selectedSize: ProductSize;
  quantity: number;
};

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
  const [entries, setEntries] = useState<CartEntry[]>([]);
  const hasRestoredCartRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      try {
        const rawValue = window.sessionStorage.getItem(CART_STORAGE_KEY);

        if (!rawValue) {
          hasRestoredCartRef.current = true;
          return;
        }

        const parsed = JSON.parse(rawValue) as CartEntry[];
        setEntries(
          parsed.filter(
            (entry) =>
              typeof entry.productId === "string" &&
              typeof entry.selectedSize === "string" &&
              typeof entry.quantity === "number" &&
              entry.quantity > 0,
          ),
        );
      } catch {
        window.sessionStorage.removeItem(CART_STORAGE_KEY);
      } finally {
        hasRestoredCartRef.current = true;
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!hasRestoredCartRef.current) {
      return;
    }

    window.sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addItem = useCallback((product: HomeProduct, options?: AddItemOptions) => {
    const selectedSize = options?.size ?? product.defaultSize;

    setEntries((currentEntries) => {
      const existingItem = currentEntries.find(
        (entry) => entry.productId === product.id && entry.selectedSize === selectedSize,
      );

      if (existingItem) {
        return currentEntries.map((entry) =>
          entry.productId === product.id && entry.selectedSize === selectedSize
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        );
      }

      return [...currentEntries, { productId: product.id, selectedSize, quantity: 1 }];
    });

    openCart();
  }, [openCart]);

  const incrementItem = useCallback((cartKey: string) => {
    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        `${entry.productId}:${entry.selectedSize}` === cartKey
          ? { ...entry, quantity: entry.quantity + 1 }
          : entry,
      ),
    );
  }, []);

  const decrementItem = useCallback((cartKey: string) => {
    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        `${entry.productId}:${entry.selectedSize}` === cartKey
          ? { ...entry, quantity: Math.max(1, entry.quantity - 1) }
          : entry,
      ),
    );
  }, []);

  const removeItem = useCallback((cartKey: string) => {
    setEntries((currentEntries) =>
      currentEntries.filter((entry) => `${entry.productId}:${entry.selectedSize}` !== cartKey),
    );
  }, []);

  const items = useMemo(
    () =>
      entries.flatMap((entry) => {
        const product = getProductById(entry.productId);

        if (!product) {
          return [];
        }

        return [
          {
            ...product,
            cartKey: `${entry.productId}:${entry.selectedSize}`,
            selectedSize: entry.selectedSize,
            quantity: entry.quantity,
          },
        ];
      }),
    [entries],
  );

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
