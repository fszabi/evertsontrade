export default function Form({
  required,
  forAttribute,
  title,
  inputType,
  inputId,
  inputName,
}) {
  return (
    <div className="space-y-2 w-full">
      <label
        className={`font-bold`.concat(
          required
            ? " relative after:absolute after:content-['*'] after:text-blue-400 after:h-7 after:w-7 after:ml-2"
            : ""
        )}
        htmlFor={forAttribute}
      >
        {title}
      </label>
      <input
        className="block w-full bg-neutral-900 border-2 rounded-md focus:outline-none
      focus:border-blue-400 py-2 px-4 transition-[border-color] duration-300"
        pattern={
          inputType === "email" && "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
        }
        type={inputType}
        id={inputId}
        name={inputName}
        required={required}
      />
    </div>
  );
}
