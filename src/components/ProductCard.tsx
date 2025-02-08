type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={product.image_url || "/placeholder.png"}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
