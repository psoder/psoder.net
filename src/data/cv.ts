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
    title: { sv: "Mjukvaruutvecklare", en: "Software Developer" },
    contact: {
        email: "pontus@psoder.net",
        location: { sv: "Sverige", en: "Sweden" },
        github: "psoder",
    },
    summary: {
        sv: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit quos exercitationem labore repudiandae? Assumenda, ut. Corrupti, labore error. Dolores dolor accusamus modi. Perspiciatis, nam? Soluta assumenda vero odit animi.",
        en: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit quos exercitationem labore repudiandae? Assumenda, ut. Corrupti, labore error. Dolores dolor accusamus modi. Perspiciatis, nam? Soluta assumenda vero odit animi.",
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
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                    "Dolores dolor accusamus modi. Perspiciatis, nam? Soluta assumenda vero odit animi.",
                ],
                en: [
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                    "Dolores dolor accusamus modi. Perspiciatis, nam? Soluta assumenda vero odit animi.",
                ],
            },
            tech: ["TypeScript", "Next.js", "React", "PHP", "Laravel", "Kotlin"],
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
            items: ["TypeScript", "Kotlin", "PHP", "Java", "Rust"],
        },
        {
            category: { sv: "Webb", en: "Web" },
            items: ["React", "Astro", "Next.js", "Tailwind", "NX"],
        },
        {
            category: { sv: "Verktyg", en: "Tools" },
            items: ["Git", "Docker", "Linux", "PostgreSQL"],
        },
    ],
};
