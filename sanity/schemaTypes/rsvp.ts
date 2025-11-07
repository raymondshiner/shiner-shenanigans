import { defineField, defineType } from "sanity";

export const rsvpType = defineType({
    name: "rsvp",
    title: "RSVP",
    type: "object",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "partySize",
            title: "Party Size",
            type: "number",
            validation: (rule) => rule.required().min(1).integer(),
            initialValue: 1,
        }),
        defineField({
            name: "submittedAt",
            title: "Submitted At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            name: "name",
            partySize: "partySize",
        },
        prepare(selection) {
            const { name, partySize } = selection;
            return {
                title: name,
                subtitle: `Party size: ${partySize}`,
            };
        },
    },
});
