import { Camera } from "phosphor-react";

export function ScreenshotButton() {
    return (
        <button type="button" className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
        <Camera className="h-6 w-6 text-zinc-100"></Camera>
        </button>
    )
}