export function SaveSection({textoDelParrafo, capturarTextoDeLaNotaAlInput, editorIsVisible}){
    return(
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
    )
}