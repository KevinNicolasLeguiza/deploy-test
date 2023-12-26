export function EditButton() {
  return (
    <button className="btn btn-outline-default d-flex flex-row gap-2 align-items-center">
      <span className="text-black-50">Editar</span>
      <img
        src="/public/icons/edit-icon.svg"
        alt="Icono de lapiz"
      />
    </button>
  );
}
