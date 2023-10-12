"use client";
import { Provider } from "react-redux";
import Store from "@/app/redux/store";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={Store}>{children}</Provider>;
}
