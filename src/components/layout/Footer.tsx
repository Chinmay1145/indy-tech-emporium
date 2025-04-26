
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-muted w-full py-8 mt-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-base font-medium">Shop</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/products/laptop" className="hover:text-primary">Laptops</Link>
              <Link to="/products/smartphone" className="hover:text-primary">Smartphones</Link>
              <Link to="/products/watch" className="hover:text-primary">Watches</Link>
              <Link to="/products/headphone" className="hover:text-primary">Headphones</Link>
              <Link to="/products/earbud" className="hover:text-primary">Earbuds</Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-medium">Support</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              <Link to="/faqs" className="hover:text-primary">FAQs</Link>
              <Link to="/shipping" className="hover:text-primary">Shipping Policy</Link>
              <Link to="/returns" className="hover:text-primary">Returns & Exchanges</Link>
              <Link to="/track-order" className="hover:text-primary">Track Order</Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-medium">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-primary">About Us</Link>
              <Link to="/careers" className="hover:text-primary">Careers</Link>
              <Link to="/press" className="hover:text-primary">Press</Link>
              <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>123 Tech Street, Bangalore</p>
              <p>Karnataka, India - 560001</p>
              <p className="mt-1">Email: contact@indytech.com</p>
              <p>Phone: +91 80 1234 5678</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IndyTech Emporium. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Payment Methods:</span>
            <div className="flex space-x-2">
              <span className="inline-block p-1 border rounded">Visa</span>
              <span className="inline-block p-1 border rounded">MC</span>
              <span className="inline-block p-1 border rounded">UPI</span>
              <span className="inline-block p-1 border rounded">COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
