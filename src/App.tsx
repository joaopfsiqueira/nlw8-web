interface ButtonProps {
  text?: string
}


function Button(props: ButtonProps) {
  return <button>{props.text ?? 'Default'}</button> //caso não tenha um text, deixa como "default"
}

function App() {
  return (
    <div> 
      <Button text="Enviar" />
      <Button text="Ok"/>
      <Button />
    </div>
  )
}

export default App
