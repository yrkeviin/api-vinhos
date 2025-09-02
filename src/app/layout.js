import "./globals.css";

export const metadata = {
  title: "Adega Vinhos",
  description: "API De Vinhos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
