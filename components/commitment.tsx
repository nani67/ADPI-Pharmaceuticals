import Image from "next/image";
import CommitmentImage from "@/public/images/commitment-patient-care.png";

export default function Commitment() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Image */}
            <div data-aos="fade-right">
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                {/* <div className="bg-gray-700 w-full h-full flex items-center justify-center text-gray-400">
                            [Patient Care Image]
                        </div> */}
                <Image
                  src={CommitmentImage}
                  alt="Doctor Patient Trust"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Content */}
            <div data-aos="fade-left">
              <h2 className="mb-4 text-3xl font-bold font-nacelle text-gray-200">
                Our Commitment to You
              </h2>
              <p className="mb-6 text-xl text-white-200/65">
                At ADPI Pharmaceuticals, trust is our most valuable asset. We
                are dedicated to building lasting relationships with doctors,
                pharmacists, and patients through transparency, reliability, and
                compassion.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Patient-centric approach in every formulation.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Trusted by 100+ hospitals and healthcare professionals.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Unwavering commitment to safety and efficacy.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
