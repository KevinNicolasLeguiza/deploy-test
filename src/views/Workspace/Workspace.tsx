// import { ProductCard } from '@/components'
import { Header, SearchBar } from '@/components';

export function Workspace() {
  return (
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
          <SearchBar />
        </div>
      </div>
      {/* CONTENT */}
      <div className="container">
        <span>content</span>
      </div>
    </main>
  );
}
