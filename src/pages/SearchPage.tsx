
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProducts } from "@/data/products";
import { Product } from "@/types";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    
    // In a real application, this would be an API call
    // Here we're searching through our local product data
    const query = searchQuery.toLowerCase();
    const results = getProducts().filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    
    // Simulate API delay
    setTimeout(() => {
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
  }, []);
  
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Products</h1>
      
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
        <div className="flex">
          <Input
            type="text"
            placeholder="Search products by name, brand, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="ml-2">
            <SearchIcon className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </form>
      
      <div className="min-h-[50vh]">
        {isSearching ? (
          <div className="text-center py-12">
            <p>Searching...</p>
          </div>
        ) : searchQuery && searchResults.length > 0 ? (
          <div>
            <p className="mb-6 text-muted-foreground">
              Found {searchResults.length} results for "{searchQuery}"
            </p>
            <ProductGrid products={searchResults} />
          </div>
        ) : searchQuery ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              We couldn't find any products matching "{searchQuery}".
            </p>
            <div className="mt-6">
              <p>Try:</p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                <li>Checking your spelling</li>
                <li>Using more general keywords</li>
                <li>Searching by category instead</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Start your search</h3>
            <p className="text-muted-foreground">
              Enter a keyword in the search bar above to find products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
