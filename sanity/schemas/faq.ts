import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "Pytania i odpowiedzi (FAQ)",
  type: "document",
  fields: [
    defineField({ name: "pytanie", title: "Pytanie", type: "string", validation: (r) => r.required() }),
    defineField({ name: "odpowiedz", title: "Odpowiedź", type: "text", rows: 4 }),
    defineField({ name: "kategoria", title: "Kategoria", type: "string",
      options: { list: ["Ogólne", "Finansowanie", "Kwiatomaty", "Chlebomaty", "Ciastomaty", "Mięsomaty", "Warzywomaty", "Prawo"] }
    }),
    defineField({ name: "kolejnosc", title: "Kolejność", type: "number" }),
  ],
  preview: { select: { title: "pytanie", subtitle: "kategoria" } },
});
