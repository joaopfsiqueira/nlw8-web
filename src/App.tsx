interface ButtonProps {
  text?: string
}


function Button(props: ButtonProps) {
  //p-2 no className é para informar ao tailwind o padding que eu quero utilizar no elemento.
  //Podemos usar m- para margin, e por ai vai.
  // ou entao podemos colocar por lado, por exemplo: px (eixo x)
  // h = height, w = width, m = margin, p = padding, b = border, d = display, entre outros.
  return <button className="bg-violet-500 p-2 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button> //caso não tenha um text, deixa como "default"
}

function App() {
  return (
    <div className="flex gap-2"> 
      <Button text="Enviar" />
      <Button text="Ok"/>
      <Button />
    </div>
  )
}

export default App
