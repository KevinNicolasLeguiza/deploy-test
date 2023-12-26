export function EditControlsFooter() {
  return (
    <div
      className="position-fixed start-0 bottom-0 w-100 d-flex flex-row justify-content-end align-items-center gap-2 p-3 z-1 card border-0"
      style={{ maxWidth: '100vw' }}
    >
      <button className="btn btn-outline-default">
        <span className="d-lg-none text-dark">cancelar</span>
        <span className="d-none d-lg-inline text-dark fs-5">cancelar</span>
      </button>
      <button className="btn btn-primary">
        <span className="d-lg-none text-white">Guardar</span>
        <span className="d-none d-lg-inline text-white fs-5">Guardar</span>
      </button>
    </div>
  );
}
