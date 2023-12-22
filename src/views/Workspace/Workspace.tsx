import { FinalizePurchaseModal, Header, Sidebar } from '@/components';

export function Workspace() {
  return (
    <>
      <Sidebar />
      <main
        className="main d-grid"
        style={{ gridTemplateRows: 'calc(var(--header-height) * var(--header-sections)) 1fr' }}
      >
        <div>
          <div
            className="position-fixed start-0 top-0 w-100 d-grid"
            style={{ gridTemplateRows: 'repeat(var(--header-sections), var(--header-height))' }}
          >
            <Header />
          </div>
        </div>
        {/* CONTENT */}
        <div className="container px-0">
          <FinalizePurchaseModal />
        </div>
      </main>
    </>
  );
}
