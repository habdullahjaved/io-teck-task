type BuildConfigProps = {
  method?: "get" | "post" | "put" | "delete";
  url: string;
  data?: any;
  token?: string;
  contentType?: string;
  additionalHeaders?: Record<string, string>;
  params?: Record<string, any>;
};

export const buildConfig = ({
  method = "get",
  url,
  data,
  token,
  contentType = "application/json",
  additionalHeaders = {},
  params = {},
}: BuildConfigProps) => {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": contentType,
    ...(token && { Authorization: `Bearer ${token}` }),
    ...additionalHeaders,
  };

  return {
    method,
    url,
    data,
    headers,
    params,
  };
};
