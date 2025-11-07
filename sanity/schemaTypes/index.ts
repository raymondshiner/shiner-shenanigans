import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./event";
import { rsvpType } from "./rsvp";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [eventType, rsvpType],
};
