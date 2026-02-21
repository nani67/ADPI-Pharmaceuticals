"use client";

import { Product } from "@/lib/products";
import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductDetailCardProps {
  item: Product;
  openModal: (product: Product) => void;
}

const ProductDetailCard = ({ item, openModal }: ProductDetailCardProps) => {
  return (
    <div
      onClick={() => openModal(item)}
      className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-teal-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-teal-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 cursor-pointer"
    >
      <div className="relative z-20 h-full flex flex-col overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-800">
          {/* Arrow */}
          <div
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 opacity-0 transition-opacity group-hover/card:opacity-100 z-10"
            aria-hidden="true"
          >
            <Eye size={17} className="text-white opacity-70" />
          </div>

          <Image
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
            src={item.imageSrc}
            alt={item.name}
            fill
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-100 group-hover/card:text-teal-200 transition-colors">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-sm text-gray-400 flex-grow line-clamp-3 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Action */}
          {/* <div className="mt-auto pt-4 border-t border-gray-800/50">
            <button
              onClick={() => openModal(item)}
              className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800/50 px-4 py-2.5 text-sm font-medium text-teal-300 transition-all duration-300 hover:bg-teal-500/10 hover:text-teal-200 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)] focus:outline-none focus:ring-2 focus:ring-teal-500/30 cursor-pointer relative z-30"
            >
              View Details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
