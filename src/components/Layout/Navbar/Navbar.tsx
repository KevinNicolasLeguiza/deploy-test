import { Header, SearchBar } from '@/components';

export function Navbar() {
  return (
    <div
      className="position-fixed start-0 top-0 w-100 d-grid z-1"
      style={{ gridTemplateRows: 'repeat(var(--header-sections), var(--header-height))' }}
    >
      <Header />
      <SearchBar />
    </div>
  );
}
