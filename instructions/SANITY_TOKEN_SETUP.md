# Setting Up Sanity API Token for RSVP Functionality

The RSVP feature now saves data directly to Sanity. To enable this, you need to create an API token.

## Steps to Create a Sanity API Token

1. **Go to Sanity Management Console**
    - Visit https://www.sanity.io/manage
    - Select your project

2. **Navigate to API Settings**
    - Click on "API" in the left sidebar
    - Scroll down to "Tokens"

3. **Create a New Token**
    - Click "Add API token"
    - Give it a name like "Production Write Token" or "RSVP Write Token"
    - Set permissions to **Editor** (allows read and write operations)
    - Click "Save"

4. **Copy the Token**
    - ⚠️ **IMPORTANT**: Copy the token immediately - you won't be able to see it again!

5. **Add to Environment Variables**

    Add to your `.env.local` file:

    ```env
    SANITY_API_TOKEN=your_token_here
    ```

    For production (Vercel), add the environment variable:
    - Go to your Vercel project
    - Settings → Environment Variables
    - Add `SANITY_API_TOKEN` with your token value
    - Redeploy your application

## Security Notes

- ✅ The token is only used server-side (Next.js Server Actions)
- ✅ Never commit the token to git
- ✅ Make sure `.env.local` is in your `.gitignore`
- ✅ Use different tokens for development and production if needed

## Testing

Once you've added the token:

1. Restart your development server: `npm run dev`
2. Navigate to an upcoming event
3. Fill out the RSVP form
4. Submit - the RSVP should now save to Sanity!
5. Refresh the page to see your RSVP appear in the list

## Troubleshooting

### "Failed to submit RSVP"

- Check that `SANITY_API_TOKEN` is set in `.env.local`
- Verify the token has **Editor** permissions
- Restart your dev server after adding the env variable

### "Missing environment variable"

- Make sure you've created the `.env.local` file in the project root
- Check that the variable name is exactly `SANITY_API_TOKEN`

### Token permissions

- **Viewer**: Read-only (won't work for RSVPs)
- **Editor**: Read and write (✅ use this)
- **Administrator**: Full access (works but gives more permissions than needed)
