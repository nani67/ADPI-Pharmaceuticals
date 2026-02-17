export const metadata = {
  title: "Who We Are - ADPI Pharmaceuticals",
  description:
    "Learn about ADPI Pharmaceuticals, our vision, mission, and core values.",
};

import Image from "next/image";
import TeamImage from "@/public/images/who-we-are-team.png";
import { IndianRupee, ShieldCheck, Sparkles } from "lucide-react";

export default function WhoWeAre() {
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
              Who We Are
            </h1>
            <p
              className="text-lg text-teal-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Dedicated to affordable, safe, and quality healthcare for all.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 items-center">
            {/* Image */}
            <div data-aos="fade-right">
              <div className="relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={TeamImage}
                  alt="Our Team"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text */}
            <div data-aos="fade-left">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                About ADPI Pharmaceuticals
              </h3>
              <p className="mb-6 text-lg text-white-200/65">
                ADPI Pharmaceuticals was founded with a dream: to manufacture
                the highest quality medicines at economical prices. We believe
                that world-class healthcare should be accessible to everyone.
                <br />
                <br />
                Guided by our founders **Priya Kumari, Aditi Chaturvedi & Rakhi
                Kumari**, we established our brand in 2024 and now serve over
                100+ hospitals in Uttar Pradesh and Bihar.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <h4 className="font-bold text-teal-400">Our Vision</h4>
                  <p className="text-gray-300">
                    To be a global leader in pharmaceutical solutions, ensuring
                    that no patient is denied treatment due to cost or
                    unavailability.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <h4 className="font-bold text-teal-400">Our Mission</h4>
                  <p className="text-gray-300">
                    To innovate and produce high-quality formulations that
                    surpass international standards while maintaining
                    practicality and affordability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-20">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-200">
              Our Core Values
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div
                className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 p-4">
                  <IndianRupee size={28} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-100">
                  Affordable
                </h3>
                <p className="text-gray-300">
                  Uncompromising quality at prices that patients can afford.
                </p>
              </div>
              <div
                className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 p-4">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-100">Safe</h3>
                <p className="text-gray-300">
                  Rigorous safety standards and quality control in every batch.
                </p>
              </div>
              <div
                className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 p-4">
                  <Sparkles size={28} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-100">
                  Quality
                </h3>
                <p className="text-gray-300">
                  Formulations that meet and exceed international benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
