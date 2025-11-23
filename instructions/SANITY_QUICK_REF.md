# Sanity CMS Quick Reference

## 🔗 Important URLs

- **Sanity Studio (Local)**: http://localhost:3000/admin
- **Sanity Management**: https://sanity.io/manage
- **Your Project**: https://sanity.io/manage/project/7qmj6l1j

## 📦 Environment Variables

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="7qmj6l1j"
NEXT_PUBLIC_SANITY_DATASET="production"
```

## 🔍 Common GROQ Queries

```groq
# Get all events
*[_type == "event"]

# Get upcoming events
*[_type == "event" && status == "upcoming"]

# Get event by slug
*[_type == "event" && slug.current == "my-event"][0]

# Get events with RSVP count
*[_type == "event"] {
  ...,
  "rsvpCount": count(rsvps),
  "totalGuests": sum(rsvps[].partySize)
}

# Search events by title
*[_type == "event" && title match "game*"]
```

## 💻 Code Snippets

### Fetch Data in Server Component

```typescript
import { client } from "@/sanity/lib/client";

const events = await client.fetch(`*[_type == "event"]`);
```

### Build Image URLs

```typescript
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
const imageUrl = builder.image(event.image).width(800).url();
```

### Revalidate Data (ISR)

```typescript
export const revalidate = 60; // Revalidate every 60 seconds

const events = await client.fetch(eventsQuery);
```

## 🛠️ Useful Commands

```bash
# Start dev server with Sanity Studio
npm run dev

# Build for production
npm run build

# Deploy Sanity Studio (if separate)
npx sanity deploy

# Manage Sanity project
npx sanity manage

# Import data
npx sanity dataset import data.ndjson production

# Export data
npx sanity dataset export production
```

## 📝 Adding New Schema Fields

1. Edit `sanity/schemaTypes/event.ts`
2. Add field with `defineField({ name, title, type })`
3. Save and refresh Studio

## 🎨 Schema Field Types

- `string` - Short text
- `text` - Long text
- `number` - Numbers
- `boolean` - True/false
- `date` - Date picker
- `datetime` - Date and time
- `image` - Image upload
- `array` - List of items
- `object` - Nested object
- `reference` - Link to another document

## 🚀 Quick Tips

1. **Always click "Generate" for slugs** after entering a title
2. **Use Vision plugin** to test queries before coding
3. **Add alt text** to all images for accessibility
4. **Publish your changes** - drafts aren't visible to your app
5. **Use tags** consistently for better organization
