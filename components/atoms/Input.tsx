export function Input({
  labelText,
  error,
  ...props
}: JSX.IntrinsicElements["input"] & { labelText: string; error?: string }) {
  return (
    <label className="block grid mx-2 text-gray-700 text-base font-bold mb-2">
      {labelText}
      <input
        id={props.name}
        name={props.name}
        {...props}
        className={`shadow appearance-none border rounded w-100 p-2 mb-2 text-gray-700 focus:ring-green-300 focus:outline-none focus:border-1 focus:border-green-300 focus:ring-4 focus:ring-opacity-50 ${
          props.className
        } ${error && "focus:border-red focus:ring-red border-red"}`}
      />
      {error && <span className="text-red text-sm font-normal">{error}</span>}
    </label>
  );
}
