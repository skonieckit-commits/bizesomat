import { defineField, defineType } from "sanity";

export const artykul = defineType({
  name: "artykul",
  title: "Artykuły",
  type: "document",
  fields: [
    defineField({ name: "tytul", title: "Tytuł", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "URL (slug)", type: "slug", options: { source: "tytul" }, validation: (r) => r.required() }),
    defineField({ name: "kategoria", title: "Kategoria", type: "string",
      options: { list: ["Rynek i trendy", "Modele biznesowe", "Finansowanie", "Prawo i regulacje", "Wiedza praktyczna", "Case studies"] }
    }),
    defineField({ name: "opis", title: "Krótki opis (excerpt)", type: "text", rows: 3 }),
    defineField({ name: "zdjecie", title: "Zdjęcie główne", type: "image", options: { hotspot: true } }),
    defineField({ name: "czasCzytania", title: "Czas czytania (min)", type: "number" }),
    defineField({ name: "tresc", title: "Treść artykułu", type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ]
    }),
    defineField({ name: "dataPublikacji", title: "Data publikacji", type: "datetime" }),
    defineField({ name: "seoTytul", title: "SEO: Tytuł", type: "string" }),
    defineField({ name: "seoOpis", title: "SEO: Opis", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "tytul", subtitle: "kategoria", media: "zdjecie" } },
});
