"use server";

import { createClient } from "@sanity/client";
import { revalidatePath } from "next/cache";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-07",
    token: process.env.SANITY_API_TOKEN, // Required for write operations
    useCdn: false, // Must be false for mutations
});

export async function submitRSVP(
    eventId: string,
    name: string,
    partySize: number
) {
    try {
        // Validate inputs
        if (!name.trim()) {
            return { success: false, error: "Name is required" };
        }

        if (partySize < 1 || partySize > 20) {
            return {
                success: false,
                error: "Party size must be between 1 and 20",
            };
        }

        if (!eventId) {
            return { success: false, error: "Event ID is required" };
        }

        // Create the RSVP object
        const newRSVP = {
            _type: "rsvp",
            name: name.trim(),
            partySize: partySize,
            submittedAt: new Date().toISOString(),
        };

        // Update the event with the new RSVP
        await client
            .patch(eventId)
            .setIfMissing({ rsvps: [] })
            .append("rsvps", [newRSVP])
            .commit();

        // Revalidate the event pages to show updated RSVP
        revalidatePath("/events");
        revalidatePath(`/events/${eventId}`);

        return {
            success: true,
            message: `Thanks ${name}! Your RSVP for ${partySize} ${partySize === 1 ? "person" : "people"} has been recorded.`,
        };
    } catch (error) {
        console.error("Error submitting RSVP:", error);
        return {
            success: false,
            error: "Failed to submit RSVP. Please try again or contact the administrator.",
        };
    }
}
