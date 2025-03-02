import Image from "next/image";
import AdpiPanDSR from "@/public/images/adpipan-dsr.jpeg";
import AdpainInjection from "@/public/images/adpain-aq-injection.jpeg";
import AdpainForte from "@/public/images/adpain-forte.jpeg";
import AdcillinCV from "@/public/images/adcillin-cv.jpeg";
import Adpesome40 from "@/public/images/adpesome-40.jpeg";
import AdpicofLSSyrup from "@/public/images/adpicof-ls-syrup.jpeg";
import AdcinAZ from "@/public/images/adcin-az.jpeg";
import AdrexonSB from "@/public/images/adrexon-sb.jpeg";
import Adrezon1g from "@/public/images/adrezon1mg.jpeg";
import AdpimonL from "@/public/images/adpimon-l.jpeg";
import PrirabDSR from "@/public/images/prirab-dsr.jpeg";
import AdpiPlusSoftgelCapsules from "@/public/images/ADPIGOLD -PLUS-Softgel-Capsules.jpeg";
import AdpiFenacSP from "@/public/images/adpifenac-sp.jpeg";
import Spotlight from "@/components/spotlight";

export default function Medicines() {

    var dataJson = [
        {
            "name": "Adpipan-DSR",
            "description": "Adpipan-DSR is a combination medicine containing *Pantoprazole (Gastro-Resistant) and Domperidone (Prolonged-Release), designed to provide effective relief from acid reflux, gastroesophageal reflux disease (GERD), and other digestive disorders. It helps reduce stomach acid production while improving gut motility, offering long-lasting relief from acidity, bloating, and nausea. Ideal for patients experiencing persistent acid reflux symptoms, **Adpipan-DSR* ensures better digestion and gastrointestinal comfort.",
            "imageSrc": AdpiPanDSR
        },
        {
            "name": "Adpain-AQ Injection",
            "description": "Adpain-AQ Injection* is a *Diclofenac Sodium Injection IP* formulated for *intramuscular (IM) and intravenous (IV) use. It is an **aqueous-based* analgesic and anti-inflammatory injection designed to provide rapid pain relief and reduce inflammation in conditions such as arthritis, muscle pain, post-operative pain, and other inflammatory disorders. With its fast-acting formula, *Adpain-AQ* ensures effective pain management and enhanced patient comfort.",
            "imageSrc": AdpainInjection
        },
        {
            "name": "Adpigold Forte",
            "description": "Adpigold Forte is a premium *softgel capsule* formulation enriched with *Omega-3 fatty acids, Green Tea Extract, Ginkgo Biloba Extract, Ginseng, Grape Seed Extract, Multivitamins, Multiminerals, Antioxidants, and Trace Elements*. This supplement is designed to: Increase Energy Levels, Support Heart Health, Enhance Eye Health,Boost the Immune System. Packed with essential nutrients, *Adpigold Forte* helps improve overall well-being, combat oxidative stress, and promote vitality. It is an ideal choice for individuals seeking better immunity, cardiovascular support, and enhanced cognitive function.",
            "imageSrc": AdpainForte
        },
        {
            "name": "Adcillin CV",
            "description": "ADCILLIN-CV 625 is a broad-spectrum antibiotic containing *Amoxycillin and Potassium Clavulanate. It is used to treat various **bacterial infections*, including: \n✅ Respiratory tract infections (bronchitis, pneumonia)  \n ✅ Ear, nose, and throat infections  \n✅ Urinary tract infections (UTIs)\n✅ *Skin and soft tissue infections*  \n✅ *Dental infections*  .The combination of *Amoxycillin* (a penicillin-class antibiotic) and *Clavulanic Acid* (a beta-lactamase inhibitor) enhances the drug’s effectiveness against resistant bacteria. *ADCILLIN-CV 625* helps in faster recovery by preventing bacterial growth and ensuring better infection control.  \n📌 *Dosage:* As directed by the physician.  \n📌 *Storage:* Store in a cool, dry place, away from direct sunlight.",
            "imageSrc": AdcillinCV
        },
        {
            "name": "Adpesome 40",
            "description": "*ADPESOME-40* (Esomeprazole Sodium for Injection, 40 mg) is a *proton pump inhibitor (PPI)* used for the treatment of *acid-related disorders*. It works by reducing stomach acid production and is administered via intravenous (IV) injection.  ### *Indications:* ✅ *Gastroesophageal Reflux Disease (GERD)* ✅ *Peptic Ulcers* ✅ *Zollinger-Ellison Syndrome* ✅ *Prevention of Stress Ulcers in Critically Ill Patients* ✅ *Acid Suppression in Patients Unable to Take Oral Medication* ### *Key Features:* 🔹 *Lyophilized Powder for IV Use* 🔹 *Fast-Acting Relief for Acid-Related Conditions* 🔹 *Prescription-Only Medication* 📌 *Dosage & Administration:* As directed by a healthcare professional. 📌 *Storage:* Keep in a cool, dry place, away from direct sunlight.",
            "imageSrc": Adpesome40
        },
        {
            "name": "Adpicof LS Syrup",
            "description": "*ADPICOF-LS Syrup* is a combination medicine containing *Ambroxol Hydrochloride, Levosalbutamol, and Guaiphenesin. It is used for the treatment of **cough with mucus (wet cough), bronchitis, and other respiratory conditions* by loosening mucus, reducing airway inflammation, and improving breathing. ### *Key Benefits:* ✅ *Ambroxol:* Acts as a mucolytic to thin and loosen phlegm ✅ *Levosalbutamol:* Relaxes airway muscles for easier breathing ✅ *Guaiphenesin:* Helps expel mucus from the lungs 📌 *Sugar-Free Formula* 📌 *Dosage:* As prescribed by a doctor 📌 *Storage:* Keep in a cool, dry place",
            "imageSrc": AdpicofLSSyrup
        },
        {
            "name": "ADCIN-AZ 500 Tablets",
            "description": "*ADCIN-AZ 500 Tablets* contain *Azithromycin 500 mg*, a broad-spectrum antibiotic used to treat bacterial infections. ### *Key Uses:* ✅ *Respiratory infections* – Bronchitis, pneumonia, sinusitis ✅ *Skin & soft tissue infections* ✅ *Ear & throat infections* – Tonsillitis, pharyngitis ✅ *Sexually transmitted infections* – Chlamydia 📌 *Dosage:* As prescribed by a doctor 📌 *Administration:* Take with or without food 📌 *Storage:* Keep in a cool, dry place",
            "imageSrc": AdcinAZ
        },
        {
            "name": "ADREXON-SB 1.5GM Injection",
            "description": "*ADREXON-SB 1.5GM Injection* contains *Ceftriaxone (1g) & Sulbactam (0.5g)*, a combination antibiotic used to treat severe bacterial infections. ### *Key Uses:* ✅ *Respiratory tract infections* – Pneumonia, bronchitis ✅ *Urinary tract infections (UTIs)* ✅ *Skin & soft tissue infections* ✅ *Bone & joint infections* ✅ *Intra-abdominal infections* 📌 *Administration:* For *intravenous (IV) or intramuscular (IM) use* only, as directed by a doctor. 📌 *Storage:* Keep in a cool, dry place away from direct sunlight.",
            "imageSrc": AdrexonSB
        },
        {
            "name": "ADREZON-1GM Injection",
            "description": "*ADREXON-1GM Injection* contains *Ceftriaxone 1g*, a broad-spectrum antibiotic used to treat bacterial infections. ### *Key Uses:* ✅ *Respiratory infections* – Pneumonia, bronchitis ✅ *Urinary tract infections (UTIs)* ✅ *Skin & soft tissue infections* ✅ *Bone & joint infections* ✅ *Septicemia & meningitis* 📌 *Administration:* For *intravenous (IV) or intramuscular (IM) use* only, as prescribed by a doctor. 📌 *Storage:* Keep in a cool, dry place away from direct sunlight.",
            "imageSrc": Adrezon1g
        },
        {
            "name": "ADPIMON-L Tablets",
            "description": "*ADPIMON-L Tablets* contain *Montelukast Sodium & Levocetirizine Hydrochloride*, commonly used to manage allergies and respiratory conditions. ### *Key Uses:* ✅ *Relieves allergic symptoms* – Sneezing, runny nose, and itching ✅ *Treats hay fever & allergic rhinitis* ✅ *Helps in asthma management* by reducing inflammation ✅ *Controls chronic urticaria (hives)* 📌 *Dosage:* As prescribed by a doctor 📌 *Storage:* Keep in a cool, dry place away from moisture",
            "imageSrc": AdpimonL
        },
        {
            "name": "PRIRAB-DSR Capsules",
            "description": "*PRIRAB-DSR Capsules* contain *Rabeprazole (EC) & Domperidone (SR)*, which help in managing acidity and gastric issues. ### *Key Uses:* ✅ *Treats acid reflux & GERD* ✅ *Reduces stomach acidity & heartburn* ✅ *Prevents nausea & vomiting* ✅ *Improves digestion by regulating stomach motility* 📌 *Dosage:* As directed by a physician 📌 *Storage:* Store in a cool, dry place away from direct sunlight",
            "imageSrc": PrirabDSR
        },
        {
            "name": "ADPIGOLD PLUS Softgel Capsules",
            "description": "*ADPIGOLD PLUS Softgel Capsules* contain *multivitamins and multiminerals* to support daily immunity, bone strength, and energy levels. ### *Key Benefits:* ✅ *Boosts immunity & overall health* ✅ *Strengthens bones & muscles* ✅ *Enhances energy & reduces fatigue* ✅ *Powered with Ginseng for vitality* 📌 *Dosage:* Take as prescribed by a doctor 📌 *Storage:* Keep in a cool, dry place away from direct sunlight",
            "imageSrc": AdpiPlusSoftgelCapsules
        },
        {
            "name": "ADPIFENAC-SP Tablets",
            "description": "*ADPIFENAC-SP Tablets* contain *Aceclofenac, Paracetamol, and Serratiopeptidase*, which help relieve pain, inflammation, and swelling. ### *Key Benefits:* ✅ *Effective pain relief for joint & muscle pain* ✅ *Reduces inflammation & swelling* ✅ *Helps in post-surgical recovery* 📌 *Dosage:* Take as prescribed by a doctor 📌 *Storage:* Store in a cool, dry place away from direct sunlight",
            "imageSrc": AdpiFenacSP
        },
        

        
    ];



    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
            
          <h1
              className="mb-8 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.teal.200),theme(colors.gray.50),theme(colors.teal.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up" id="medicines"
            >
              Generic Medicines
            </h1>

                <div className="pb-12 md:pb-20">
                    {/* Section header */}
                    {/* <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-teal-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-teal-200/50">
              <span className="inline-flex   bg-clip-text text-white">
                Corporate Profile
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.teal.200),theme(colors.gray.50),theme(colors.teal.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Every step for a better solution
            </h2>
            <p className="text-lg text-teal-200/65">
              We have developed new solutions to the problems which were prevailing in the Medical Health sector.
              Affordability and availability are our motto.
            </p>
          </div> */}
                    {/* Spotlight items */}
                    <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2 py-8">
                        {/* Card 1 */}
                        <>
                        {dataJson.map((item, index) => {
                            return (
                                <a key={index}
                                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-teal-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-teal-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                                    href="#0"
                                >
                                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                        {/* Arrow */}
                                        <div
                                            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={9}
                                                height={8}
                                                fill="none"
                                            >
                                                <path
                                                    fill="#F4F4F5"
                                                    d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                                                />
                                            </svg>
                                        </div>
                                        {/* Image */}
                                        <Image
                                            className="inline-flex"
                                            src={item.imageSrc}
                                            //   width={400}
                                            //   height={300}
                                              
                                            alt="Workflow 01"
                                        />
                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="mb-3">
                                                <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xl font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                                    <span className="bg-gradient-to-r from-teal-500 to-teal-200 bg-clip-text text-transparent">
                                                        {item.name}
                                                    </span>
                                                </span>
                                            </div>
                                            <p className="text-teal-200/65 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })
                    }
                        </>
                    </Spotlight>
                </div>
            </div>
        </section>
    );
}
