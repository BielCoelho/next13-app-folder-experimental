import { IFetcherProps } from "@/interfaces/interfaces";
import { User } from "@prisma/client";

const fetcher = async ({ url, method, body, json = true }: IFetcherProps) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }), //if !body then it wont send a body key
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = (user: Pick<User, "email" | "password">) => {
  return fetcher({ url: "api/register", method: "post", body: user });
};

export const signin = (user: Pick<User, "email" | "password">) => {
  return fetcher({ url: "api/signin", method: "post", body: user });
};

export const createNewProject = (name: string) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
};
