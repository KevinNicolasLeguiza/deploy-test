import { CategoryCard, Header, HomeCarousel, HomeFooter, ProductCard, SearchBar, WelcomeModal } from '@/components';

export function Home() {
  return (
    <main
      className="main d-grid"
      style={{ gridTemplateRows: 'calc(var(--header-height) * var(--header-sections)) 1fr' }}
    >
      <div>
        <div
          className="position-fixed start-0 top-0 w-100 d-grid z-1"
          style={{ gridTemplateRows: 'repeat(var(--header-sections), var(--header-height))' }}
        >
          <Header />
          <SearchBar />
        </div>
      </div>
      {/* CONTENT */}
      <div className="container">
        <WelcomeModal />
        {/* Alert */}
        <div className="row">
          <div className="col">
            <div className="alert alert-warning py-2 px-4 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gold"
                style={{ width: '1.3rem' }}
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-dark small ms-3">Necesitas ayuda con tu compra?</span>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div className="row">
          <div className="col">
            <HomeCarousel />
          </div>
        </div>
        {/* Categories */}
        <div className="row">
          <div className="col">
            <div className="container px-0 py-3">
              <div className="row">
                <div className="col">
                  <span className="fw-semibold">Nuestras categorias</span>
                </div>
              </div>
              <div
                className="row d-flex flex-row gap-2 justify-content-start align-items-center p-2 flex-nowrap overflow-x-auto"
                style={{ maxWidth: '100vw' }}
              >
                <div className="col-3 col-sm-2">
                  <CategoryCard />
                </div>
                <div className="col-3 col-sm-2">
                  <CategoryCard />
                </div>
                <div className="col-3 col-sm-2">
                  <CategoryCard />
                </div>
                <div className="col-3 col-sm-2">
                  <CategoryCard />
                </div>
                <div className="col-3 col-sm-2">
                  <CategoryCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-12 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
                <div className="col-6 col-lg-3 py-2">
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <HomeFooter />
      </div>
    </main>
  );
}
