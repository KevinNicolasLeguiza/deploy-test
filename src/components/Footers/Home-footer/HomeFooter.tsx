export function HomeFooter() {
  return (
    <div
      className="container card w-100 rounded-0 position-fixed bottom-0 start-0 z-0 p-2"
      style={{ maxWidth: '100vw' }}
    >
      <div className="row">
        <div className="col-8">
          <span className="small text-dark">Subtotal</span>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-9 col-lg-10 container">
          <div className="row m-0 p-0 w-100 h-100">
            <div className="col card text-center fw-500 my-auto">
              <span>
                $<span className="fs-5">1050</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-row justify-content-end align-items-center">
          <button className="btn btn-primary">
            <span className="text-white">Ir a pagar</span>
          </button>
        </div>
      </div>
      <div className="row py-1"></div>
    </div>
  );
}
