
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { OrderDetails, PaymentMethod, CheckoutDetails } from "@/types";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, totalAmount, clearCart } = useCart();

  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleStateChange = (value: string) => {
    setOrderDetails({ ...orderDetails, state: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    const requiredFields: (keyof OrderDetails)[] = [
      "fullName", "email", "address", "city", "state", "pincode", "phone"
    ];
    
    const missingFields = requiredFields.filter(field => !orderDetails[field]);
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }
    
    if (!/^\d{6}$/.test(orderDetails.pincode)) {
      toast.error("Please enter a valid 6-digit PIN code");
      return;
    }
    
    if (!/^\d{10}$/.test(orderDetails.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    
    // Process order
    setIsSubmitting(true);
    
    // Simulate API call to process payment and order
    const checkoutDetails: CheckoutDetails = {
      orderDetails,
      paymentMethod,
    };

    // In a real app, you would send this to your backend for processing
    console.log("Processing order:", checkoutDetails);
    console.log("Cart items:", cartItems);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      navigate("/checkout-success");
    }, 1500);
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Shipping Information */}
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={orderDetails.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={orderDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={orderDetails.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select 
                    value={orderDetails.state} 
                    onValueChange={handleStateChange}
                  >
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={orderDetails.pincode}
                    onChange={handleInputChange}
                    pattern="[0-9]{6}"
                    maxLength={6}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={orderDetails.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Payment Method</h2>
              
              <RadioGroup 
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 border rounded-md p-3">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label htmlFor="payment-card" className="flex-grow">
                    Credit/Debit Card
                  </Label>
                  <div className="flex space-x-2">
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 border rounded-md p-3">
                  <RadioGroupItem value="upi" id="payment-upi" />
                  <Label htmlFor="payment-upi">UPI</Label>
                </div>
                <div className="flex items-center space-x-3 border rounded-md p-3">
                  <RadioGroupItem value="cod" id="payment-cod" />
                  <Label htmlFor="payment-cod">Cash on Delivery</Label>
                </div>
              </RadioGroup>
              
              {paymentMethod === "card" && (
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" maxLength={3} />
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === "upi" && (
                <div className="mt-4 space-y-2">
                  <Label htmlFor="upi-id">UPI ID</Label>
                  <Input id="upi-id" placeholder="yourname@upi" />
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="border rounded-lg p-4 space-y-4 sticky top-20">
              <h2 className="text-lg font-medium pb-2 border-b">Order Summary</h2>
              
              <div className="max-h-60 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex space-x-3">
                    <div className="h-16 w-16 flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Quantity: {item.quantity}</p>
                      <p className="text-sm">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-2 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(totalAmount)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{totalAmount >= 500 ? "Free" : formatPrice(50)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (18%)</span>
                  <span>{formatPrice(totalAmount * 0.18)}</span>
                </div>
              </div>
              
              <div className="border-t pt-4 flex justify-between font-medium">
                <span>Total</span>
                <span>
                  {formatPrice(
                    totalAmount + 
                    (totalAmount >= 500 ? 0 : 50) + 
                    (totalAmount * 0.18)
                  )}
                </span>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
