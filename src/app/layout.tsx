import Link from "next/link";
import "./globals.css";
const year = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-black text-white min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-4xl h-14 px-6 flex items-center justify-between">
            <Link href="/" className="tracking-[0.35em] text-xs">
              Rain and Flowers
            </Link>

            <div className="flex gap-6 text-xs tracking-[0.25em] text-white/70">
              <Link href="/news" className="hover:text-white">
                NEWS
              </Link>
              <Link href="/live" className="hover:text-white">
                LIVE
              </Link>
              <Link href="/profile" className="hover:text-white">
                PROFILE
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-4xl px-6 pt-24 pb-16">
          {children}
        </main>

        <footer className="mx-auto max-w-4xl px-6 py-10 text-xs tracking-widest text-white/40 border-t border-white/10">
          © {year} Rain and Flowers
        </footer>
      </body>
    </html>
  );
}
