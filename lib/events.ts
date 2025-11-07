import eventsData from "@/data/events.json";
import { Event } from "./types";

export function getAllEvents(): Event[] {
    return eventsData as Event[];
}

export function getEventById(id: string): Event | undefined {
    return eventsData.find((event) => event.id === id) as Event | undefined;
}

export function getUpcomingEvents(): Event[] {
    const now = new Date();
    return eventsData
        .filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate >= now && event.status === "upcoming";
        })
        .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ) as Event[];
}

export function getEventsByStatus(status: Event["status"]): Event[] {
    return eventsData.filter((event) => event.status === status) as Event[];
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
