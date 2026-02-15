import DirectorCard from "@/components/director-card";

export const metadata = {
  title: "Board of Directors - ADPI Pharmaceuticals",
  description: "Meet the people who made the company possible.",
};

interface Director {
  name: string;
  role: string;
  bio: string;
}

const directors: Director[] = [
  {
    name: "Priya Kumari",
    role: "Founder",
    bio: "Visionary leader dedicated to driving innovation and ensuring top-quality healthcare solutions. Her strategic guidance has been pivotal in shaping ADPI's mission.",
  },
  {
    name: "Aditi Chaturvedi",
    role: "Founder",
    bio: "Committed to operational excellence and expanding our reach to underserved communities. She champions patient-first values across all initiatives.",
  },
  {
    name: "Rakhi Kumari",
    role: "Founder",
    bio: "Focuses on building strong partnerships and ensuring sustainable growth. Her expertise in the pharmaceutical landscape helps steer the company towards new horizons.",
  },
];

export default function BoardOfDirectors() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.teal.200),theme(colors.gray.50),theme(colors.teal.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Board of Directors
            </h2>
            <p
              className="text-lg text-teal-200/65"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              People who made the company possible
            </p>
          </div>

          {/* Directors Grid */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {directors.map((director, index) => (
              <DirectorCard
                key={index}
                name={director.name}
                role={director.role}
                bio={director.bio}
                delay={200 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
