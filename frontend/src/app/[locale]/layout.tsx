import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { ReduxProvider } from "@/lib/store/provider/ReduxProvider";
import HeaderNavigation from "@/components/header/HeaderNavigation";
import "../globals.css";
import Footer from "@/components/footer/Footer";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <HeaderNavigation />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
