import bcrypt from "bcrypt";
import { jwtVerify, SignJWT } from "jose";
import { db } from "./db";
import type { User } from "@prisma/client";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { RValidadeJWT } from "@/interfaces/interfaces";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";

export const hashPassword = async (pass: string) => await bcrypt.hash(pass, 10);

export const comparePass = async (plain: string, hashed: string) =>
  await bcrypt.compare(plain, hashed);

export const createJWT = (user: User) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({ payload: { id: user.id, email: user.email } })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

export const validateJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload as RValidadeJWT;
};

export const getUserFromCookies = async (
  cookies: RequestCookies | ReadonlyRequestCookies
) => {
  const jwt = cookies.get(process.env.COOKIE_NAME as string);

  if (!jwt) return;

  const { id } = await validateJWT(jwt.value);

  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};
