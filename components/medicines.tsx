import Spotlight from "@/components/spotlight";
import { useState } from "react";
import ProductDetailDialog from "./product-detail.dialog";
import ProductDetailCard from "./product-detail-card";
import { getFeaturedProducts, Product } from "@/lib/products";

export default function Medicines() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>(getFeaturedProducts());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <h1
          className="mb-8 text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.teal.200),theme(colors.gray.50),theme(colors.teal.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
          data-aos="fade-up"
          id="medicines"
        >
          Medicines
        </h1>

        <div className="pb-12 md:pb-20">
          {/* Spotlight items */}
          <Spotlight className="group mx-auto max-w-sm sm:max-w-none grid items-start gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8">
            <>
              {products.map((item, index) => {
                return (
                  <ProductDetailCard
                    key={index}
                    item={item}
                    openModal={openModal}
                  />
                );
              })}
            </>
          </Spotlight>
        </div>

        {/* Product Detail Dialog */}
        <ProductDetailDialog
          isOpen={isOpen}
          closeModal={closeModal}
          selectedProduct={selectedProduct}
        />
      </div>
    </section>
  );
}
