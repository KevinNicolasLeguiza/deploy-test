export function AddressInformationForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label htmlFor="address-name-input">Nombre de la dirección</label>
          <input
            id="address-name-input"
            type="text"
            className="form-control"
            disabled
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label
            htmlFor="address-input"
            className="form-label mb-1"
          >
            Dirección
          </label>
          <div className="input-group">
            <div className="input-group-text border-end-0 bg-default">
              <svg
                xmlns="http://www.w3.org/2000.svg"
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
            </div>
            <input
              id="address-input"
              type="text"
              className="form-control border-start-0"
              placeholder="Ingresa tu dirección "
              aria-label="Dirección"
              disabled
            />
          </div>
          <div className="d-flex flex-row justify-content-end">
            <button className="btn btn-primary bg-transparent border-0 py-0 text-primary">
              <span className="small">Usar mi ubicación actual</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label htmlFor="province-input">Provincia</label>
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle w-100 d-flex flex-row justify-content-between align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label htmlFor="location-input">Localidad</label>
          <input
            id="location-input"
            type="text"
            className="form-control"
            disabled
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label
            htmlFor="postal-code-input"
            className="form-label mb-1"
          >
            Código postal
          </label>
          <div className="input-group">
            <input
              id="postal-code-input"
              type="number"
              className="form-control border-start-0"
              placeholder="Ingresa tu código postal "
              aria-label="Código postal"
              disabled
            />
          </div>
          <div className="d-flex flex-row justify-content-end">
            <button className="btn btn-primary bg-transparent border-0 py-0 text-primary">
              <span className="small">¿Como saber mi codigo postal?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
