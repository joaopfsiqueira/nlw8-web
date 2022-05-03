import { CloseButton } from "../../CloseButton";
import { feedbackTypes, FeedbackType } from "../index";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        //esse <> abaixo é um fragment, ele permite que o react aceite elementos um embaixo do outro.
        <>
        <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton/>
        </header>


        <div className="flex py-8 gap-2 w-full">
                 {/* o map vai percorrer o objeto feedbackTypes e vai criar um elemento por vez, ou seja, vai criar um elemento por cada feedbackType */}
                 {/* recebendo chave e valor. */}
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button 
                         key={key}
                         className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" 
                         onClick={() => onFeedbackTypeChanged(key as FeedbackType)} //inferindo de forma manual que a chave SEMPRE vai ser o FeedbackType
                         // quando vamos passar um determinado valor dentro de um onclick ou ou subsmit através de uma função, precisamos fazer dela uma função callback.
                         //igual o exemplo acima. () => função(valorpassado)
                         type="button"
                         >
 
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}