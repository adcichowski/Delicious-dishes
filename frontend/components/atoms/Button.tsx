export const Button = ({ ...props }: JSX.IntrinsicElements["button"]) => {
  return (
    <button
      {...props}
      className={`bg-green-400 hover:bg-blue-700 text-white-200 py-2 px-4 rounded ${
        props.className ?? ""
      }`}
    />
  );
};
Button.displayName = "Button";
