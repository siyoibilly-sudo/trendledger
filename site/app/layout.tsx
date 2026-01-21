import "./globals.css";

export const metadata = {
  title: "TrendLedger",
  description: "Independent, data-driven insights on regional trends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header className="border-b">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <h1 className="text-xl font-semibold">TrendLedger</h1>
            <p className="text-sm text-gray-600">
              Independent, data-driven insights on regional trends
            </p>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="border-t">
          <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-500">
            © {new Date().getFullYear()} TrendLedger. Data-driven insights.
          </div>
        </footer>
      </body>
    </html>
  );
}
