import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Frontend Integrator</h1>

      <p>Bem-vindo ao sistema!</p>

      <nav>
        <Link href="/">Início</Link>
        {" | "}
        <Link href="/login">Login</Link>
        {" | "}
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </main>
  );
}