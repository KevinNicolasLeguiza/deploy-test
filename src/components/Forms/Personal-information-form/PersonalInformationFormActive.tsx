export function PersonalInformationFormActive() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label htmlFor="first-name-input">Nombre</label>
          <input
            id="first-name-input"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label htmlFor="last-name-input">Apellido</label>
          <input
            id="last-name-input"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label htmlFor="dni-input">DNI</label>
          <input
            id="dni-input"
            type="number"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label htmlFor="birthdate-input">Fecha de nacimiento</label>
          <div className="input-group">
            <img
              className="input-group-text bg-transparent border-end-0"
              src={`${import.meta.env.BASE_URL || ''}/public/icons/calendar-icon.svg`}
            />
            <input
              id="birthdate-input"
              type="date"
              className={`form-control border-start-0 remove_calendar_icon`}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label htmlFor="phone-input">Teléfono</label>
          <div className="input-group">
            <img
              className="input-group-text bg-transparent border-end-0"
              src={`${import.meta.env.BASE_URL || ''}/public/icons/phone-icon.svg`}
            />
            <input
              id="phone-input"
              type="tel"
              className="form-control border-start-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}