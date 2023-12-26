export function AccountInfoOptionsList() {
  return (
    <div className="container">
      <div className="row border rounded p-3 py-4 my-3">
        <div className="col-2">
          <img
            src="/public/icons/user-ico.svg"
            alt="Icono usuarios"
            className="w-100"
          />
        </div>
        <div className="col d-flex flex-row align-items-center">
          <span>Datos personales</span>
        </div>
      </div>
      <div className="row border rounded p-3 py-4 my-3">
        <div className="col-2">
          <img
            src="/public/icons/invoice-icon.svg"
            alt="Icono usuarios"
            className="w-100"
          />
        </div>
        <div className="col d-flex flex-row align-items-center">
          <span>Datos de facturación</span>
        </div>
      </div>
      <div className="row border rounded p-3 py-4 my-3">
        <div className="col-2">
          <img
            src="/public/icons/location-icon.svg"
            alt="Icono usuarios"
            className="w-100"
          />
        </div>
        <div className="col d-flex flex-row align-items-center">
          <span>Mis direcciones</span>
        </div>
      </div>
    </div>
  );
}
