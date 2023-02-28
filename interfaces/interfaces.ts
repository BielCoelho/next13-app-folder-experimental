import { ReactNode } from "react";

export interface IJWT {
  name: string;
  value: string;
}

export interface IFetcherProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "OPTIONS" | "DELETE" | "post";
  body: any;
  json?: boolean;
}

export interface RValidadeJWT {
  id: string;
  email: string;
}

export interface ILayoutProps {
  children: ReactNode;
}
