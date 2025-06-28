import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductCard({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) {
  return (
    <div className="text-center flex flex-col gap-4 cursor-pointer">
      <div className="!w-full !h-[300px] relative">
        <Image
          className="object-cover"
          src={imgUrl}
          alt="Product"
          fill
        />
      </div>
      <div className="relative w-full">
        <p>{title}</p>
        <ChevronDown className="absolute right-0 top-0" />
      </div>
    </div>
  );
}
