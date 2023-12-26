export function EditButtonActive() {
  return (
    <button className="btn btn-outline-primary d-flex flex-row gap-2 align-items-center">
      <span>Editar</span>
      <img
        src={`${import.meta.env.BASE_URL || ''}/public/icons/edit-icon.svg`}
        alt="Icono de lapiz"
      />
    </button>
  );
}
