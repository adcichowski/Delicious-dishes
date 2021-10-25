import React from "react";

export const Button = ({
  ...props
}:
  | (JSX.IntrinsicElements["a"] & { element: "a"; href: string })
  | (JSX.IntrinsicElements["button"] & { element: "button" })) => {
  const classesForComponent = `bg-green-400 hover:bg-blue-700 text-white-200 py-2 px-4 rounded ${
    props.className ?? ""
  }`;
  if (props.element === "a") {
    return <a {...props} className={classesForComponent} />;
  }

  return <button {...props} className={classesForComponent} />;
};
Button.displayName = "Button";
