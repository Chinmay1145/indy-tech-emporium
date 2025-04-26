
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, getRelatedProducts, formatPrice } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  ChevronLeft, 
  ChevronRight, 
  Badge, 
  MinusCircle, 
  PlusCircle 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;
    
    const fetchedProduct = getProductById(id);
    
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setRelatedProducts(getRelatedProducts(fetchedProduct, 4));
    } else {
      navigate("/not-found");
    }

    // Reset state when product changes
    setQuantity(1);
    setActiveImageIndex(0);
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getCategoryDisplayName = (category: string): string => {
    switch (category) {
      case "laptop":
        return "Laptops";
      case "smartphone":
        return "Smartphones";
      case "watch":
        return "Watches";
      case "headphone":
        return "Headphones";
      case "earbud":
        return "Earbuds";
      default:
        return category;
    }
  };

  return (
    <div className="container px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link 
              to={`/products/${product.category}`}
              className="hover:text-primary"
            >
              {getCategoryDisplayName(product.category)}
            </Link>
          </li>
          <li>/</li>
          <li className="truncate max-w-[200px]">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative aspect-square w-20 flex-shrink-0 cursor-pointer rounded-md border ${
                  activeImageIndex === index
                    ? "ring-2 ring-primary"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="mr-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${
                    i < Math.floor(product.rating) 
                      ? "text-yellow-500" 
                      : "text-gray-300"
                  }`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground">({product.rating})</span>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.stock <= 5 && (
                <span className="ml-4 text-red-500 font-medium">
                  Only {product.stock} left in stock!
                </span>
              )}
            </div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button size="lg" onClick={handleAddToCart} className="w-full">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          {/* Additional Info */}
          <div className="flex flex-col space-y-3 text-sm">
            <div className="flex items-center">
              <Badge className="h-4 w-4 mr-2" />
              <span>Brand: <span className="font-medium">{product.brand}</span></span>
            </div>
            <div className="flex items-center">
              <Badge className="h-4 w-4 mr-2" />
              <span>Category: <span className="font-medium">{getCategoryDisplayName(product.category)}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="features">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="p-4 border rounded-b-lg">
            <ul className="list-disc pl-6 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications" className="p-4 border rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">General</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-medium">Brand:</span> {product.brand}</li>
                  <li><span className="font-medium">Model:</span> {product.name}</li>
                  <li><span className="font-medium">Category:</span> {getCategoryDisplayName(product.category)}</li>
                  <li><span className="font-medium">Warranty:</span> 1 Year Manufacturer Warranty</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Highlights</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="p-4 border rounded-b-lg">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Shipping Information</h3>
                <p className="text-sm">
                  Free shipping on orders above ₹500. Standard delivery in 3-5 business days.
                  Express delivery available for an additional charge.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Return Policy</h3>
                <p className="text-sm">
                  We accept returns within 7 days of delivery. Products must be in original
                  condition with all packaging and accessories. Certain items may not be eligible
                  for return due to hygiene reasons.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <ProductGrid products={relatedProducts} title="You May Also Like" />
      </section>
    </div>
  );
}
