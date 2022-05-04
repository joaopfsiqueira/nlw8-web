import { useState } from "react";


import { CloseButton } from "../CloseButton";
//importamos as imagem 
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

//criamos um objeto para toda vez que uma pessoa quiser adicionar um novo feedback é só vir no objeto abaixo e adicionar.
//função está sendo usada no "FeedbackTypeStep"
export const feedbackTypes = {
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

//criando um tipo para os feedback possiveis.
//o keyof + typeof vai retornar só as CHAVES do objeto.
//função está sendo usada no "FeedbackTypeStep"
export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm() {
    //criando um estado para o tipo de feedback, ou certo, ele vai esperar o FeedbackType ou null.
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null);
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null);
    }


    //o calc é um jeito que o tailwind tem de calcular o tamanho total da tela e fazer algo com isso.
    // no caso, estamos pegando o tamanho da largura da tela e diminuindo 2rem, ou certo, vai esticar na tela toda com uma distancia de 2rem das pontas.
    // o md: w-auto diz que em telas maiores, o calculo anterior não será utilizado, tornando o form responsivo. 
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {/* ternario que valida se o feedbacksent foi enviado ou não, se for, retorna o feedbacksucess. */}
            {feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>) : (
                <>
                {/* nesse caso, se a pessoa selecionar o tipo de feedback, ele some com o formulario. */}
            {!feedbackType ? (
                 <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={()=> setFeedbackSent(true)}
                />
            )}
                </>
            )}
            
            
            <footer>
                {/* colocando um distanciamento do underline com offset. (propriedade css) */}
                <p>Feito com ❤️ por <a className="underline underline-offset-2" href="https://github.com/joaopfsiqueira">João Siqueira</a></p>
            </footer>
        </div>
    )
}