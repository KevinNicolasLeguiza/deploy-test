import { AddressInformationForm, EditButton, Header, Sidebar } from '@/components';

export function MyAddressInformation() {
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
              <h5 className="fs-6">Mis direcciones</h5>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-row justify-content-end align-items-center">
              <EditButton />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5 className="fs-6">Datos de facturación</h5>
            </div>
          </div>
          <div className="row">
            <AddressInformationForm />
          </div>
        </div>
      </main>
    </>
  );
}
