import { Header, PurchaseFlowFooter, Sidebar } from '@/components';

export function DeliveryData() {
  return (
    <>
      <Sidebar />
      <main
        className="main d-grid"
        style={{ gridTemplateRows: 'var(--header-height) 1fr' }}
      >
        <div>
          <div
            className="position-fixed start-0 top-0 w-100 d-grid"
            style={{ gridTemplateRows: 'var(--header-height)' }}
          >
            <Header />
          </div>
        </div>
        {/* CONTENT */}
        <div className="container py-3">
          <div className="row">
            <div className="col">
              <h5 className="fw-semibold">Últimos pasos!</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="small">Completar los siguiente datos para finalizar la compra.</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <span className="fw-semibold">Datos de entrega</span>
            </div>
          </div>
          {/* Address */}
          <div className="row mt-3">
            <div className="col">
              <label
                htmlFor="address-input"
                className="form-label mb-1"
              >
                Dirección
              </label>
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=""
                    style={{ width: '1.2rem' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  id="address-input"
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Ingresa tu dirección "
                  aria-label="Dirección"
                />
              </div>
              <div className="d-flex flex-row justify-content-end">
                <button className="btn btn-primary bg-transparent border-0 py-0 text-primary">
                  <span className="small">Usar mi ubicación actual</span>
                </button>
              </div>
            </div>
          </div>
          {/* Phone */}
          <div className="row">
            <div className="col">
              <label
                htmlFor="phone-input"
                className="form-label mb-1"
              >
                Teléfono
              </label>
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=""
                    style={{ width: '1.2rem' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  id="phone-input"
                  type="tel"
                  className="form-control border-start-0"
                  placeholder="Ingresa tu dirección "
                  aria-label="Teléfono"
                />
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center py-1 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary"
                  style={{ width: '1.2rem' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="small">Solo te contactaremos en caso de un inconveniente</span>
              </div>
            </div>
          </div>
          {/* Date */}
          <div className="row mt-3">
            <div className="col">
              <span className="form-span mb-1">Fecha</span>
              <div className="dropdown">
                <button
                  className="btn btn-default dropdown-toggle d-flex flex-row justify-content-between align-items-center bg-transparent w-100 text-black-50"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seleccionar fecha de entrega
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Fecha 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Fecha 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      Fecha 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="py-5">
          <PurchaseFlowFooter />
        </div>
      </main>
    </>
  );
}
