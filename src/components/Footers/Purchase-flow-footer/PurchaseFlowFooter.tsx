export function PurchaseFlowFooter() {
  return (
    <div
      className="position-fixed start-0 bottom-0 w-100 d-flex flex-row justify-content-end align-items-center gap-2 p-3 z-1 card"
      style={{ maxWidth: '100vw' }}
    >
      <button className="btn btn-outline-default">
        <span className="d-lg-none text-dark">cancelar</span>
        <span className="d-none d-lg-inline text-dark fs-5">cancelar</span>
      </button>
      <button className="btn btn-primary">
        <span className="d-lg-none text-white">Ir a pagar</span>
        <span className="d-none d-lg-inline text-white fs-5">Ir a pagar</span>
      </button>
    </div>
  );
}
