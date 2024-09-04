"use client";
import { useSearchParams } from "next/navigation";
export default function MarketPlace() {
  const searchParam = useSearchParams();
  const param = searchParam.get("q");
  return (
    <div>
      <h1>{param}</h1>
    </div>
  );
}
