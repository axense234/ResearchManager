// Global SCSS
import "@/scss/abstracts/globals.scss";
// Next Intl stuff
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <div className="app-container">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
