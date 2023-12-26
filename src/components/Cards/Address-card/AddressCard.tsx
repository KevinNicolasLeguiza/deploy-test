export function AddressCard() {
  return (
    <div className="container card p-3">
      <div className="row">
        <div className="col-2">
          <img
            src={`${import.meta.env.BASE_URL || ''}/public/icons/location-icon.svg`}
            alt="Icono de direccion"
            className="h-100"
          />
        </div>
        <div className="col">Casa</div>
      </div>
    </div>
  );
}
