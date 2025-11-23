import { groq } from "next-sanity";

// Get all events
export const eventsQuery = groq`*[_type == "event"] | order(date asc) {
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  image,
  tags,
  status,
  rsvps[] {
    name,
    partySize,
    submittedAt
  }
}`;

// Get a single event by slug
export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  image,
  tags,
  status,
  rsvps[] {
    name,
    partySize,
    submittedAt
  }
}`;

// Get upcoming events
export const upcomingEventsQuery = groq`*[_type == "event" && status == "upcoming"] | order(date asc) {
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  image,
  tags,
  status,
  rsvps[] {
    name,
    partySize,
    submittedAt
  }
}`;

// Get a single event by _id
export const eventByIdQuery = groq`*[_type == "event" && _id == $id][0] {
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  image,
  tags,
  status,
  rsvps[] {
    name,
    partySize,
    submittedAt
  }
}`;
