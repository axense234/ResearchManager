// Global SCSS
import "@/scss/abstracts/globals.scss";
// Next Intl stuff
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
// Redux Provider
import ReduxProvider from "@/components/others/ReduxProvider";

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const messages = await getMessages();
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <div className="app-container">
          <NextIntlClientProvider messages={messages}>
            <ReduxProvider>{children}</ReduxProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
