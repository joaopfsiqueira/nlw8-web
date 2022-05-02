//o phospor-react nos permite importar diret o icone com o nome, para achar os icones é só acessar a biblioteca.
import { ChatTeardropDots } from 'phosphor-react'

export function Widget () {
    return (
        <button className="bg-violet-500 rounded-full px-3 h-12 text-white" >
            {/* caso queira, basta colocar o mouse em cima do w-6 para ver o tamano em px. */}
            <ChatTeardropDots className="w-6 h-6" />
        </button>
    )
}