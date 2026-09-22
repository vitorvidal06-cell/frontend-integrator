
import Link from "next/link";

export default function BobPage() {
  return (
    <section className="p-10">
      <Link
        href="/animais"
        className="text-sm text-gray-600 hover:text-gray-900"
      >
        ← Voltar para animais
      </Link>

      <div className="mt-6 max-w-2xl rounded-xl bg-white p-8 shadow">
        <div className="flex h-48 items-center justify-center rounded-lg bg-gray-200 text-8xl">
          🐕
        </div>

        <h1 className="mt-6 text-3xl font-bold">
          Bob
        </h1>

        <p className="mt-3 text-gray-600">
          Cachorro • Grande • 3 anos
        </p>

        <div className="mt-6 space-y-3">
          <p>
            <strong>Temperamento:</strong> Dócil e companheiro.
          </p>

          <p>
            <strong>Vacinação:</strong> Em dia
          </p>

          <p>
            <strong>Castrado:</strong> Sim
          </p>

          <p>
            <strong>Status:</strong> Disponível para adoção
          </p>
        </div>

        <button className="mt-6 rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-700">
          Tenho interesse em adotar
        </button>
      </div>
    </section>
  );
}

