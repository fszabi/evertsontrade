import FormCheckBox from "./FormCheckbox";
import { useEffect, useRef } from "react";

export default function Fieldset({
  legendText,
  radioId,
  allChecksName,
  firstCheckAttr,
  firstCheckTitle,
  firstCheckId,
  firstCheckValue,
  secondCheckAttr,
  secondCheckTitle,
  secondCheckId,
  secondCheckValue,
  thirdCheckAttr,
  thirdCheckTitle,
  thirdCheckId,
  thirdCheckValue,
}) {
  const componentRef = useRef(null);

  useEffect(() => {
    const inputs = componentRef.current.querySelectorAll(
      `[name="${allChecksName}"]`
    );
    const radioForCheckboxes = componentRef.current.querySelector(
      `#${radioId}`
    );
    function checkCheckboxes() {
      let isAtLeastOneSelected = false;

      for (var i = 0; i < inputs.length; ++i) {
        if (inputs[i].checked) {
          isAtLeastOneSelected = true;
        }
      }
      radioForCheckboxes.checked = isAtLeastOneSelected;
    }
    for (var i = inputs.length - 1; i >= 0; --i) {
      inputs[i].addEventListener("change", checkCheckboxes);
    }
  }, []);

  return (
    <fieldset ref={componentRef} className="w-full space-y-5">
      <legend
        className="font-bold text-lg
        relative after:absolute 
        after:content-['*'] after:text-blue-400 
        after:h-7 after:w-7 after:ml-2"
      >
        {legendText}
      </legend>
      <input
        className="sr-only"
        id={radioId}
        name={radioId}
        type="radio"
        required
      />
      <ul className="space-y-3">
        <FormCheckBox
          checkName={allChecksName}
          forAttribute={firstCheckAttr}
          title={firstCheckTitle}
          inputId={firstCheckId}
          inputValue={firstCheckValue}
        />
        <FormCheckBox
          checkName={allChecksName}
          forAttribute={secondCheckAttr}
          title={secondCheckTitle}
          inputId={secondCheckId}
          inputValue={secondCheckValue}
        />
        <FormCheckBox
          checkName={allChecksName}
          forAttribute={thirdCheckAttr}
          title={thirdCheckTitle}
          inputId={thirdCheckId}
          inputValue={thirdCheckValue}
        />
      </ul>
    </fieldset>
  );
}
