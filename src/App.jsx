import { useState } from "react";
import { Header } from "./components/Header";
import { SaveSection } from "./components/SaveSection";
import { EditorPanel } from "./components/EditorPanel";
import { PageFooter } from "./components/PageFooter";

function App() {
  const [textoEditarEnInput, setEditarEnInput] = useState("");
  const [textoDelParrafo, setTextoDelParrafo] = useState(
    "No necesito aprender todo hoy. Puedo empezar con una idea pequeña y entender cómo funciona.",
  );
  const [editorIsVisible, setEditorIsVisible] = useState(false);

  function capturarTextoDeLaNotaAlInput() {
    setEditarEnInput(textoDelParrafo);
    setEditorIsVisible(true);
  }

  function actualizaElValorDeTextoEnInputHastaGuardar(evento) {
    setEditarEnInput(evento.target.value);
  }

  function guardarNuevoTextoDeLaNota() {
    setTextoDelParrafo(textoEditarEnInput);
    setEditorIsVisible(false);
  }

  function cancelarEditarNota() {
    setEditorIsVisible(false);
  }

  return (
    <main className="notes-app">
      <Header />

      <section className="page-heading">
        <p className="eyebrow">MI LIBRETA</p>
        <h1>Una idea a la vez.</h1>
        <p className="page-description">
          Escribe, cambia de opinión y guarda lo que quieras conservar.
        </p>
      </section>

      <div className="notes-layout">
        <SaveSection
          textoDelParrafo={textoDelParrafo}
          capturarTextoDeLaNotaAlInput={capturarTextoDeLaNotaAlInput}
          editorIsVisible={editorIsVisible}
        />
        <EditorPanel
          value={textoEditarEnInput}
          onBoolean={editorIsVisible}
          onChange={actualizaElValorDeTextoEnInputHastaGuardar}
          onClickCancelar={cancelarEditarNota}
          onClickGuardar={guardarNuevoTextoDeLaNota}
        />
      </div>

      <PageFooter />
    </main>
  );
}

export default App;
