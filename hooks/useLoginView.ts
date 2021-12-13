import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect, useRef } from "react";

export function useLoginView() {
  const router = useRouter();
  const el = useRef<HTMLDivElement>(null);
  const [getLoginView, setLoginView] = useState("Start");
  const handleLoginView = () => {
    setLoginView("Process");
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };
  useEffect(() => {
    if (!el.current) return;
    const { current } = el;
    const dishesEl = current.querySelector("[data-name='dishes']");
    dishesEl?.classList.add("animate-pulse");
  }, []);

  return { el, getLoginView, handleLoginView };
}
