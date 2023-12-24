export function ExperienceUsingAppList() {
  return (
    <div className="container w-100 mt-2">
      <div className="row my-2">
        <div className="col">
          <button className="btn btn-outline-default d-flex justify-content-center align-items-center gap-2 w-100 py-2">
            <div
              className="text-end"
              style={{ width: 'calc(50% - 24px)' }}
            >
              <img
                src="/public/icons/happy-face.svg"
                alt="Emoji de cara feliz"
                className="h-100"
              />
            </div>
            <div className="flex-grow-1 text-start">
              <span className="text-dark">Genial!</span>
            </div>
          </button>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <button className="btn btn-outline-default d-flex justify-content-center align-items-center gap-2 w-100 py-2">
            <div
              className="text-end"
              style={{ width: 'calc(50% - 24px)' }}
            >
              <img
                src="/public/icons/confused-face.svg"
                alt="Emoji de cara confundida"
                className="h-100"
              />
            </div>
            <div className="flex-grow-1 text-start">
              <span className="text-dark">Confusa</span>
            </div>
          </button>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <button className="btn btn-outline-default d-flex align-items-center gap-2 w-100 py-2">
            <div
              className="text-end"
              style={{ width: 'calc(50% - 24px)' }}
            >
              <img
                src="/public/icons/sad-face.svg"
                alt="Emoji de cara triste"
                className="h-100"
              />
            </div>
            <div className="flex-grow-1 text-start">
              <span className="text-dark">No me gusta</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
