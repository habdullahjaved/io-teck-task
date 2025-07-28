import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  trailingSlash: false, // 🚫 No trailing slash
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // ✅ Allow Strapi running on this port
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "io-teck-task.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

export default withNextIntl(config);
