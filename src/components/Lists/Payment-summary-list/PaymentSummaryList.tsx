export function PaymentSummaryList() {
  return (
    <div className="container">
      <div className="row text-dark py-2">
        <div className="col">
          <span className="d-lg-none">Descuento</span>
          <span className="d-none d-lg-inline fs-5">Descuento</span>
        </div>
        <div className="col d-flex justify-content-end">
          <span className="d-lg-none">$150</span>
          <span className="d-none d-lg-inline fs-5">$150</span>
        </div>
      </div>
      <div className="row text-dark py-2">
        <div className="col">
          <span className="d-lg-none">Envio</span>
          <span className="d-none d-lg-inline fs-5">Envio</span>
        </div>
        <div className="col d-flex justify-content-end">
          <span className="d-lg-none">$560</span>
          <span className="d-none d-lg-inline fs-5">$560</span>
        </div>
      </div>
      <div className="row text-dark py-2 bg-light border border-default">
        <div className="col">
          <span className="d-lg-none">Total</span>
          <span className="d-none d-lg-inline fs-5">Total</span>
        </div>
        <div className="col d-flex justify-content-end">
          <span className="d-lg-none fw-semibold">$3735</span>
          <span className="d-none d-lg-inline fw-semibold fs-5">$3735</span>
        </div>
      </div>
    </div>
  );
}
