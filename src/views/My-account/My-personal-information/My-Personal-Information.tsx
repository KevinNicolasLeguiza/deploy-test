import { Header, PersonalInformationForm, Sidebar } from '@/components';

export function MyPersonalInformation() {
  return (
    <>
      <Sidebar />
      <main
        className="main d-grid"
        style={{ gridTemplateRows: 'var(--header-height) 1fr' }}
      >
        <div>
          <div
            className="position-fixed start-0 top-0 w-100 d-grid"
            style={{ gridTemplateRows: 'var(--header-height)' }}
          >
            <Header />
          </div>
        </div>
        {/* CONTENT */}
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <h5 className="fs-6">Mis datos personales</h5>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-row justify-content-end align-items-center">
              <button className="btn btn-outline-default d-flex flex-row gap-2 align-items-center">
                <span className="text-black-50">Editar</span>
                <img
                  src="/public/icons/edit-icon.svg"
                  alt="Icono de lapiz"
                />
              </button>
            </div>
          </div>
          <div className="row">
            <PersonalInformationForm />
          </div>
        </div>
      </main>
    </>
  );
}
