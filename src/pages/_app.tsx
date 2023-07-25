import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { CLIENT_STATIC_FILES_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
