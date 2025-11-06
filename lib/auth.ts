"use server";

import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "site_authenticated";
const AUTH_TOKEN = "authenticated_user_token";

export async function verifyPassword(
    password: string
): Promise<{ success: boolean; error?: string }> {
    const correctPassword = process.env.SITE_PASSWORD || "shiner2025";

    if (password === correctPassword) {
        // Set a cookie that expires in 24 hours
        (await cookies()).set(AUTH_COOKIE_NAME, AUTH_TOKEN, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24, // 24 hours
            path: "/",
        });

        return { success: true };
    }

    return { success: false, error: "Incorrect password. Please try again." };
}

export async function checkAuth(): Promise<boolean> {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get(AUTH_COOKIE_NAME);
    return authCookie?.value === AUTH_TOKEN;
}

export async function logout() {
    (await cookies()).delete(AUTH_COOKIE_NAME);
}
