# Password Protection Setup

This site is protected with a **secure server-side** password. Users must enter the correct password to access the content.

## Configuration

The password is stored in the `.env.local` file:

```
SITE_PASSWORD=shiner2025
```

⚠️ **Important**: Notice there's NO `NEXT_PUBLIC_` prefix - this keeps the password on the server only!

## Changing the Password

To change the password:

1. Open `.env.local` file
2. Update the `SITE_PASSWORD` value
3. Restart your development server with `npm run dev`

## How It Works

-   Users are prompted to enter a password when they first visit the site
-   The password is verified **server-side** using Next.js Server Actions
-   Once authenticated, a secure httpOnly cookie is set (expires in 24 hours)
-   Authentication persists across browser sessions until the cookie expires
-   **The password is NEVER exposed to the client** - it stays on the server

## Default Password

The default password is: **shiner2025**

⚠️ **Important**: Make sure to change this password in production!

## Security Features

✅ **Server-side verification** - Password checking happens on the server, not in the browser  
✅ **httpOnly cookies** - Authentication cookie cannot be accessed by JavaScript  
✅ **Secure flag** - Cookie is encrypted in production (HTTPS)  
✅ **SameSite protection** - Prevents CSRF attacks  
✅ **No client exposure** - Password is never sent to the browser or visible in DevTools

## Security Notes

-   This implementation is **significantly more secure** than client-side password checking
-   The password cannot be found by inspecting the page source or using browser DevTools
-   The `.env.local` file is in `.gitignore` and won't be committed to version control
-   For even higher security needs, consider adding:
    -   Rate limiting to prevent brute force attacks
    -   Password hashing with bcrypt
    -   Two-factor authentication
    -   User-specific accounts with database storage
