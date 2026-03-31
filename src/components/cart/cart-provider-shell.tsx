"use client";

import { CartDrawer } from "./cart-drawer";
import { CartProvider, useCart } from "./use-cart";

function CartDrawerHost() {
  const {
    isCartOpen,
    items,
    subtotal,
    closeCart,
    incrementItem,
    decrementItem,
    removeItem,
  } = useCart();

  return (
    <CartDrawer
      isOpen={isCartOpen}
      items={items}
      subtotal={subtotal}
      onClose={closeCart}
      onIncrement={incrementItem}
      onDecrement={decrementItem}
      onRemove={removeItem}
    />
  );
}

export function CartProviderShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawerHost />
    </CartProvider>
  );
}
