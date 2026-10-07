export function EditorPanel({onBoolean, value, onChange, onClickCancelar, onClickGuardar}){
    return(
        <section className={`editor-panel ${!onBoolean ? 'hidden' : ''}`} aria-labelledby="editor-title">
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
            value={value}
            onChange={onChange}
          />

          <p id="draft-help" className="draft-help">
            Si cancelas, conservarás la versión guardada.
          </p>

          <div className="editor-actions">
            <button className="button button-secondary" type="button" onClick={onClickCancelar}>
              Cancelar
            </button>
            <button className="button button-primary" type="button" onClick={onClickGuardar}>
              Guardar nota
            </button>
          </div>
        </section>
    )
}