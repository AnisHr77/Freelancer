// app/products/[id]/page.tsx
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

type Props = {
    params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
    const productId = parseInt(params.id);
    const product = products.find((p) => p.id === productId);

    if (!product) return notFound();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                className="w-80 h-80 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">
                {product.inStock ? "In stock" : "Out of stock"}
            </p>
            <p className="mt-4 text-base">{product.description}</p>
        </div>
    );
}
