"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, ReactNode } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { userId } = useAuth();
  const { push } = useRouter();
  if (!userId) {
    push("/login");
    return null;
  }

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
