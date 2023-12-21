import { routes } from '@/routes';

function _SidebarButton() {
  return (
    <button
      className="rounded bg-transparent d-flex justify-content-center align-items-center border-0"
      style={{ maxWidth: 'var(--header-height)', maxHeight: 'var(--header-height)' }}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#sidebar"
      aria-controls="#sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        data-slot="icon"
        className="w-100 h-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}

function _Offcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="sidebar"
      aria-labelledby="sidebar-title"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title"
          id="sidebar-title"
        >
          Sidebar title
        </h5>
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Cerrar"
        ></button>
      </div>

      <div className="offcanvas-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio quod reiciendis accusantium excepturi, nisi, recusandae laboriosam itaque odit ad non magni maxime
          numquam. Quisquam ex fugiat aliquam possimus excepturi.
        </p>

        {/* FIXME[epic=remove] */}
        <ol>
          {Object.entries(routes).map(([pathName, { path }], key) => (
            <li key={key}>
              <a href={path}>{pathName}</a>
            </li>
          ))}
        </ol>
        {/* ----------------------- */}
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <_SidebarButton />
      <_Offcanvas />
    </>
  );
}
