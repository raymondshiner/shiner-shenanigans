export interface RSVP {
    name: string;
    partySize: number;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    rsvps?: RSVP[];
    image?: string;
    tags?: string[];
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
}
