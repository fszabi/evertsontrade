export default function FormCheckBox({
  checkName,
  forAttribute,
  title,
  inputId,
  inputValue,
}) {
  return (
    <div className="space-x-3 w-full">
      <input
        className="relative appearance-none w-6 h-6 border-[3px] border-blue-400 checked:bg-blue-400 transition-colors ease-linear checked:before:absolute"
        type="checkbox"
        name={checkName}
        id={inputId}
        value={inputValue}
      />
      <label htmlFor={forAttribute}>{title}</label>
    </div>
  );
}
