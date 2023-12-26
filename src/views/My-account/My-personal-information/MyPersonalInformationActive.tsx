import { EditButtonActive, Header, PersonalInformationFormActive, Sidebar } from '@/components';

export function MyPersonalInformationActive() {
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
              <EditButtonActive />
            </div>
          </div>
          <div className="row">
            <PersonalInformationFormActive />
          </div>
        </div>
      </main>
    </>
  );
}
