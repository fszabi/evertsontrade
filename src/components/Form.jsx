import FormCheckBox from "./FormCheckbox";
import FormInput from "./FormInput";

export default function Form() {
  return (
    <form className="space-y-10 grid place-items-center" method="POST">
      <FormInput
        required
        forAttribute="name"
        title="Név"
        inputType="text"
        inputId="name"
      />
      <FormInput
        required
        forAttribute="socials"
        title="Discord név/Facebook profil link"
        inputType="text"
        inputId="socials"
      />
      <FormInput
        required
        forAttribute="email"
        title="Email"
        inputType="email"
        inputId="email"
      />
      <div className="space-y-2 w-full">
        <label htmlFor="comment">Megjegyzés</label>

        <textarea
          className="block w-full bg-neutral-900 border-2 rounded-md focus:outline-none
      focus:border-blue-400 py-2 px-4 transition-[border-color] duration-300"
          id="comment"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <FormInput
        required
        forAttribute="steam"
        title="Steam profil linked"
        inputType="text"
        inputId="steam"
      />
      <FormInput
        required
        forAttribute="skin"
        title="Milyen skined lenne eladó (skin név, teljes raktár)"
        inputType="text"
        inputId="skin"
      />
      <fieldset className="w-full space-y-5">
        <legend
          className="font-bold text-lg
        relative after:absolute 
        after:content-['*'] after:text-blue-400 
        after:h-7 after:w-7 after:ml-2"
        >
          Szolgáltatás típusa
        </legend>
        <ul className="space-y-3" required>
          <FormCheckBox
            forAttribute="middleman"
            title="Middleman"
            inputType="checkbox"
            inputId="middleman"
          />
          <FormCheckBox
            forAttribute="skin-sell"
            title="Skin eladás"
            inputType="checkbox"
            inputId="skin-sell"
          />
          <FormCheckBox
            forAttribute="valuation"
            title="Értékbecslés"
            inputType="checkbox"
            inputId="valuation"
          />
        </ul>
      </fieldset>
      <button>sad</button>
    </form>
  );
}
