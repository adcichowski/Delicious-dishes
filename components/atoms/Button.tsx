export const Button = ({ ...props }: JSX.IntrinsicElements["button"]) => {
  const classesForComponent = `hover:bg-green-500 hover:text-white-100 focus:ring-green-300 focus:outline-none focus:border-1 focus:border-green-300 focus:ring-4 focus:ring-opacity-50 bg-green-400 py-2 px-4 rounded ${
    props.className ?? ""
  }`;

  return <button {...props} className={classesForComponent} />;
};
Button.displayName = "Button";
