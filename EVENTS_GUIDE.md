# Events Management Guide

## Overview

This website is designed to host and manage events at your home. The system uses a simple JSON file for easy event management.

## Features

### 🏠 Home Page

-   Welcome message with branding
-   Display of upcoming events
-   Quick navigation to all events
-   Information about your event venue

### 📅 Events Listing Page

-   View all events categorized by status:
    -   Upcoming events
    -   Past events
    -   Cancelled events
-   Beautiful card layout with event previews

### 📝 Event Details Page

-   Full event information including:
    -   Title and description
    -   Date and time
    -   RSVP count showing how many people have responded
    -   Event tags for easy categorization
    -   Status badges (upcoming, completed, cancelled)
    -   RSVP button for upcoming events

## Managing Events

### Adding/Editing Events

Events are stored in `/data/events.json`. To manage events, simply edit this file:

```json
{
    "id": "unique-id",
    "title": "Event Title",
    "description": "Detailed description of the event",
    "date": "2025-12-25",
    "time": "7:00 PM",
    "rsvpCount": 5,
    "tags": ["holiday", "dinner", "celebration"],
    "status": "upcoming"
}
```

### Event Properties

-   **id**: Unique identifier (string)
-   **title**: Event name
-   **description**: Detailed event description
-   **date**: Date in YYYY-MM-DD format
-   **time**: Time in any readable format (e.g., "7:00 PM")
-   **rsvpCount** (optional): Number of people who have RSVPed
-   **tags** (optional): Array of tags for categorization
-   **status**: Event status - `upcoming`, `ongoing`, `completed`, or `cancelled`

### Status Options

-   **upcoming**: Future events that haven't happened yet
-   **ongoing**: Currently happening events
-   **completed**: Past events that took place
-   **cancelled**: Events that were cancelled

## Tips for Managing Events

1. **Keep the date format consistent**: Always use YYYY-MM-DD
2. **Update RSVP counts**: Manually update `rsvpCount` as people RSVP to events
3. **Use descriptive tags**: Tags help categorize events (e.g., "games", "food", "holiday")
4. **Change status after events**: Update from `upcoming` to `completed` after events finish
5. **Unique IDs**: Make sure each event has a unique ID (use numbers or descriptive names)

## Customization

### Adding New Event Categories

You can add custom tags to events and create filtering based on them in the future.

### Styling

The site uses Tailwind CSS. To customize colors or styles:

-   Edit component files in `/components`
-   Modify page files in `/app`
-   Update global styles in `/app/globals.css`

## Future Enhancements

Potential features you might want to add:

-   [ ] RSVP functionality
-   [ ] Admin panel for managing events through UI
-   [ ] Calendar view
-   [ ] Image uploads for events
-   [ ] Email notifications
-   [ ] Guest comments/discussion
-   [ ] Event reminders
-   [ ] Export events to calendar formats (iCal)

## Need Help?

The website is built with:

-   **Next.js 14**: React framework
-   **TypeScript**: Type-safe JavaScript
-   **Tailwind CSS**: Utility-first CSS framework

To make changes to the events, simply edit `/data/events.json` and save. The changes will appear immediately on the website!
