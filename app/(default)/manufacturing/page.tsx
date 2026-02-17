export const metadata = {
  title: "Manufacturing & Technology - ADPI Pharmaceuticals",
  description:
    "Explore our state-of-the-art manufacturing facilities and quality control processes.",
};

import Image from "next/image";
import ManufacturingImage from "@/public/images/manufacturing-tech.png";

export default function Manufacturing() {
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
              Manufacturing & Technology
            </h1>
            <p
              className="text-lg text-teal-200/65"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              State-of-the-art infrastructure ensuring the highest standards of
              safety and efficacy.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Text */}
            <div data-aos="fade-right">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                Advanced Technology
              </h3>
              <p className="mb-6 text-lg text-teal-200/65">
                Our manufacturing facilities are equipped with the latest
                high-tech machinery, allowing us to produce formulations that
                are not only effective but also safe and consistent. We strictly
                adhere to GMP (Good Manufacturing Practices) guidelines to
                ensure global quality standards.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Automated Production Lines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Stringent Quality Control (QC) Labs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Clean & Compliant Environment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Continuous Research & Development
                </li>
              </ul>
            </div>

            {/* Image */}
            <div data-aos="fade-left">
              <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={ManufacturingImage}
                  alt="Manufacturing Technology"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Certification / Process Snippet */}
          <div className="mt-20 grid gap-8 md:grid-cols-4">
            {[
              "GMP Certified",
              "ISO 9001:2015",
              "Quality Assured",
              "Eco-Friendly",
            ].map((badge, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gray-800/30 border border-teal-500/20 text-center"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <span className="text-teal-400 font-semibold">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
