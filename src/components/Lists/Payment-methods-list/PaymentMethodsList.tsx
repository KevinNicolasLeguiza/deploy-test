export function PaymentMethodsList() {
  return (
    <div className="container">
      {/* Cash */}
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-outline-default text-dark w-100 container px-3">
            <div className="row py-2">
              <div className="col-2 col-lg-1">
                <img
                  src={`${import.meta.env.BASE_URL || ''}/public/icons/money-icon.svg`}
                  alt="Icono de dinero"
                  className="w-100"
                />
              </div>
              <div className="col text-start py-0 px-2 my-auto">
                <span className="d-lg-none">Contado</span>
                <span className="d-none d-lg-inline fs-4">Contado</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* Debit or credit card */}
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-outline-default text-dark w-100 container px-3">
            <div className="row py-2">
              <div className="col-2 col-lg-1">
                <img
                  src={`${import.meta.env.BASE_URL || ''}/public/icons/card-icon.svg`}
                  alt="Icono de dinero"
                  className="w-100"
                />
              </div>
              <div className="col text-start py-0 px-2 my-auto">
                <span className="d-lg-none">Tarjeta de debito o credito</span>
                <span className="d-none d-lg-inline fs-4">Tarjeta de debito o credito</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* Modo */}
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-outline-default text-dark w-100 container px-3">
            <div className="row py-2">
              <div className="col-3 col-lg-2">
                <img
                  src={`${import.meta.env.BASE_URL || ''}/public/icons/modo-icon.svg`}
                  alt="Icono de dinero"
                  className="w-100"
                />
              </div>
              <div className="col text-start py-0 px-2 my-auto">
                <span className="d-lg-none">Modo</span>
                <span className="d-none d-lg-inline fs-4">Modo</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* Mercadopago */}
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-outline-default text-dark w-100 container px-3">
            <div className="row py-2">
              <div className="col-2 col-lg-1">
                <img
                  src={`${import.meta.env.BASE_URL || ''}/public/icons/mercadopago-icon.svg`}
                  alt="Icono de dinero"
                  className="w-100"
                />
              </div>
              <div className="col text-start py-0 px-2 my-auto">
                <span className="d-lg-none">Mercado pago</span>
                <span className="d-none d-lg-inline fs-4">Mercado pago</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
