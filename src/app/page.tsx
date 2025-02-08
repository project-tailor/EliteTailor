import { supabase } from "@/lib/supabaseClient";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const { data: products, error } = await supabase.from("products").select("*");
  console.log("products", products);

  if (error) {
    console.error("Error fetching products:", error.message);
    return <p className="text-red-500">Failed to load products.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
