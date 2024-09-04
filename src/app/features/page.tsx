"use client"
import {useRouter} from "next/navigation"
export default function FeaturesContainer() {
  const router = useRouter();
  return (
    <div>
      <button className="bg-green-500" onClick={() => router.push(`/features/?q=${400}`)}>
        send query param
      </button>
    </div>
  );
}
