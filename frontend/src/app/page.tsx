import Link from "next/link";
import { categoryOrder } from "@/lib/questionsData";
const firstCategory = categoryOrder[0];

export default function HomePage() {
  return (
    <Link href={`/auth/Questions/${firstCategory}`} className="text-blue-600 underline">
      Start Questions →
    </Link>
  );
}
