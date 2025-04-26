
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { formatPrice } from "@/data/products";

export default function OrderDetailsPage() {
  const { orderId } = useParams();
  
  // This would normally come from your backend
  // Using mock data for demonstration
  const orderDetails = {
    orderId: orderId || "IND-123456",
    orderDate: "April 26, 2025",
    customerDetails: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
    },
    items: [
      {
        id: "1",
        name: "MacBook Pro M2",
        price: 199999,
        quantity: 1,
        image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      {
        id: "2",
        name: "iPhone 15 Pro",
        price: 129999,
        quantity: 1,
        image: "https://source.unsplash.com/photo-1460925895917-afdab827c52f"
      }
    ],
    paymentMethod: "card",
    subtotal: 329998,
    shipping: 0,
    tax: 59399.64, // 18% GST
    total: 389397.64
  };

  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Download Invoice
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Order Details</h3>
                <p className="text-sm text-muted-foreground">Order ID: {orderDetails.orderId}</p>
                <p className="text-sm text-muted-foreground">Date: {orderDetails.orderDate}</p>
                <p className="text-sm text-muted-foreground">Payment: {orderDetails.paymentMethod}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <p className="text-sm text-muted-foreground">{orderDetails.customerDetails.name}</p>
                <p className="text-sm text-muted-foreground">{orderDetails.customerDetails.address}</p>
                <p className="text-sm text-muted-foreground">
                  {orderDetails.customerDetails.city}, {orderDetails.customerDetails.state} {orderDetails.customerDetails.pincode}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDetails.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded object-cover"
                        />
                        <span>{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{formatPrice(item.price)}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right">
                      {formatPrice(item.price * item.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-medium">
                    Subtotal
                  </TableCell>
                  <TableCell className="text-right">
                    {formatPrice(orderDetails.subtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-medium">
                    Shipping
                  </TableCell>
                  <TableCell className="text-right">
                    {orderDetails.shipping === 0 ? "Free" : formatPrice(orderDetails.shipping)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-medium">
                    Tax (18% GST)
                  </TableCell>
                  <TableCell className="text-right">
                    {formatPrice(orderDetails.tax)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-medium">
                    Total
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    {formatPrice(orderDetails.total)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
