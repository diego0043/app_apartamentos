export const NavBar = () => {
  return (
    <>
      <div className="static h-16 bg-white flex ">
        <div className="flex-none w-32">
          <span className="block ml-8 mt-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg"
              className="w-10 h-10 text-gray-500"
            />
          </span>
        </div>
        <div className="flex-1 ">
          <div className="flex flex-row-reverse">
            <div className="mr-5">
              <button className="block mt-3  text-gray-500 hover:text-gray-800 font-bold py-2 px-4 ">
                Consultar ingresos
              </button>
            </div>
            <div className="mr-5">
              <button className="block mt-3  text-gray-500 hover:text-gray-800 font-bold py-2 px-4 ">
                Consultar gastos
              </button>
            </div>
            <div className="mr-5">
              <button className="block mt-3  text-gray-500 hover:text-gray-800 font-bold py-2 px-4 ">
                Clientes activos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
