export interface RSVP {
    name: string;
    partySize: number;
    submittedAt?: string;
}

export interface Event {
    id: string;
    _id?: string;
    title: string;
    slug?: {
        current: string;
    };
    description: string;
    date: string;
    time: string;
    rsvps?: RSVP[];
    image?: any;
    tags?: string[];
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
}
