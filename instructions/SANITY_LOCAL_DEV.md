# Sanity Local Development Options

## The Issue

The `location` field wasn't appearing because it wasn't included in the GROQ queries. This has now been fixed in `sanity/lib/queries.ts`.

## Local Development with Sanity

Unfortunately, **Sanity does not support a true local database**. All data is stored in Sanity's cloud. However, here are your options:

### Option 1: Use a Development Dataset (Recommended)

Create a separate dataset for development:

1. In your Sanity project dashboard (sanity.io):
    - Go to your project settings
    - Create a new dataset called `development` or `staging`
2. Update your `.env.local`:

    ```env
    NEXT_PUBLIC_SANITY_DATASET=development  # or 'production' for production
    ```

3. Switch between datasets by changing the env variable

**Pros:**

- Clean separation between dev and production data
- Free with Sanity's free tier
- Can experiment without affecting production

**Cons:**

- Still requires internet connection
- Data is still in the cloud

### Option 2: Use Sanity's Free Tier

Sanity's free tier includes:

- Unlimited API requests
- 3 users
- 2 datasets
- 10GB bandwidth
- 500k documents

This is usually sufficient for development.

### Option 3: Mock Data for Offline Development

If you need to work offline:

1. Create a file `data/mock-events.json`:

```json
[
    {
        "_id": "draft-1",
        "title": "Test Event",
        "slug": { "current": "test-event" },
        "description": "A test event",
        "date": "2025-12-01",
        "time": "7:00 PM",
        "location": "123 Main St, Austin, TX",
        "status": "upcoming",
        "tags": ["test"],
        "rsvps": []
    }
]
```

2. Modify `lib/sanity-events.ts` to use mock data when in development:

```typescript
const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

export async function getAllEvents(): Promise<Event[]> {
    if (USE_MOCK_DATA) {
        const mockData = await import("@/data/mock-events.json");
        return mockData.default.map((event: any) => ({
            ...event,
            id: event._id,
        }));
    }
    // ... existing code
}
```

3. Set in `.env.local`:

```env
USE_MOCK_DATA=true
```

### Option 4: Sanity Studio Local Preview

You can run Sanity Studio locally to edit content:

```bash
npm run dev
```

Then navigate to `http://localhost:3000/admin` to access your local Sanity Studio. The content is still stored in Sanity's cloud, but you can edit it locally.

## Current Setup

Your app currently uses Sanity's cloud with live data. The location field is now being fetched properly, so you should see locations on events that have them set in Sanity Studio.

## Next Steps

1. Go to `http://localhost:3000/admin` (or your dev URL + `/admin`)
2. Edit an event and add a location
3. The location should now appear on the event cards
