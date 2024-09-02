import api from "./api";

export default function App() {
  function listar() {
    console.log(api.get());
  }

  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
    </>
  );
}

