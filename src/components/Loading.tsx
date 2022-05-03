import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            {/* animate spin coloca animação no botão do phosphor, é algo do próprio tailwind. */}
            <CircleNotch weight="bold" className="w-4 h-4 animate-spin"></CircleNotch>
        </div>
    )
}