export function CategoryCard() {
  return (
    <div className="card w-100 px-2 py-1">
      <img
        src={`${import.meta.env.BASE_URL || ''}/public/icons/mdi_fruit-watermelon.svg`}
        alt="Melon"
        className="w-100 px-2 m-auto"
      />
      <div className="card-body py-1 pb-2 px-0 text-center">
        <span className="card-title small fw-semibold">Frutas</span>
      </div>
    </div>
  );
}
