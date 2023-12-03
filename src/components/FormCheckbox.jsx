export default function FormCheckBox({
  forAttribute,
  title,
  inputType,
  inputId,
}) {
  return (
    <div className="space-x-3 w-full">
      <input
        className="bg-neutral-900 border-2 rounded-md focus:outline-none
      focus:border-blue-400 py-2 px-4 transition-[border-color] duration-300"
        type={inputType}
        id={inputId}
      />
      <label htmlFor={forAttribute}>{title}</label>
    </div>
  );
}
