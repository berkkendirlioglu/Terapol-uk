import React from "react";
import ProductCard from "../ProductCard";

const Product = [
  {
    imgUrl: "/assets/product/1.png",
    title: "Aditivi pentru beton",
  },
  {
    imgUrl: "/assets/product/2.png",
    title: "Produse pentru protecția fațadelor",
  },
  {
    imgUrl: "/assets/product/3.png",
    title: "Injecții pentru crăpături",
  },
  {
    imgUrl: "/assets/product/4.png",
    title: "Etanșări pentru rosturi de dilatație și construcție",
  },
  {
    imgUrl: "/assets/product/5.png",
    title: "Spații umede",
  },
  {
    imgUrl: "/assets/product/6.png",
    title: "Parcări supraterane / Acoperișuri verzi",
  },
  {
    imgUrl: "/assets/product/7.png",
    title: "Rezervoare de apă / Piscine",
  },
  {
    imgUrl: "/assets/product/8.png",
    title: "Fundații și pereți de beton",
  },
  {
    imgUrl: "/assets/product/9.png",
    title: "Terase / Acoperișuri",
  },
  {
    imgUrl: "/assets/product/10.png",
    title: "Acoperiri pentru pardoseli",
  },
];

export default function ProductSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:!justify-center gap-8">
      {Product.map((product, index) => (
        <ProductCard key={index} imgUrl={product.imgUrl} title={product.title}/>
      ))}
    </div>
  );
}
