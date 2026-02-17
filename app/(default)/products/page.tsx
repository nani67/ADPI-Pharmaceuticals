"use client";

import { useState } from "react";
import Spotlight from "@/components/spotlight";
import ProductDetailDialog from "@/components/product-detail.dialog";
import ProductDetailCard from "@/components/product-detail-card";
import { getAllProducts, Product } from "@/lib/products";

export default function Products() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(getAllProducts());

  function openModal(product: Product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setTimeout(() => setSelectedProduct(null), 200); // Clear after animation
  }

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.teal.200),theme(colors.gray.50),theme(colors.teal.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Our Products
            </h1>
            <p
              className="mx-auto max-w-3xl text-lg text-teal-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              At ADPI Pharmaceuticals, we offer a wide range of safe,
              affordable, and high-quality medicines. Our formulations are
              designed to meet international standards and ensure better health
              for everyone.
            </p>
          </div>

          {/* Products Grid */}
          <div className="pb-12 md:pb-20">
            <Spotlight className="group mx-auto grid max-w-sm sm:max-w-none items-start gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((item, index) => (
                <ProductDetailCard
                  key={index}
                  item={item}
                  openModal={openModal}
                />
              ))}
            </Spotlight>
          </div>

          {/* Product Detail Dialog */}
          <ProductDetailDialog
            isOpen={isOpen}
            closeModal={closeModal}
            selectedProduct={selectedProduct}
          />
        </div>
      </div>
    </section>
  );
}
