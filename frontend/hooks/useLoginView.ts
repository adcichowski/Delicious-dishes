import { useState } from "react";
import { useEffect, useRef } from "react";

export function useLoginView() {
  const el = useRef<HTMLDivElement>(null);
  const [getLoginView, setLoginView] = useState("Start");
  const handleLoginView = () => {
    setLoginView("Process");
    setTimeout(() => {
      setLoginView("Login");
    }, 2500);
  };
  useEffect(() => {
    if (!el.current) return;
    console.log(el);
    const { current } = el;
    const dishesEl = current.querySelector("[data-name='dishes']");
    dishesEl?.classList.add("animate-pulse");
  }, []);

  return { el, getLoginView, handleLoginView };
}
