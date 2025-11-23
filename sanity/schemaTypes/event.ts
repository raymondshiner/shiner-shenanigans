import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Event Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "date",
            title: "Event Date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "time",
            title: "Event Time",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "Event location or address",
        }),
        defineField({
            name: "image",
            title: "Event Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description: "Important for SEO and accessibility",
                },
            ],
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Upcoming", value: "upcoming" },
                    { title: "Ongoing", value: "ongoing" },
                    { title: "Completed", value: "completed" },
                    { title: "Cancelled", value: "cancelled" },
                ],
                layout: "radio",
            },
            initialValue: "upcoming",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "rsvps",
            title: "RSVPs",
            type: "array",
            of: [{ type: "rsvp" }],
        }),
    ],
    preview: {
        select: {
            title: "title",
            date: "date",
            status: "status",
            media: "image",
        },
        prepare(selection) {
            const { title, date, status } = selection;
            return {
                title,
                subtitle: `${date} - ${status}`,
                media: selection.media,
            };
        },
    },
});
