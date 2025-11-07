import { client } from "@/sanity/lib/client";
import {
    eventByIdQuery,
    eventBySlugQuery,
    eventsQuery,
    upcomingEventsQuery,
} from "@/sanity/lib/queries";
import { Event } from "./types";

export async function getAllEvents(): Promise<Event[]> {
    const events = await client.fetch(eventsQuery);
    // Map Sanity events to include id field for compatibility
    return events.map((event: any) => ({
        ...event,
        id: event._id,
    }));
}

export async function getEventById(id: string): Promise<Event | null> {
    const event = await client.fetch(eventByIdQuery, { id });
    if (!event) return null;
    return {
        ...event,
        id: event._id,
    };
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
    const event = await client.fetch(eventBySlugQuery, { slug });
    if (!event) return null;
    return {
        ...event,
        id: event._id,
    };
}

export async function getUpcomingEvents(): Promise<Event[]> {
    const events = await client.fetch(upcomingEventsQuery);
    return events.map((event: any) => ({
        ...event,
        id: event._id,
    }));
}

export async function getEventsByStatus(
    status: Event["status"]
): Promise<Event[]> {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.status === status);
}

export function formatEventDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
