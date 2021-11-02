export function Input({
  labelText,
  ...props
}: JSX.IntrinsicElements["input"] & { labelText: string }) {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {labelText}
      <input
        {...props}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:ring-green-300 focus:outline-none focus:border-1 focus:border-green-300 focus:ring-4 focus:ring-opacity-50 ${props.className}`}
      />
    </label>
  );
}
