'use server';

import { cookies } from "next/headers";

export type Theme = "light" | "dark" | "system";

export async function setTheme(theme: Theme): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set("theme", theme);
}

export async function cycleTheme(): Promise<void> {
    const cookieStore = await cookies();
    const usrTheme = cookieStore.get("theme");
    if (usrTheme?.value === "light") {
        cookieStore.set("theme", "dark");
    }
    if (usrTheme?.value === "dark") {
        cookieStore.set("theme", "system");
    }
    if (usrTheme?.value === "system") {
        cookieStore.set("theme", "light");
    }
}
