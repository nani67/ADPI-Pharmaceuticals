"use client";

import { Product } from "@/lib/products";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import React from "react";

interface ProductDetailDialogProps {
  isOpen: boolean;
  closeModal: () => void;
  selectedProduct: Product | null;
}

const ProductDetailDialog = ({
  isOpen,
  closeModal,
  selectedProduct,
}: ProductDetailDialogProps) => {
  return (
    <>
      {/* Product Details Dialog */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        {/* Backdrop */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-950/80 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-w-2xl w-full bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            {selectedProduct && (
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-xl overflow-hidden border border-gray-800">
                  <Image
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col">
                  <div className="mb-4">
                    <DialogTitle className="text-2xl font-bold text-white">
                      {selectedProduct.name}
                    </DialogTitle>
                  </div>

                  <div className="text-gray-300 space-y-4 flex-grow overflow-y-auto max-h-[300px] pr-2">
                    <p>{selectedProduct.description}</p>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      className="btn-sm bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                      onClick={closeModal}
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ProductDetailDialog;
