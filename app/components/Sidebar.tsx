
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 p-6 text-white">
      <h2 className="mb-8 text-2xl font-bold">
        🐾 Meu Sistema
      </h2>

      <nav className="flex flex-col gap-3">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-3 hover:bg-gray-700"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/animais"
          className="rounded-lg px-4 py-3 hover:bg-gray-700"
        >
          🐶 Animais
        </Link>

        <Link
          href="/usuarios"
          className="rounded-lg px-4 py-3 hover:bg-gray-700"
        >
          👤 Usuários
        </Link>
      </nav>
    </aside>
  );
}
