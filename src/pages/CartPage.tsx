
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";
import { MinusCircle, PlusCircle, Trash, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalAmount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="max-w-md mx-auto p-8 border rounded-lg">
          <p className="mb-6">Your cart is currently empty.</p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-muted text-sm font-medium">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div 
                key={item.product.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-t first:border-t-0 items-center"
              >
                <div className="md:col-span-6 flex space-x-4">
                  <Link to={`/product/${item.product.id}`} className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </Link>
                  <div>
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="font-medium hover:text-primary"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {item.product.brand}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-red-500 flex items-center mt-2 md:hidden"
                    >
                      <Trash className="h-3 w-3 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2 text-center">
                  <span className="md:hidden font-medium mr-2">Price:</span>
                  {formatPrice(item.product.price)}
                </div>

                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <MinusCircle className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                    >
                      <PlusCircle className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-2 text-right">
                  <span className="md:hidden font-medium mr-2">Total:</span>
                  <span className="font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-3 text-red-500 hidden md:inline-block"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-sm"
            >
              Clear Cart
            </Button>
            <Button asChild variant="outline" className="text-sm">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="border rounded-lg p-4 space-y-4 sticky top-20">
            <h2 className="text-lg font-medium pb-2 border-b">Order Summary</h2>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(totalAmount)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className="border-t pt-4 flex justify-between font-medium">
              <span>Total</span>
              <span>{formatPrice(totalAmount)}</span>
            </div>
            
            <Button asChild size="lg" className="w-full">
              <Link to="/checkout">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <div className="text-xs text-muted-foreground text-center mt-4">
              Secure checkout powered by Stripe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
