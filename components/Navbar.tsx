import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-100 text-blue-800 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-lg font-semibold cursor-pointer">Mental Wealth</span>
        </Link>
        <div className="space-x-4">
          <Link href="/quiz">
            <span className="hover:underline cursor-pointer">Quiz</span>
          </Link>
          <Link href="/chat">
            <span className="hover:underline cursor-pointer">Chat</span>
          </Link>
          <Link href="/diario">
            <span className="hover:underline cursor-pointer">Diario</span>
          </Link>
          <Link href="/esercizi">
            <span className="hover:underline cursor-pointer">Esercizi</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
