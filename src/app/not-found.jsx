"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-red-900 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white text-center p-6">
            <h1 className="text-6xl font-extrabold mb-4 animate-pulse">
                404 🍷
            </h1>
            <h2 className="text-4xl font-bold mb-4">
                Página não encontrada
            </h2>
            <p className="mb-6 text-lg max-w-md">
                Parece que você se perdeu entre as vinhas. Mas não se preocupe, você pode voltar para a página inicial e continuar explorando!
            </p>
            <img
                src="/images/taça-de-vinho.png"
                alt="Taça de vinho"
                className="w-40 h-40 mb-6 animate-bounce"
            />
            <Link
                href="/"
                className="px-8 py-4 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
                Voltar à Home
            </Link>
        </main>
    );
} 