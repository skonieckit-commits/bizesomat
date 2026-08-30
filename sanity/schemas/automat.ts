import { defineField, defineType } from "sanity";

export const automat = defineType({
  name: "automat",
  title: "Automaty (modele biznesowe)",
  type: "document",
  fields: [
    defineField({ name: "nazwa", title: "Nazwa", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", options: { source: "nazwa" } }),
    defineField({ name: "emoji", title: "Emoji", type: "string" }),
    defineField({ name: "tagline", title: "Tagline (krótki opis)", type: "string" }),
    defineField({ name: "opis", title: "Opis główny", type: "text", rows: 4 }),
    defineField({ name: "marza", title: "Marża (%)", type: "string" }),
    defineField({ name: "roi", title: "ROI (miesięcy)", type: "string" }),
    defineField({ name: "kosztMin", title: "Koszt min (zł)", type: "number" }),
    defineField({ name: "kosztMax", title: "Koszt max (zł)", type: "number" }),
    defineField({ name: "przychodMin", title: "Przychód min/mies (zł)", type: "number" }),
    defineField({ name: "przychodMax", title: "Przychód max/mies (zł)", type: "number" }),
    defineField({ name: "rynek", title: "Dane rynkowe", type: "string" }),
    defineField({ name: "zdjecie", title: "Zdjęcie", type: "image", options: { hotspot: true } }),
    defineField({ name: "tresc", title: "Pełny artykuł", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "kolejnosc", title: "Kolejność na stronie", type: "number" }),
  ],
  preview: { select: { title: "nazwa", subtitle: "tagline", media: "zdjecie" } },
});
