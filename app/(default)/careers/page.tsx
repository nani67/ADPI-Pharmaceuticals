import Image from "next/image";
import CareersImage from "@/public/images/careers-culture.png";
import CareerForm from "@/components/career-form";

export default function Careers() {
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
              Associate With Us
            </h1>
            <p
              className="text-lg text-teal-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Grow your career or business with ADPI Pharmaceuticals.
            </p>
          </div>

          <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-start">
            {/* Text & Image */}
            <div className="space-y-8">
              <div
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl mb-8"
                data-aos="fade-right"
              >
                <Image
                  src={CareersImage}
                  alt="ADPI Culture"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="text-lg text-gray-300" data-aos="fade-up">
                <p>
                  We are always looking for passionate individuals and experts
                  to join our mission. Whether you are a Medical Representative,
                  Distributor, or looking for a Franchise opportunity, we
                  welcome you to the ADPI family.
                </p>
                <br />
                <p>
                  Join a team that values innovation, integrity, and impact. We
                  offer a collaborative environment where your contributions
                  directly improve patient lives.
                </p>
              </div>
            </div>

            {/* Form */}
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
