import FormInput from "./FormInput";
import Fieldset from "./Fieldset";

export default function Form() {
  return (
    <form
      acceptCharset="UTF-8"
      action="https://formspree.io/f/mdorrvrz"
      className="space-y-10 grid place-items-center"
      name="contact"
      method="POST"
    >
      <FormInput
        required
        forAttribute="name"
        title="Név"
        inputType="text"
        inputId="name"
        inputName="Név"
      />
      <FormInput
        required
        forAttribute="socials"
        title="Discord név/Facebook profil link"
        inputType="text"
        inputId="socials"
        inputName="Discord/Facebook"
      />
      <FormInput
        required
        forAttribute="email"
        title="Email"
        inputType="email"
        inputId="email"
        inputName="Email cím"
      />
      <div className="space-y-2 w-full">
        <label htmlFor="comment">Megjegyzés</label>

        <textarea
          className="block w-full bg-neutral-900 border-2 rounded-md focus:outline-none
      focus:border-blue-400 py-2 px-4 transition-[border-color] duration-300"
          id="comment"
          name="Üzenet"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <Fieldset
        legendText="Szolgáltatás típusa"
        radioId="szolgaltatasok"
        allChecksName="szolgaltatas"
        firstCheckAttr="middleman"
        firstCheckTitle="Middleman"
        firstCheckId="middleman"
        firstCheckValue="Middleman"
        secondCheckAttr="skin-sell"
        secondCheckTitle="Skin eladás"
        secondCheckId="skin-sell"
        secondCheckValue="Skin eladás"
        thirdCheckAttr="valuation"
        thirdCheckTitle="Értékbecslés"
        thirdCheckId="valuation"
        thirdCheckValue="Értékbecslés"
      />
      <FormInput
        required
        forAttribute="steam"
        title="Steam profil linked"
        inputType="text"
        inputId="steam"
        inputName="Steam profil linked"
      />
      <FormInput
        required
        forAttribute="skin"
        title="Milyen skined lenne eladó (skin név, teljes raktár)"
        inputType="text"
        inputId="skin"
        inputName="Milyen skined lenne eladó (skin név, teljes raktár)"
      />
      <Fieldset
        legendText="Fizetési opció"
        radioId="fizetesi-opciok"
        allChecksName="fizetesi-opcio"
        firstCheckAttr="crypto"
        firstCheckTitle="Crypto"
        firstCheckId="crypto"
        firstCheckValue="Crypto"
        secondCheckAttr="revolut"
        secondCheckTitle="Revolut"
        secondCheckId="revolut"
        secondCheckValue="Revolut"
        thirdCheckAttr="bank-transfer"
        thirdCheckTitle="Banki átutalás"
        thirdCheckId="bank-transfer"
        thirdCheckValue="Banki utalás"
      />
      <button
        className="bg-blue-400 py-3 px-6 text-lg rounded-md place-self-start"
        type="submit"
        value="submit"
        name="submit"
      >
        Küldés
      </button>
    </form>
  );
}
