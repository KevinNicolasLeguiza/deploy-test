export function HomeCarousel() {
  // TODO[epic=images]
  return (
    <div
      id="home-carousel"
      className="carousel slide rounded"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          data-bs-interval="10000"
        >
          <img
            src="/public/home-carousel/carousel-image-1.svg"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
        <div
          className="carousel-item"
          data-bs-interval="10000"
        >
          <img
            src="/public/home-carousel/carousel-image-1.svg"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
        <div
          className="carousel-item"
          data-bs-interval="10000"
        >
          <img
            src="/public/home-carousel/carousel-image-1.svg"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
