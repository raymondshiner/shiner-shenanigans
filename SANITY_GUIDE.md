# Sanity CMS Tutorial

Welcome to your Sanity CMS setup! This guide will teach you how to use Sanity to manage your events.

## 🎯 What is Sanity CMS?

Sanity is a headless CMS (Content Management System) that gives you:

- A beautiful admin interface to manage your content
- Real-time collaboration
- Structured content with custom schemas
- A powerful query language (GROQ)
- Image handling and optimization

## 📁 Project Structure

Your Sanity setup has the following structure:

```
/sanity
  ├── env.ts                 # Environment configuration
  ├── lib/
  │   ├── client.ts          # Sanity client for fetching data
  │   ├── queries.ts         # GROQ queries for events
  │   └── image.ts           # Image URL builder
  ├── schemaTypes/
  │   ├── index.ts           # Schema exports
  │   ├── event.ts           # Event schema definition
  │   └── rsvp.ts            # RSVP schema definition
  └── structure.ts           # Studio structure configuration

/app/admin/[[...tool]]/page.tsx  # Sanity Studio route
sanity.config.ts                  # Main Sanity configuration
.env.local                        # Environment variables
```

## 🚀 Getting Started

### 1. Access Sanity Studio

Your Sanity Studio is running at: **http://localhost:3000/admin**

Visit this URL while your dev server is running to access the admin interface.

### 2. Create Your First Event

1. Go to http://localhost:3000/admin
2. Click on "Event" in the sidebar
3. Click "Create" button
4. Fill in the event details:
    - **Title**: Name of your event
    - **Slug**: Click "Generate" to auto-create from title
    - **Description**: Details about the event
    - **Date**: When the event happens
    - **Time**: What time the event starts
    - **Image** (optional): Upload an event image
    - **Tags**: Add tags like "games", "food", "holiday"
    - **Status**: Choose "upcoming", "ongoing", "completed", or "cancelled"
5. Click "Publish" to save your event

### 3. Understanding Schemas

#### Event Schema (`sanity/schemaTypes/event.ts`)

The Event schema defines what fields your events have:

```typescript
- title: string (required)         // Event name
- slug: slug (required)            // URL-friendly identifier
- description: text (required)     // Event details
- date: date (required)            // Event date
- time: string (required)          // Event time
- image: image (optional)          // Event photo
- tags: array of strings           // Categories/tags
- status: string (required)        // Event status
- rsvps: array of RSVP objects     // List of RSVPs
```

#### RSVP Schema (`sanity/schemaTypes/rsvp.ts`)

The RSVP schema is nested within events:

```typescript
- name: string (required)          // Guest name
- partySize: number (required)     // Number of people
- submittedAt: datetime            // When RSVP was made
```

## 🔍 Querying Data with GROQ

GROQ (Graph-Relational Object Queries) is Sanity's query language.

### Example Queries (in `sanity/lib/queries.ts`)

**Get all events:**

```groq
*[_type == "event"] | order(date asc)
```

**Get upcoming events only:**

```groq
*[_type == "event" && status == "upcoming"] | order(date asc)
```

**Get event by slug:**

```groq
*[_type == "event" && slug.current == $slug][0]
```

### Using Queries in Your Code

```typescript
import { client } from "@/sanity/lib/client";
import { eventsQuery } from "@/sanity/lib/queries";

// Fetch all events
const events = await client.fetch(eventsQuery);

// Fetch event by slug with parameter
const event = await client.fetch(eventBySlugQuery, { slug: "game-night" });
```

## 🛠️ Common Tasks

### Adding RSVPs Manually

1. Go to your event in the Studio
2. Scroll to the "RSVPs" section
3. Click "Add item"
4. Enter the name and party size
5. The submission time is added automatically
6. Click "Publish" to save

### Uploading Images

1. Click on the "Image" field in your event
2. Drag and drop an image or click to browse
3. (Optional) Add alt text for accessibility
4. Use the hotspot tool to crop/position the image
5. Click "Publish" to save

### Changing Event Status

1. Open your event
2. Find the "Status" field
3. Select: Upcoming, Ongoing, Completed, or Cancelled
4. Click "Publish" to save

## 🌐 Integrating with Your Next.js App

### Example: Fetching Events in a Server Component

```typescript
// app/events/page.tsx
import { client } from '@/sanity/lib/client'
import { eventsQuery } from '@/sanity/lib/queries'

export default async function EventsPage() {
  const events = await client.fetch(eventsQuery)

  return (
    <div>
      {events.map((event) => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.date} at {event.time}</p>
        </div>
      ))}
    </div>
  )
}
```

### Example: Using Images

```typescript
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

// In your component:
<img
  src={urlFor(event.image).width(800).url()}
  alt={event.image.alt}
/>
```

## 🎨 Customizing the Studio

### Adding More Fields to Events

Edit `sanity/schemaTypes/event.ts` and add new fields:

```typescript
defineField({
  name: 'location',
  title: 'Event Location',
  type: 'string',
}),
```

### Creating New Content Types

1. Create a new file in `sanity/schemaTypes/`
2. Define your schema with `defineType`
3. Import and add it to `schemaTypes/index.ts`
4. Restart your dev server

## 🔒 Managing Access

Your Sanity project has security features:

1. **CORS Origins**: Already configured for localhost:3000
2. **Datasets**: Your data is in the "production" dataset
3. **API Tokens**: Can be created in sanity.io/manage for production

## 📊 Using the Vision Plugin

The Vision plugin lets you test GROQ queries:

1. Go to http://localhost:3000/admin
2. Click "Vision" in the toolbar
3. Write and test GROQ queries
4. See results in real-time

Example query to try:

```groq
*[_type == "event"] {
  title,
  date,
  "rsvpCount": count(rsvps),
  "totalGuests": sum(rsvps[].partySize)
}
```

## 🚀 Deploying to Production

### 1. Update CORS Settings

Go to https://sanity.io/manage and add your production domain to CORS origins.

### 2. Create API Token (if needed)

For write operations from your app:

1. Go to https://sanity.io/manage
2. Navigate to your project → API → Tokens
3. Create a token with appropriate permissions
4. Add to your production environment variables

### 3. Deploy Sanity Studio

You can deploy the Studio separately or keep it in your Next.js app at `/admin`.

For separate deployment:

```bash
npm run build
# Deploy the built Studio
```

## 📚 Next Steps

1. ✅ Create some test events in the Studio
2. ✅ Try different GROQ queries in Vision
3. ✅ Update your existing pages to fetch from Sanity
4. ✅ Customize the Event schema with more fields
5. ✅ Upload images and see them in your app
6. ✅ Learn more at https://www.sanity.io/docs

## 🆘 Troubleshooting

**Can't access Studio?**

- Make sure dev server is running (`npm run dev`)
- Visit http://localhost:3000/admin

**Queries not returning data?**

- Check you've published your content in the Studio
- Test queries in the Vision plugin first

**Images not loading?**

- Make sure you've imported and configured the image URL builder
- Check that the image field exists and has data

**Need help?**

- Sanity Docs: https://www.sanity.io/docs
- Sanity Discord: https://slack.sanity.io

## 🎓 Learning Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **GROQ Tutorial**: https://www.sanity.io/docs/groq
- **Next.js + Sanity**: https://www.sanity.io/guides/nextjs
- **Schema Types**: https://www.sanity.io/docs/schema-types
- **Image URLs**: https://www.sanity.io/docs/image-url

---

Happy content managing! 🎉
