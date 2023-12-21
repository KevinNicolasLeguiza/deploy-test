import { Sidebar } from '@/components'

interface Props {
  children: React.ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <main
      className="main d-grid"
      style={{ gridTemplateRows: '75px 1fr' }}
    >
      <div className="container py-2">
        <div className="row h-100 pb-2 border-bottom border-secondary-subtle mb-2">
          <div className="col h-100 d-inline py-2 px-4">
            <img
              src="https://cdn.abastovirtual.com/img/logo.png"
              alt="Logo de Abasto virtual"
              className="h-100 w-auto"
            />
          </div>
          <div className="col-2 col-md-1 my-auto d-flex justify-content-end align-items-center">
            <Sidebar />
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}
