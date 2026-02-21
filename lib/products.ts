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
import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  description?: string;
  imageSrc: StaticImageData;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Adpipan-DSR",
    // description:
    //   "Adpipan-DSR is a combination medicine containing Pantoprazole (Gastro-Resistant) and Domperidone (Prolonged-Release). It provides effective relief from acid reflux, gastroesophageal reflux disease (GERD), and other digestive disorders. It reduces stomach acid production and improves gut motility, offering long-lasting relief from acidity, bloating, and nausea. It supports better digestion and gastrointestinal comfort.",
    imageSrc: AdpiPanDSR,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Adpain-AQ Injection",
    // description:
    //   "Adpain-AQ Injection contains Diclofenac Sodium and is formulated for intramuscular (IM) and intravenous (IV) use. It is an aqueous-based analgesic and anti-inflammatory injection that provides rapid pain relief and reduces inflammation in arthritis, muscle pain, post-operative pain, and other inflammatory conditions.",
    imageSrc: AdpainInjection,
  },
  {
    id: 3,
    name: "Adpigold Forte",
    // description:
    //   "Adpigold Forte is a softgel capsule enriched with Omega-3 fatty acids, Green Tea Extract, Ginkgo Biloba Extract, Ginseng, Grape Seed Extract, Multivitamins, Multiminerals, Antioxidants, and Trace Elements. It helps increase energy levels, supports heart and eye health, boosts immunity, and improves overall well-being.",
    imageSrc: AdpainForte,
  },
  {
    id: 4,
    name: "Adcillin CV 625",
    // description:
    //   "Adcillin CV 625 contains Amoxycillin and Potassium Clavulanate. It is used to treat bacterial infections including respiratory tract infections, ear, nose and throat infections, urinary tract infections, skin and soft tissue infections, and dental infections. It helps prevent bacterial growth and supports faster recovery.",
    imageSrc: AdcillinCV,
  },
  {
    id: 5,
    name: "Adpesome 40 Injection",
    // description:
    //   "Adpesome 40 contains Esomeprazole Sodium for Injection (40 mg), a proton pump inhibitor used for treating acid-related disorders. It is administered intravenously and helps manage GERD, peptic ulcers, Zollinger-Ellison syndrome, and stress ulcer prevention in critically ill patients.",
    imageSrc: Adpesome40,
  },
  {
    id: 6,
    name: "Adpicof LS Syrup",
    // description:
    //   "Adpicof LS Syrup contains Ambroxol Hydrochloride, Levosalbutamol, and Guaiphenesin. It is used for the treatment of cough with mucus, bronchitis, and other respiratory conditions. It helps loosen mucus, reduce airway inflammation, and improve breathing.",
    imageSrc: AdpicofLSSyrup,
  },
  {
    id: 7,
    name: "Adcin-AZ 500 Tablets",
    // description:
    //   "Adcin-AZ 500 Tablets contain Azithromycin 500 mg, a broad-spectrum antibiotic used to treat respiratory infections, skin and soft tissue infections, ear and throat infections, and certain sexually transmitted infections.",
    imageSrc: AdcinAZ,
  },
  {
    id: 8,
    name: "Adrexon-SB 1.5GM Injection",
    // description:
    //   "Adrexon-SB 1.5GM Injection contains Ceftriaxone (1g) and Sulbactam (0.5g). It is used to treat severe bacterial infections including respiratory tract infections, urinary tract infections, skin and soft tissue infections, bone and joint infections, and intra-abdominal infections.",
    imageSrc: AdrexonSB,
  },
  {
    id: 9,
    name: "Adrezon-1GM Injection",
    // description:
    //   "Adrezon-1GM Injection contains Ceftriaxone 1g. It is a broad-spectrum antibiotic used in the treatment of respiratory infections, urinary tract infections, skin and soft tissue infections, bone and joint infections, septicemia, and meningitis.",
    imageSrc: Adrezon1g,
  },
  {
    id: 10,
    name: "Adpimon-L Tablets",
    // description:
    //   "Adpimon-L Tablets contain Montelukast Sodium and Levocetirizine Hydrochloride. They are used to manage allergic conditions such as allergic rhinitis, hay fever, chronic urticaria, and asthma-related symptoms.",
    imageSrc: AdpimonL,
  },
  {
    id: 11,
    name: "Prirab-DSR Capsules",
    // description:
    //   "Prirab-DSR Capsules contain Rabeprazole (Enteric Coated) and Domperidone (Sustained Release). They are used for the management of acid reflux, GERD, heartburn, nausea, and other gastric conditions.",
    imageSrc: PrirabDSR,
  },
  {
    id: 12,
    name: "Adpigold Plus Softgel Capsules",
    // description:
    //   "Adpigold Plus Softgel Capsules contain multivitamins and multiminerals that support daily immunity, bone strength, muscle health, and energy levels. The formulation also includes Ginseng for enhanced vitality.",
    imageSrc: AdpiPlusSoftgelCapsules,
  },
  {
    id: 13,
    name: "Adpifenac-SP Tablets",
    // description:
    //   "Adpifenac-SP Tablets contain Aceclofenac, Paracetamol, and Serratiopeptidase. They are used to relieve pain, inflammation, and swelling associated with joint and muscle conditions and post-surgical recovery.",
    imageSrc: AdpiFenacSP,
  },
];

export const getAllProducts = () => {
  return products;
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.isFeatured);
};
