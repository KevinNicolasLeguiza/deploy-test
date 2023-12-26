import { routes } from '@/routes';

export function Sidebar() {
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
              <a href={`/#${path}`}>{pathName}</a>
            </li>
          ))}
        </ol>
        {/* ----------------------- */}
      </div>
    </div>
  );
}
