export function SidebarButton() {
  return (
    <button
      className="rounded bg-transparent d-flex justify-content-center align-items-center border-0"
      style={{ maxWidth: 'var(--header-height)', maxHeight: 'var(--header-height)' }}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#sidebar"
      aria-controls="#sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000.svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        data-slot="icon"
        className="w-100 h-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
