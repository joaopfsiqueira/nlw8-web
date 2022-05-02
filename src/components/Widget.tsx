//o phospor-react nos permite importar diret o icone com o nome, para achar os icones é só acessar a biblioteca.
import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'


export function Widget () {
    //dentro do array colocamos a condição que será atualizada e o valor que será atribuido junto do segundo nome, que é o que seta
    //. isOpen(está aberto), setOpen(setar para aberto.)
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility(){
        //se tiver true deixa false e se tiver false deixa true. Basicamente seta o valor contrario dele.
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        // colocando o botão no fundo inferior da tela.
        <div className="absolute bottom-5 right-5">

            {/* ternario que valida se isWidgetOpen é true. */}
            {/* só estamos utilizando desse jeito pq o valor que vem depois do : no ternario comum é null. */}
           {isWidgetOpen && <p>Hello World</p> } 

            <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group" >
            {/* caso queira, basta colocar o mouse em cima do w-6 para ver o tamano em px. Declarando que tudo dentro de button é o mesmo group para ser retuilizado o grouphover*/}
            <ChatTeardropDots className="w-6 h-6" />

            {/* definindo a largura maxima com "max-w", o overflow-hidden faz tudo o que passar do limite do width sumir. */}
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2"></span>
                Feedback
            </span> 
            </button>
        </div>
    )
}