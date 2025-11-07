export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    rsvpCount?: number;
    image?: string;
    tags?: string[];
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
}
