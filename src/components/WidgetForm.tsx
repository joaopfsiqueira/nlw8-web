import { CloseButton } from "./CloseButton";


//importamos as imagem 
import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

//criamos um objeto para toda vez que uma pessoa quiser adicionar um novo feedback é só vir no objeto abaixo e adicionar.
const feedbackTypes = {
    BUG: {
        title: "Bug",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada',
        },
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

export function WidgetForm() {

    //o calc é um jeito que o tailwind tem de calcular o tamanho total da tela e fazer algo com isso.
    // no caso, estamos pegando o tamanho da largura da tela e diminuindo 2rem, ou certo, vai esticar na tela toda com uma distancia de 2rem das pontas.
    // o md: w-auto diz que em telas maiores, o calculo anterior não será utilizado, tornando o form responsivo. 
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton></CloseButton>

            </header>
            
           <div className="flex py-8 gap-2 w-full">
                {/* o map vai percorrer o objeto feedbackTypes e vai criar um elemento por vez, ou seja, vai criar um elemento por cada feedbackType */}
                {/* recebendo chave e valor. */}
               { Object.entries(feedbackTypes).map(([key, value]) => {
                   return (
                       <button 
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" 
                        type="button"
                        >

                           <img src={value.image.source} alt={value.image.alt} />
                           <span>{value.title}</span>
                       </button>
                   )
               })}
           </div>
            
            <footer>
                {/* colocando um distanciamento do underline com offset. (propriedade css) */}
                <p>Feito com ❤️ por <a className="underline underline-offset-2" href="https://github.com/joaopfsiqueira">João Siqueira</a></p>
            </footer>
        </div>
    )
}