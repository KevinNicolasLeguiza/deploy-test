export function HorizontalProductCard() {
  return (
    <div className="container w-100 border-top border-bottom p-2">
      <div className="row">
        {/* Image */}
        <div className="col-3 col-lg-2 d-flex justify-content-center align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegsbIVN0v20cT9Rl9ZW8_KMMO0yS0XwHD2W01lQhMLntIYDWMd75JUVCSAu6lxhpjKEk&usqp=CAU"
            alt="Imagen del producto"
            className="w-100 h-auto"
          />
        </div>
        {/* General info */}
        <div className="col container my-auto">
          {/* Title */}
          <div className="row py-2">
            <h5 className="d-lg-none fs-6 fw-semibold">Arandanos</h5>
            <h5 className="d-none d-lg-inline fw-semibold">Arandanos</h5>
          </div>
          {/* Description */}
          <div className="row">
            <span className="d-lg-none small text-light-emphasis">125 grs. $525</span>
            <span className="d-none d-lg-inline text-light-emphasis">125 grs. $525</span>
          </div>
          {/* Quantity controls */}
          <div className="row mt-2">
            <div className="col-3 col-lg-1 p-0">
              <button className="btn btn-success disabled w-100 h-100 p-0">
                <span className="fs-5">-</span>
              </button>
            </div>
            <div className="col col-lg-3 p-0 d-flex justify-content-center align-items-center bg-secondary-subtle rounded h-100 my-auto py-2 mx-2">
              <span>2</span>
            </div>
            <div className="col-3 col-lg-1 p-0">
              <button className="btn btn-success disabled w-100 h-100 p-0">
                <span className="fs-5">+</span>
              </button>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col">
              <p>
                <span className="d-lg-none text-black-50">$1200</span>
                <span className="d-none d-lg-inline fs-4 text-black-50">$1200</span>
                &nbsp;&nbsp;
                <span className="d-lg-none fw-semibold">$1050</span>
                <span className="d-none d-lg-inline fs-4 fw-semibold">$1050</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="d-lg-none text-light-emphasis">X 2 unidades</span>
              <span className="d-none d-lg-inline fs-5 text-light-emphasis">X 2 unidades</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
