//o phospor-react nos permite importar diret o icone com o nome, para achar os icones é só acessar a biblioteca.
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'


export function Widget () {
    return (
        // colocando o botão no fundo inferior da tela.
        //Popover = div Popover.button = botao popover.panel = p
        <Popover className="absolute bottom-5 right-5 flex flex-col items-end">

            <Popover.Panel>
               <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group" >
            {/* caso queira, basta colocar o mouse em cima do w-6 para ver o tamano em px. Declarando que tudo dentro de button é o mesmo group para ser retuilizado o grouphover*/}
            <ChatTeardropDots className="w-6 h-6" />

            {/* definindo a largura maxima com "max-w", o overflow-hidden faz tudo o que passar do limite do width sumir. */}
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2"></span>
                Feedback
            </span> 
            </Popover.Button>
        </Popover>
    )
}