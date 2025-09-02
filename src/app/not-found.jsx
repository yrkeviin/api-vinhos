import Link from "next/link";

export default function NotFound() {
    return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Página não encontrada 😢</h1>
        <p className="mb-6">O conteúdo que você procura não existe.</p>
        <Link
        href="/"
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
        >
        Voltar à Home
        </Link>
    </main>
    );
}