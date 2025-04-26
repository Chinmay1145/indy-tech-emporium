
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProducts } from "@/data/products";
import { Product, ProductCategory } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductsPage() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("featured");

  useEffect(() => {
    // Validate category parameter
    const validCategory = [
      "laptop",
      "smartphone",
      "watch",
      "headphone",
      "earbud",
    ].includes(category as string)
      ? (category as ProductCategory)
      : undefined;

    const allProducts = getProducts(validCategory);
    setProducts(allProducts);
    setFilteredProducts(allProducts);

    // Extract unique brands
    const uniqueBrands = [...new Set(allProducts.map((p) => p.brand))];
    setBrands(uniqueBrands);

    // Find min and max prices
    const prices = allProducts.map((p) => p.price);
    if (prices.length > 0) {
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, maxPrice]);
    }
  }, [category]);

  const [minPrice, maxPrice] = priceRange;
  const [priceFilter, setPriceFilter] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  useEffect(() => {
    // Reset price filter when price range changes
    setPriceFilter([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const applyFilters = () => {
    let result = products;

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceFilter[0] && p.price <= priceFilter[1]
    );

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - already sorted by default
        break;
    }

    setFilteredProducts(result);
  };

  useEffect(() => {
    applyFilters();
  }, [priceFilter, selectedBrands, sortOption]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };

  const resetFilters = () => {
    setPriceFilter([minPrice, maxPrice]);
    setSelectedBrands([]);
    setSortOption("featured");
  };

  const getCategoryName = () => {
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
        return "All Products";
    }
  };

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{getCategoryName()}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters (Sidebar) */}
        <aside className="md:w-1/4 space-y-6">
          <div className="p-4 border rounded-lg">
            <h2 className="font-medium text-lg mb-4">Filters</h2>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[minPrice, maxPrice]}
                  min={minPrice}
                  max={maxPrice}
                  step={1000}
                  value={priceFilter}
                  onValueChange={(value) => setPriceFilter(value as [number, number])}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm">
                  <span>₹{priceFilter[0].toLocaleString()}</span>
                  <span>₹{priceFilter[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brand</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) =>
                        handleBrandChange(brand, checked === true)
                      }
                    />
                    <Label
                      htmlFor={`brand-${brand}`}
                      className="text-sm font-normal"
                    >
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              onClick={resetFilters}
              className="w-full mt-4"
            >
              Reset Filters
            </Button>
          </div>
        </aside>

        {/* Products */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              {filteredProducts.length} products
            </p>

            <Select 
              value={sortOption} 
              onValueChange={setSortOption}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
