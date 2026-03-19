export type Lang = "sv" | "en";

export interface MultiLingualValue<T> {
    sv: T;
    en: T;
}

export type MultiLingualString = MultiLingualValue<string>;

export const t = <T>(val: MultiLingualValue<T>, lang: Lang): T => val[lang];

export function formatDate(dateStr: string, lang: Lang): string {
    const [year, month] = dateStr.split("-").map(Number);
    return new Intl.DateTimeFormat(lang, { year: "numeric", month: "long" }).format(
        new Date(year, month - 1)
    );
}

export const getPresentLabel = (lang: Lang): string => (lang === "sv" ? "nuvarande" : "present");

export interface CVData {
    name: string;
    title: MultiLingualString;
    contact: {
        email: string;
        phone?: string;
        location: MultiLingualString;
        github?: string;
        linkedin?: string;
    };
    summary: MultiLingualString;
    experience: {
        company: string;
        role: MultiLingualString;
        startDate: string;
        endDate: string | undefined; // "YYYY-MM", null = present
        location: MultiLingualString;
        description: MultiLingualValue<string[]>;
        tech?: string[];
    }[];
    education: {
        institution: MultiLingualString;
        degree: MultiLingualString;
        field: MultiLingualString;
        startDate: string;
        endDate: string | undefined;
        location: MultiLingualString;
        notes?: MultiLingualString;
    }[];
    skills: {
        category: MultiLingualString;
        items: string[];
    }[];
    projects?: {
        name: string;
        url?: string;
        description: MultiLingualString;
        tech?: string[];
    }[];
}

export const cv: CVData = {
    name: "Pontus Söderlund",
    title: { sv: "Mjukvaruutvecklare / Arkitekt", en: "Software Developer / Architect" },
    contact: {
        email: "pontus@psoder.net",
        location: { sv: "Sverige", en: "Sweden" },
        github: "psoder",
    },
    summary: {
        sv: "Backendfokuserad utvecklare och arkitekt med ett djupt intresse för hur system designas och byggs. Erfarenhet av att leda teknisk riktning på ett startup i tidig fas, med upphandlings- och avtalshanteringssystem för offentlig och privat sektor. Drivs av robust datamodellering, god arkitektur och långsiktig underhållbarhet.",
        en: "Backend-focused developer and architect with a deep interest in how systems are designed and built. Experienced in leading technical direction at an early-stage startup, building procurement and contract management software for the public and private sector. Driven by robust data modeling, sound architecture, and long-term maintainability.",
    },
    experience: [
        {
            company: "Clira AB",
            role: { sv: "Mjukvaruutvecklare", en: "Software Developer" },
            startDate: "2023-06",
            endDate: undefined,
            location: { sv: "Stockholm, Sverige", en: "Stockholm, Sweden" },
            description: {
                sv: [
                    "Arkitekterade och byggde ett system för ifyllnad och validering av TED eForms-annonser i enlighet med EU:s upphandlingsstandarder.",
                    "Designade dataåtkomstlager för upphandlingar och avtal med versionering, PDF-export och arkiveringsstöd.",
                    "Byggde en integrationsplattform för att koppla externa system till upphandlings- och avtalsplattformen.",
                    "Gick från utvecklare till stabilitetsansvarig till ledande arkitekt, med ansvar för systemarkitektur och teknisk riktning.",
                    "Drev migrering till monorepo och trunkbaserat utvecklingsflöde, införde kodkvalitetsverktyg och ledde uppgradering av beroenden.",
                ],
                en: [
                    "Architected and built a system for filling in and validating TED eForms notices in compliance with EU procurement standards.",
                    "Designed procurement and contract data access layers with versioning, PDF export, and archival support.",
                    "Built an integration platform for connecting external systems to the procurement and contract platform.",
                    "Progressed from developer to head of stability to lead architect, taking ownership of system architecture and technical direction.",
                    "Led migration to a monorepo and trunk-based development, introduced code quality tooling, and drove dependency upgrades.",
                ],
            },
            tech: ["TypeScript", "Next.js", "React", "PHP", "Laravel", "Kotlin", "WebAssembly"],
        },
    ],
    education: [
        {
            institution: { sv: "Kungliga Tekniska Högskolan", en: "Royal Institute of Technology" },
            degree: { sv: "Civilingenjör (ej avslutad)", en: "Master of Science (incomplete)" },
            field: { sv: "Datateknik", en: "Computer Science" },
            startDate: "2019-09",
            endDate: "2023-05",
            location: { sv: "Stockholm, Sverige", en: "Stockholm, Sweden" },
        },
    ],
    skills: [
        {
            category: { sv: "Programmeringsspråk", en: "Languages" },
            items: ["TypeScript", "Kotlin", "PHP", "Java", "Rust", "WebAssembly"],
        },
        {
            category: { sv: "Webb", en: "Web" },
            items: ["React", "Astro", "Next.js", "Tailwind"],
        },
        {
            category: { sv: "Backend & Data", en: "Backend & Data" },
            items: ["PostgreSQL", "Redis", "REST", "gRPC"],
        },
        {
            category: { sv: "Verktyg", en: "Tools" },
            items: ["Git", "Docker", "GitHub Actions", "Linux", "NX"],
        },
    ],
};
