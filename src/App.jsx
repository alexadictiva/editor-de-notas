import { useState } from "react";

function App() {

  const [textoEditarEnInput, setEditarEnInput] = useState('')
  const [textoDelParrafo, setTextoDelParrafo] = useState('No necesito aprender todo hoy. Puedo empezar con una idea pequeña y entender cómo funciona.')
  const [editorIsVisible, setEditorIsVisible] = useState(false)

  function capturarTextoDeLaNotaAlInput(){
    setEditarEnInput(textoDelParrafo)
    setEditorIsVisible(true)
  }

  function actualizaElValorDeTextoEnInputHastaGuardar(evento){
    setEditarEnInput(evento.target.value)
  }

  function guardarNuevoTextoDeLaNota(){
    setTextoDelParrafo(textoEditarEnInput)
    setEditorIsVisible(false)
  }

  function cancelarEditarNota() {
    setEditorIsVisible(false)
  }

  return (
    <main className="notes-app">
      <header className="app-header">
        <a className="brand" href="#" aria-label="Inicio de Notas">
          notas<span>.</span>
        </a>
        <span className="header-label">UN ESPACIO PARA TUS IDEAS</span>
      </header>

      <section className="page-heading">
        <p className="eyebrow">MI LIBRETA</p>
        <h1>Una idea a la vez.</h1>
        <p className="page-description">
          Escribe, cambia de opinión y guarda lo que quieras conservar.
        </p>
      </section>

      <div className="notes-layout">
        <section className="saved-section" aria-labelledby="saved-title">
          <div className="section-heading">
            <h2 id="saved-title">Tu nota</h2>
            <span className="status-badge">Guardada</span>
          </div>

          <article className="note-card">
            <div className="note-top">
              <span className="note-number">NOTA 001</span>
              <span className="note-decoration" aria-hidden="true">
                ✳
              </span>
            </div>

            <p className="note-text">{textoDelParrafo}</p>

            <footer className="note-footer">
              <span>Un recordatorio para mí</span>
              <button className="edit-button" type="button" onClick={capturarTextoDeLaNotaAlInput} disabled={editorIsVisible}>
                Editar nota <span aria-hidden="true">↗</span>
              </button>
            </footer>
          </article>

          <p className="section-help">
            Aquí aparece la última versión que guardaste.
          </p>
        </section>

        <section className={`editor-panel ${!editorIsVisible ? 'hidden' : ''}`} aria-labelledby="editor-title">
          <div className="editor-heading">
            <span className="editor-icon" aria-hidden="true">
              ✎
            </span>

            <div>
              <p className="eyebrow">BORRADOR</p>
              <h2 id="editor-title">Dale otra vuelta.</h2>
            </div>
          </div>

          <p className="editor-description">
            Los cambios se aplican a tu nota cuando pulsas Guardar.
          </p>

          <label htmlFor="note-draft">Texto de la nota</label>
          <textarea
            id="note-draft"
            name="contenido"
            rows={7}
            placeholder="Escribe lo que tienes en mente..."
            aria-describedby="draft-help"
            value={textoEditarEnInput}
            onChange={actualizaElValorDeTextoEnInputHastaGuardar}
          />

          <p id="draft-help" className="draft-help">
            Si cancelas, conservarás la versión guardada.
          </p>

          <div className="editor-actions">
            <button className="button button-secondary" type="button" onClick={cancelarEditarNota}>
              Cancelar
            </button>
            <button className="button button-primary" type="button" onClick={guardarNuevoTextoDeLaNota}>
              Guardar nota
            </button>
          </div>
        </section>
      </div>

      <footer className="page-footer">
        Pequeñas ideas, espacio para crecer.
      </footer>
    </main>
  );
}

export default App;