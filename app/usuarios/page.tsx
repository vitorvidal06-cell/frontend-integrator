export default function Usuarios() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Usuários
      </h1>

      <p className="mt-2 text-gray-600">
        Usuários cadastrados no sistema.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-3xl">
              👨
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Vitor
              </h2>

              <p className="text-sm text-gray-500">
                Administrador
              </p>
            </div>
          </div>

          <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
            Ver perfil
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-3xl">
              👩
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Camila
              </h2>

              <p className="text-sm text-gray-500">
                Veterinária
              </p>
            </div>
          </div>

          <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
            Ver perfil
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-3xl">
              👤
            </div>

            <div>
              <h2 className="text-xl font-bold">
                João
              </h2>

              <p className="text-sm text-gray-500">
                Usuário
              </p>
            </div>
          </div>

          <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
            Ver perfil
          </button>
        </div>

      </div>
    </section>
  );
}