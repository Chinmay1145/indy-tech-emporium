
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText } from "lucide-react";

export default function CheckoutSuccessPage() {
  const navigate = useNavigate();
  const orderNumber = `IND-${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    const hasOrderData = sessionStorage.getItem("checkout-completed");
    
    if (!hasOrderData) {
      // If user refreshes or directly lands on this page, redirect to home
      navigate("/");
      return;
    }

    // Set flag to allow viewing this page once
    sessionStorage.setItem("checkout-completed", "true");
    
    // Clean up on unmount
    return () => {
      sessionStorage.removeItem("checkout-completed");
    };
  }, [navigate]);
  
  return (
    <div className="container px-4 py-16 max-w-md mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
          <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
      
      <div className="bg-muted p-6 rounded-lg mb-8">
        <p className="text-muted-foreground mb-4">
          Thank you for your purchase. We've received your order and will begin processing it right away.
        </p>
        
        <div className="border-t border-b py-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Order Number:</span>
            <span>{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Estimated Delivery:</span>
            <span>3-5 business days</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          An order confirmation has been sent to your email address.
        </p>
      </div>
      
      <div className="space-y-4">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/order/${orderNumber}`}>
            <FileText className="mr-2 h-4 w-4" />
            View Order Details
          </Link>
        </Button>
        <Button asChild className="w-full">
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
