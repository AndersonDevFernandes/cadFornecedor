// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Minha Aplicação",
  description: "Exemplo de layout no Next.js",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
