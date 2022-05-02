# NLW 8 Impulse
> Vite
- usamos o "npm create vite@latest", para pegar a ultima versão do VITE. 

> Tailwindcss:
- https://tailwindcss.com/docs/installation/using-postcss

> headlessui
- https://headlessui.dev/react/popover


# O que é vite:
- Basicamente um pacote que nos ajuda a criar um projectName, selecionar o framework (Ex: react) e a variante (ex: react-typescript). É excelente para criar novos projetos do 0, fornecendo todo o básico. 


# O que é Tailwind:
- Uma facilitadora de css. Integra o vite + react com carregamentos e importações.
- Dentro do tailwind.config.js em "content" colocamos qual os tipos de arquivos que vamos trabalhar.
- Usamos sempre className pare autilizar o tailwind.
- Integra a extensão do vscode "Tailwind CSS Intellisense.
- Podemos criar nossas próprias cores no tailwind. Basta ir no tailwind.config.js -> extends, selecionar a propriedade color, atribuir um nome para essa cor e as tonalidades dela. Depois, basta atribuir o código hexadecimal. Usamos esse exemplo na cor "brand"
- Outra coisa excelente é que podemos colocar qualquer coisa no de style dentro do className, visto que o tailwind interpreta o código do jeito dele. Vale muito à pena dar uma olhada na documentação deles.


# O que é Handlessui:
- Podemos utilizar diversos componentes importados, como menu, listbox, popover. Podendo acessar por components, como: Popover.Button
- Uma bibliteca que simplica e MUITO a parte de useState. No commit de numero 8 do rep, da para ver o quanto de código utilizamos para fazer funcionar o useState ao clicar no botão e colocar o hello world. O comparativo do commit 8 com o 9 no Widget.tsx é absurdo.