import { ExperienceUsingAppList, Header, OnlineHelpButton, PaymentSummaryList, Sidebar, ViewDetailButton } from '@/components';

export function OrderPlaced() {
  return (
    <>
      <Sidebar />
      <main
        className="main d-grid"
        style={{ gridTemplateRows: 'var(--header-height) 1fr' }}
      >
        <div>
          <div
            className="position-fixed start-0 top-0 w-100 d-grid z-1"
            style={{ gridTemplateRows: 'var(--header-height)' }}
          >
            <Header />
          </div>
        </div>
        {/* CONTENT */}
        <div className="container mt-3 py-3">
          <div className="row">
            <div className="col">
              <div className="alert alert-secondary bg-success text-white p-1 z-0">
                <svg
                  xmlns="http://www.w3.org/2000.svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-white"
                  style={{ width: '1.2rem' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="ms-2">Se realizo con éxito el pago de tu pedido</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <span className="text-primary">¡Se envió por email el resumen de tu compra!</span>
            </div>
          </div>
          {/* Online help */}
          <div className="row mt-4">
            <div className="col d-flex flex-row justify-content-end align-items-center">
              <OnlineHelpButton />
            </div>
          </div>
          {/* Experience */}
          <div className="row mt-3">
            <div className="col">
              <span className="fw-semibold">Queremos conocerte mas!</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="text-dark small">¿Cómo te fue tu experiencia de compra?</span>
            </div>
          </div>
          <div className="row">
            <ExperienceUsingAppList />
          </div>
          {/* Order info */}
          <div className="row mt-3 d-flex">
            <div className="col my-auto">
              <span className="fw-semibold">Pedido #759</span>
            </div>
            <div className="col d-flex justify-content-end">
              <ViewDetailButton />
            </div>
          </div>
          {/* Delivery */}
          <div className="row mt-2">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <span className="fw-semibold">Entrega</span>
                </div>
                <div className="card-body">
                  <p className="small">
                    <span>Sábado 11 de Noviembre</span>
                    <br />
                    <span>De 8:00 am a 12:00 pm</span>
                  </p>
                  <p className="small">
                    <span>Dirección</span>
                    <br />
                    <span>General Lavalle 5797</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Payment details */}
          <div className="row mt-2">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <span className="fw-semibold">Detalle de pago</span>
                </div>
                <div>
                  <div className="card-body">
                    <p className="small">
                      Alejandra Galarza
                      <br />
                      Pago con Tarjeta de debito terminada en 759
                      <br />
                      Via PayWay
                    </p>
                    <button className="btn btn-link px-0">Ver factura</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Purchase summary */}
          <div className="row mt-2">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <span className="fw-semibold">Resumen de la compra</span>
                </div>
                <div className="card-body">
                  <PaymentSummaryList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
