
import Link from "next/link";

export default function Animais() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Animais
      </h1>

      <p className="mt-2 text-gray-600">
        Animais disponíveis para adoção.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Thor */}
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="flex h-40 items-center justify-center bg-gray-200 text-6xl">
            🐶
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold">
              Thor
            </h2>

            <p className="mt-2 text-gray-600">
              Cachorro • Médio • 2 anos
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Brincalhão e amigável.
            </p>

            <Link
              href="/animais/thor"
              className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
            >
              Ver detalhes
            </Link>
          </div>
        </div>

        {/* Luna */}
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="flex h-40 items-center justify-center bg-gray-200 text-6xl">
            🐱
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold">
              Luna
            </h2>

            <p className="mt-2 text-gray-600">
              Gato • Pequeno • 1 ano
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Carinhosa e tranquila.
            </p>

            <Link
              href="/animais/luna"
              className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
            >
              Ver detalhes
            </Link>
          </div>
        </div>

        {/* Bob */}
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="flex h-40 items-center justify-center bg-gray-200 text-6xl">
            🐕
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold">
              Bob
            </h2>

            <p className="mt-2 text-gray-600">
              Cachorro • Grande • 3 anos
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Dócil e companheiro.
            </p>

            <Link
              href="/animais/bob"
              className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
            >
              Ver detalhes
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

