# Events Management Guide

## Overview

This website is designed to host and manage events at your home. The system now uses **Sanity CMS** for easy event management through a beautiful admin interface!

## Features

### 🏠 Home Page

- Welcome message with branding
- Display of upcoming events
- Quick navigation to all events
- Information about your event venue

### 📅 Events Listing Page

- View all events categorized by status:
    - Upcoming events
    - Past events
    - Cancelled events
- Beautiful card layout with event previews

### 📝 Event Details Page

- Full event information including:
    - Title and description
    - Date and time
    - Complete RSVP list with names and party sizes
    - Total guest count automatically calculated
    - Event tags for easy categorization
    - Status badges (upcoming, completed, cancelled)
    - **Interactive RSVP form** for upcoming events where guests can:
        - Enter their name or group name
        - Select their party size (1-20 people)
        - Submit their RSVP

## Managing Events with Sanity CMS

### 🎯 Access Sanity Studio

Go to **http://localhost:3000/admin** to manage your events through a beautiful interface!

### Adding a New Event

1. Click **"Event"** in the left sidebar
2. Click the **"Create"** button (+ icon)
3. Fill in the event details:
    - **Title**: Event name
    - **Slug**: Click "Generate" to auto-create from title
    - **Description**: Detailed event description
    - **Date**: Pick from calendar
    - **Time**: e.g., "7:00 PM"
    - **Image** (optional): Upload event photo
    - **Tags**: Type and press Enter (e.g., "holiday", "dinner")
    - **Status**: Select status (upcoming, ongoing, completed, cancelled)
    - **RSVPs** (optional): Add manually or leave empty
4. Click **"Publish"** to save

### Editing an Event

1. Go to http://localhost:3000/admin
2. Click on the event you want to edit
3. Make your changes
4. Click **"Publish"** to save changes

````

### Event Properties

- **id**: Unique identifier (string)
- **title**: Event name
- **description**: Detailed event description
- **date**: Date in YYYY-MM-DD format
- **time**: Time in any readable format (e.g., "7:00 PM")
- **rsvps** (optional): Array of RSVP objects with:
    - **name**: Name of the person/group RSVPing
    - **partySize**: Number of people in their party
- **tags** (optional): Array of tags for categorization
- **status**: Event status - `upcoming`, `ongoing`, `completed`, or `cancelled`

### Status Options

- **upcoming**: Future events that haven't happened yet
- **ongoing**: Currently happening events
- **completed**: Past events that took place
- **cancelled**: Events that were cancelled

## Tips for Managing Events

1. **Keep the date format consistent**: Always use YYYY-MM-DD
2. **Add RSVPs as they come in**: Add new RSVP objects to the `rsvps` array with the person's name and party size
3. **Track party sizes**: The system automatically calculates total guests from all party sizes
4. **Use descriptive tags**: Tags help categorize events (e.g., "games", "food", "holiday")
5. **Change status after events**: Update from `upcoming` to `completed` after events finish
6. **Unique IDs**: Make sure each event has a unique ID (use numbers or descriptive names)

### Adding an RSVP

**Option 1: Using the RSVP Form (Guests)**

Guests can use the interactive RSVP form on each event's detail page:

1. Navigate to the event page
2. Scroll to the RSVP form at the bottom
3. Enter their name/group name
4. Select party size using +/- buttons or direct input
5. Click "Submit RSVP"

**Note:** Since this is a static site, RSVPs submitted through the form need to be manually added to the `events.json` file by the administrator.

**Option 2: Manual Entry (Administrators)**

To manually add someone's RSVP to an event, add a new object to the `rsvps` array in `/data/events.json`:

```json
{
    "name": "Taylor & Jamie",
    "partySize": 2
}
````

The event cards and details pages will automatically show:

- Number of RSVPs (how many entries in the array)
- Total guest count (sum of all party sizes)

## Customization

### Adding New Event Categories

You can add custom tags to events and create filtering based on them in the future.

### Styling

The site uses Tailwind CSS. To customize colors or styles:

- Edit component files in `/components`
- Modify page files in `/app`
- Update global styles in `/app/globals.css`

## Future Enhancements

Potential features you might want to add:

- [x] RSVP functionality (form available, needs backend integration)
- [ ] Backend API to save RSVPs automatically
- [ ] Admin panel for managing events through UI
- [ ] Calendar view
- [ ] Image uploads for events
- [ ] Email notifications when someone RSVPs
- [ ] Guest comments/discussion
- [ ] Event reminders
- [ ] Export events to calendar formats (iCal)

## 📚 Additional Resources

- **Sanity CMS Guide**: See `SANITY_GUIDE.md` for detailed Sanity documentation
- **Quick Reference**: See `SANITY_QUICK_REF.md` for quick commands and queries

## Need Help?

The website is built with:

- **Next.js 14**: React framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Sanity CMS**: Headless content management system

To manage events, go to **http://localhost:3000/admin**. Changes appear on your website within 60 seconds!
