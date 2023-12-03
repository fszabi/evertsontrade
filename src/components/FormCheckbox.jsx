export default function FormCheckBox({
  checkName,
  forAttribute,
  title,
  inputId,
  inputValue,
}) {
  return (
    <div className="space-x-3 w-full">
      <label htmlFor={forAttribute}>{title}</label>
      <input
        className="bg-neutral-900 border-2 rounded-md focus:outline-none
      focus:border-blue-400 py-2 px-4 transition-[border-color] duration-300"
        type="checkbox"
        name={checkName}
        id={inputId}
        value={inputValue}
      />
    </div>
  );
}
