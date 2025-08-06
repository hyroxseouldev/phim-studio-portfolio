import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const estimateType = defineType({
  name: "estimate",
  title: "Estimate",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "name",
      title: "이름",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "연락처",
      type: "string",
    }),
    defineField({
      name: "worksType",
      title: "작업 유형",
      type: "reference",
      to: { type: "works" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "문의사항",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "문의일시",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      worksType: "worksType.title",
      message: "message",
    },
    prepare(selection) {
      const { title, worksType, message } = selection;
      return {
        title: `${title} (${worksType || "작업유형 미선택"})`,
        subtitle: message,
      };
    },
  },
});
