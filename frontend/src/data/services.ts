// data/services.ts
export type Service = {
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};

export const servicesData: Service[] = [
  {
    slug: "legal-consultation-services",
    title: {
      en: "Legal Consultation Services",
      ar: "خدمات الاستشارات القانونية",
    },
    description: {
      en: "Expert legal consultations tailored to your needs.",
      ar: "استشارات قانونية متخصصة تناسب احتياجاتك.",
    },
  },
  {
    slug: "defense-in-all-cases",
    title: {
      en: "Defense in All Cases",
      ar: "الدفاع في جميع القضايا",
    },
    description: {
      en: "Professional representation in all legal matters.",
      ar: "تمثيل احترافي في جميع المسائل القانونية.",
    },
  },
  {
    slug: "foreign-investment-services",
    title: {
      en: "Foreign Investment Services",
      ar: "خدمات الاستثمار الأجنبي",
    },
    description: {
      en: "Comprehensive support for foreign investors.",
      ar: "دعم شامل للمستثمرين الأجانب.",
    },
  },
  {
    slug: "contracts-drafting-and-review",
    title: {
      en: "Contracts Drafting and Review",
      ar: "صياغة العقود ومراجعتها",
    },
    description: {
      en: "Precise contract drafting and legal review services.",
      ar: "خدمات دقيقة لصياغة العقود ومراجعتها قانونيًا.",
    },
  },
  {
    slug: "arbitration-and-dispute-resolution",
    title: {
      en: "Arbitration and Dispute Resolution",
      ar: "التحكيم وتسوية النزاعات",
    },
    description: {
      en: "Efficient arbitration and conflict resolution services.",
      ar: "خدمات فعالة للتحكيم وتسوية النزاعات.",
    },
  },
  {
    slug: "real-estate-and-property-law",
    title: {
      en: "Real Estate and Property Law",
      ar: "قانون العقارات والممتلكات",
    },
    description: {
      en: "Legal guidance for real estate transactions and ownership.",
      ar: "إرشاد قانوني للمعاملات العقارية والملكية.",
    },
  },
  {
    slug: "corporate-and-commercial-law",
    title: {
      en: "Corporate and Commercial Law",
      ar: "القانون التجاري والشركات",
    },
    description: {
      en: "Legal support for companies and business operations.",
      ar: "دعم قانوني للشركات وعمليات الأعمال.",
    },
  },
  {
    slug: "family-and-personal-status-law",
    title: {
      en: "Family and Personal Status Law",
      ar: "قانون الأسرة والأحوال الشخصية",
    },
    description: {
      en: "Handling family law matters with care and professionalism.",
      ar: "معالجة قضايا الأسرة والأحوال الشخصية باحترافية.",
    },
  },
  {
    slug: "labor-and-employment-law",
    title: {
      en: "Labor and Employment Law",
      ar: "قانون العمل والعمال",
    },
    description: {
      en: "Advising on employee rights and labor disputes.",
      ar: "تقديم المشورة حول حقوق الموظفين والنزاعات العمالية.",
    },
  },
  {
    slug: "criminal-law",
    title: {
      en: "Criminal Law",
      ar: "القانون الجنائي",
    },
    description: {
      en: "Defending against criminal charges with integrity.",
      ar: "الدفاع ضد التهم الجنائية بنزاهة.",
    },
  },
];
