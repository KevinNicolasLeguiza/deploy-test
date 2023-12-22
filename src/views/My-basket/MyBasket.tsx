import { FinalizePurchaseModal, Header, HorizontalProductCard, MyBasketFooter } from '@/components';

export function MyBasket() {
  return (
    <main
      className="main d-grid"
      style={{ gridTemplateRows: 'var(--header-height) 1fr' }}
    >
      <div>
        <Header />
      </div>
      {/* Content */}
      <div className="container py-3">
        <FinalizePurchaseModal />
        <div className="row">
          <div className="col">
            <h5 className="d-lg-none fw-semibold">Mi canasta</h5>
            <h5 className="d-none d-lg-inline fw-semibold fs-4">Mi canasta</h5>
          </div>
        </div>
        {/* Empty basket btn */}
        <div className="row">
          <div className="col d-flex flex-row justify-content-end align-items-center">
            <button className="btn btn-outline-default d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="text-dark">Vaciar canasto</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-primary"
                style={{ width: '1.2rem' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Products */}
        <div className="row">
          <div className="col">
            <div className="container mt-3 px-0">
              <div className="row px-0">
                <div className="col px-0">
                  <HorizontalProductCard />
                </div>
              </div>
              <div className="row px-0">
                <div className="col px-0">
                  <HorizontalProductCard />
                </div>
              </div>
              <div className="row px-0">
                <div className="col px-0">
                  <HorizontalProductCard />
                </div>
              </div>
              <div className="row px-0">
                <div className="col px-0">
                  <HorizontalProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Coupon */}
        <div className="row py-3">
          <div className="col d-flex">
            <button className="btn btn-outline-default d-flex flex-row justify-content-center align-items-center gap-1 my-auto">
              <img
                src="/public/icons/sale-icon.svg"
                alt="Icono de ventas"
                className="h-100"
              />
              <span
                className="d-lg-none text-dark small"
                style={{ fontSize: '.6rem' }}
              >
                ¿Tenes un cupón de descuento?
              </span>
              <span className="d-none d-lg-inline text-dark small">¿Tenes un cupón de descuento?</span>
            </button>
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="d-lg-none form-control text-center"
              placeholder="Ingresa aquí el código"
              style={{ fontSize: '.6rem' }}
            />
            <input
              type="text"
              className="d-none d-lg-block form-control text-center"
              style={{ fontSize: '.875rem' }}
              placeholder="Ingresa aquí el código"
            />
          </div>
        </div>
        {/* Resume */}
        <div className="row py-3">
          <div className="col container">
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
        </div>
      </div>
      {/* Footer */}
      <div className="py-5">
        <MyBasketFooter />
      </div>
    </main>
  );
}
