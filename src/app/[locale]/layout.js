import "./globals.scss";
import Header from "@/components/header/header";

export const metadata = {
  title: "Studying",
  description: "Studying next js",
};

export default function RootLayout({ children, params:{locale} }) {
  return (
    <html lang={locale}>
      <body>
        <div className="flex flex-col p-5">
          <Header/>
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
