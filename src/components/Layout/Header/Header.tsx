import { SidebarButton } from '@/components';

export function Header() {
  return (
    <>
      <div>
        <div className="w-100 d-flex flex-row justify-content-center align-items-center bg-white">
          <div
            className="container"
            style={{ height: 'var(--header-height)' }}
          >
            <div className="row h-100 pb-2 border-bottom mb-2">
              <div className="col h-100 py-2 px-4">
                <img
                  src="https://cdn.abastovirtual.com/img/logo.png"
                  alt="Logo de Abasto virtual"
                  className="h-100 w-auto my-auto"
                />
              </div>
              <div className="col-2 col-md-1 my-auto d-flex justify-content-end align-items-center">
                <SidebarButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
