export default function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="px-3 py-3 bg-transparent text-primary border-2 rounded-md border-gray-300"
      {...props}
    />
  );
}
