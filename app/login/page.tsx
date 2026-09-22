"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function entrar() {
    document.cookie = "session=true; path=/";
    router.push("/dashboard");
  }

  return (
    <main>
      <h1>Página de Login</h1>

      <p>Faça login para acessar o sistema.</p>

      <button onClick={entrar}>
        Entrar
      </button>
    </main>
  );
}