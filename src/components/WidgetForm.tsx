export function WidgetForm() {

    //o calc é um jeito que o tailwind tem de calcular o tamanho total da tela e fazer algo com isso.
    // no caso, estamos pegando o tamanho da largura da tela e diminuindo 2rem, ou certo, vai esticar na tela toda com uma distancia de 2rem das pontas.
    // o md: w-auto diz que em telas maiores, o calculo anterior não será utilizado, tornando o form responsivo. 
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            Hello World
        </div>
    )
}