
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getFeaturedProducts, getProducts } from "@/data/products";
import { Product, ProductCategory } from "@/types";
import { 
  Laptop, 
  Smartphone, 
  Watch, 
  Headphones 
} from "lucide-react";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts(8));
  }, []);

  const categories: { name: string; icon: React.ElementType; slug: ProductCategory }[] = [
    { name: "Laptops", icon: Laptop, slug: "laptop" },
    { name: "Smartphones", icon: Smartphone, slug: "smartphone" },
    { name: "Watches", icon: Watch, slug: "watch" },
    { name: "Headphones", icon: Headphones, slug: "headphone" },
  ];

  const heroSlides = [
    {
      title: "Premium Tech, Unbeatable Prices",
      description: "Discover the latest in tech innovation without breaking the bank.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000",
      cta: "Shop Now",
      url: "/products/laptop",
    },
    {
      title: "Upgrade Your Audio Experience",
      description: "Immersive sound quality that transforms your listening experience.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000",
      cta: "Explore Audio",
      url: "/products/headphone",
    },
    {
      title: "Smart Tech for Smart Living",
      description: "Cutting-edge smartphones that keep you connected and productive.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000",
      cta: "View Smartphones",
      url: "/products/smartphone",
    }
  ];

  return (
    <div className="container px-4 py-6 md:py-10">
      {/* Hero Carousel */}
      <Carousel className="w-full mb-12">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[40vh] md:h-[60vh] overflow-hidden rounded-lg">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 md:p-16">
                  <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 max-w-lg">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-6 max-w-md">
                    {slide.description}
                  </p>
                  <Button asChild size="lg" className="w-fit">
                    <Link to={slide.url}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              to={`/products/${category.slug}`}
              key={category.name}
              className="group flex flex-col items-center justify-center p-6 bg-muted rounded-lg hover:bg-muted/80 transition-all hover-scale"
            >
              <category.icon className="h-10 w-10 mb-3 text-primary" />
              <span className="font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid products={featuredProducts} title="Featured Products" />

      {/* Special Offer */}
      <section className="my-16 bg-gradient-to-r from-primary/10 to-secondary/20 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Special Discount</h2>
            <p className="text-lg mb-4">
              Get up to 30% off on selected products this week only!
            </p>
            <Button asChild size="lg">
              <Link to="/products/smartphone">Shop Deals</Link>
            </Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600"
            alt="Special offer"
            className="w-full md:max-w-xs rounded-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="my-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why Choose IndyTech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Authentic Products</h3>
            <p className="text-muted-foreground">
              All our products are 100% genuine with manufacturer warranty.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Quick delivery across India with real-time tracking.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-2xl">↩️</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Easy Returns</h3>
            <p className="text-muted-foreground">
              Hassle-free returns within 7 days of delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
