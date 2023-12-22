export function WelcomeModal() {
  return (
    <>
      {/* FIXME[epic=remove] */}
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#welcome-modal">
        Launch demo modal
      </button> */}
      <div
        className="modal fade"
        id="welcome-modal"
        tabIndex={-1}
        aria-labelledby="welcome-modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex flex-row justify-content-between">
                <h5 id="welcome-modal-title flex-grow-1">Bienvenido a Abasto Virtual</h5>
                <button
                  type="button"
                  className="btn-close small"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p>Productos frescos y de calidad!</p>
              <div className="d-flex flex-row gap-2 justify-content-end align-items-center">
                <button className="btn btn-outline-default text-dark">Registrarme</button>
                <button className="btn btn-primary text-white">Ver mas!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
