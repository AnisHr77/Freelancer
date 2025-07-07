// app/products/page.tsx
import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                    <div className="border rounded-xl shadow-sm p-4 bg-white hover:shadow-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
