export function SearchBar() {
  return (
    <div className="container pt-3 bg-white">
      <div className="row">
        <div className="col my-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control d-sm-none"
              placeholder="Ej: Manzana, tomate, cebolla..."
              aria-label="Barra de busqueda"
              style={{ fontSize: '.8rem' }}
            />
            <input
              type="text"
              className="form-control d-none d-sm-block"
              placeholder="Ej: Manzana, tomate, cebolla..."
              aria-label="Barra de busqueda"
            />

            <button className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000.svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: '1.5rem' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-3 col-sm-2 col-lg-1 my-auto">
          <button
            type="button"
            className="btn btn-primary text-white position-relative"
          >
            <svg
              xmlns="http://www.w3.org/2000.svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: '1.5rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              2<span className="visually-hidden">Productos en la lista</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
