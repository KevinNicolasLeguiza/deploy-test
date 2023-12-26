import { Header, PaymentMethodsList, PaymentSummaryList, PurchaseFlowFooter, Sidebar } from '@/components';

export function PaymentMethods() {
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
        <div className="d-flex flex-column justify-content-between">
          <div className="container py-3">
            <div className="row">
              <div className="col">
                <h5 className="fw-semibold">Últimos pasos!</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="small">Completar los siguiente datos para finalizar la compra.</p>
              </div>
            </div>
            {/* Payment methods */}
            <div className="row mt-3">
              <div className="col">
                <span className="fw-semibold">Forma de pago</span>
              </div>
            </div>
            {/* Payment methods list */}
            <div className="row">
              <PaymentMethodsList />
            </div>
          </div>
          <div>
            <PaymentSummaryList />
          </div>
        </div>
        <div className="py-5">
          <PurchaseFlowFooter />
        </div>
      </main>
    </>
  );
}
