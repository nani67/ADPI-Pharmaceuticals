import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact Us - ADPI Pharmaceuticals",
  description:
    "Get in touch with ADPI Pharmaceuticals. Address, phone, email, and contact form.",
};

export default function Contact() {
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
              Contact Us
            </h1>
            <p
              className="text-lg text-teal-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              We are here to answer your questions and hear your feedback.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-200">
                  Head Office
                </h3>
                <p className="text-gray-300">
                  123 Pharma Sector, <br />
                  Industrial Area, <br />
                  Lucknow, Uttar Pradesh, India - 226001
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-200">
                  Contact Details
                </h3>
                <p className="text-gray-300">
                  Phone: +91 98765 43210 <br />
                  Email: info@adpopharma.com <br />
                  Support: support@adpopharma.com
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-200">
                  Working Hours
                </h3>
                <p className="text-gray-300">
                  Monday - Saturday: 9:00 AM - 6:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
