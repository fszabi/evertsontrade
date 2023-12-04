export default function FormCheckBox({
  checkName,
  forAttribute,
  title,
  inputId,
  inputValue,
}) {
  return (
    <div className="flex items-center gap-3 w-full">
      <input
        className="relative appearance-none w-6 h-6 border-[3px] border-blue-400"
        type="checkbox"
        name={checkName}
        id={inputId}
        value={inputValue}
      />
      <label className="leading-none" htmlFor={forAttribute}>
        {title}
      </label>
    </div>
  );
}
