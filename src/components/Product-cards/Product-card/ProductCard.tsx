import styles from './ProductCard.module.css'

interface Props {
  className?: string
  size?: 'xs' | 'md'
}

export function ProductCard({ className, size = 'xs' }: Props) {
  const showBadge = true;

  return <div className={`card position-relative w-100 ${className}`}>
    {
      showBadge
      ? <div className='badge bg-primary position-absolute end-0 top-0 px-2'>
        {
          size === 'xs'
          ? <span>Super oferta!</span>
          : <span className='fs-5'>Super oferta!</span>
        }
      </div>
      : <></>
    }
    <div className="card-body">
      <img
        className={`mx-auto w-100`}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegsbIVN0v20cT9Rl9ZW8_KMMO0yS0XwHD2W01lQhMLntIYDWMd75JUVCSAu6lxhpjKEk&usqp=CAU'} 
      />
      <h5 className="card-title fw-semibold fs-6">
        Arandanos
      </h5>
      <div className='card-text'>
        <div className="d-flex flex-row gap-2">
          <div className="w-50">
            <span className="small">Unidad</span>
            <div className={`dropdown w-100 ${styles.dropdown_min_height}`}>
              <button className="btn btn-secondary bg-transparent dropdown-toggle text-dark w-100 d-flex align-items-center">
                <span className={`my-auto ${styles.dropdown_sm_text}`}>125 grs.</span>
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className={`dropdown-item ${styles.dropdown_sm_text}`}>256 grs.</a>
                </li>
                <li>
                  <a className={`dropdown-item ${styles.dropdown_sm_text}`}>500 grs.</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-50">
            <span className="small">Precio</span>
            <div className={`border border-secondary rounded d-flex align-items-center justify-content-center text-dark small pt-1 ${styles.dropdown_min_height}`}>
              <span className="small">$525</span>
            </div>
          </div>
        </div>
        {/* Quantity controls */}
        <div className="container px-0 mt-2">
          <div className="row px-2">
            <div className="col-3 col-md-2 p-0">
              <button className="btn btn-success h-100 w-100">
                -
              </button>
            </div>
            <div className="col border d-flex align-items-center justify-content-center rounded px-0 mx-2">
              <span>0</span>
            </div>
            <div className="col-3 col-md-2 p-0">
              <button className="btn btn-success text-white bg-success h-100 w-100">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}