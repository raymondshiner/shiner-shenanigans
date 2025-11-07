import { Event, RSVP } from "./types";

export function getTotalGuestCount(rsvps?: RSVP[]): number {
    if (!rsvps || rsvps.length === 0) return 0;
    return rsvps.reduce((total, rsvp) => total + rsvp.partySize, 0);
}

export function getRSVPCount(event: Event): number {
    return event.rsvps?.length || 0;
}

export function getTotalGuests(event: Event): number {
    return getTotalGuestCount(event.rsvps);
}
