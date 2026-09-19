import "./globals.css";
import Footer from "../widgets/footer/ui/Footer";
import Header from "../widgets/header/ui/Header";
import { pretendard } from "../shared/fonts";

export const metadata = {
  title: "Dev.Portfolio",
  description: "프론트엔드 개발자 이은미 포트폴리오",
  icons: "/icons/favicon.ico",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full  antialiased ${pretendard.variable} font-sans`}
    >
      <body className="flex flex-col min-h-dvh px-6 mx-2">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
