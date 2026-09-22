
export default function Dashboard() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Bem-vindo ao painel!
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-gray-500">
            Animais
          </p>
          <p className="mt-2 text-3xl font-bold">
            3
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-gray-500">
            Disponíveis
          </p>
          <p className="mt-2 text-3xl font-bold">
            3
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-gray-500">
            Adoções
          </p>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>
      </div>
    </section>
  );
}

