import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook } : ScreenshotButtonProps) {

    //criando state para tirar screenshot.
    const [isScreenshotReady, setIsScreenshotReady] = useState(false);

    //função para realizar screenshot da tela.
    //utiliza o npm html2canvas, o ! no final diz que nunca vai ser nulo, para confiar.
    async function handleTakeScreenshot() {
        setIsScreenshotReady(true) //no inicio começa a tirar a foto
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL("image/png"); //ou certo, ele vai printar e salvar em png e converter em base64.
        
        onScreenshotTook(base64image);
        setIsScreenshotReady(false) //depois de ter tirado, desativa.
    }

    if(screenshot) {
        return(
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => onScreenshotTook(null)}
                style={{ 
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
            <Trash weight="fill"/>
            </button>
        )
    }

    return (
        <button type="button" 
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={handleTakeScreenshot}
        >
        
        {/* Ternario para sempre que estiver carregando o screenshot aparecer loading e quando n estiver aparecer o botão para tirar o screenshot. */}
        {isScreenshotReady ? <Loading /> : <Camera className="h-6 w-6 text-zinc-100"></Camera>}

        </button>
    )
}