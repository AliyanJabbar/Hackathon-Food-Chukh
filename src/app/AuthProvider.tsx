"use client";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider = ({children}:React.PropsWithChildren<{}>) => {
  return <KindeProvider>{children}</KindeProvider>;
};