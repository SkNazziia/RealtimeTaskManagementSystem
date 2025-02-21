
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          AI Task Manager
        </Link>
        <div>
          <Link href="/dashboard" className="mx-4">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
