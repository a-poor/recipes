import {
    MonitorIcon,
    SunIcon,
    MoonIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeButton({ theme, onClick }: {
    theme: "system" | "light" | "dark";
    onClick: () => void;
}) {
    return (
        <>
            {theme === "system" && (
                <Button onClick={onClick}>
                    <MonitorIcon />
                </Button>
            )}
            {theme === "light" && (
                <Button onClick={onClick}>
                    <SunIcon />
                </Button>
            )}
            {theme === "dark" && (
                <Button onClick={onClick}>
                    <MoonIcon />
                </Button>
            )}
        </>
    );
}
