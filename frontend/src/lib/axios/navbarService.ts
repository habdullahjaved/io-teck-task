import { api } from "@/lib/axios/axios";
import { buildConfig } from "@/lib/axios/requestBuilder";

export const fetchNavbar = async (locale = "en") => {
  const res = await api(
    buildConfig({
      url: "/navbar",
      params: {
        locale,
        populate: {
          logo: "*",
          menu_items: "*",
          dropdown_services: "*", // if you use a relation
        },
      },
      // token: process.env.NEXT_PUBLIC_API_TOKEN,
    })
  );
  return res.data;
};
