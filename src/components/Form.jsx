import FormInput from "./FormInput";
import Fieldset from "./Fieldset";

export default function Form() {
  return (
    <form
      acceptCharset="UTF-8"
      action="https://www.formbackend.com/f/1e6ed1bc148cbd4d"
      className="space-y-12 grid place-items-center"
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
        inputPattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
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
        elements="4"
        legendText="Szolgáltatás típusa"
        radioId="szolgaltatasok"
        allChecksName="szolgaltatas"
        firstCheckAttr="trade-up"
        firstCheckTitle="Trade-Up"
        firstCheckId="trade-up"
        firstCheckValue="Trade-Up"
        secondCheckAttr="middleman"
        secondCheckTitle="Middleman"
        secondCheckId="middleman"
        secondCheckValue="Middleman"
        thirdCheckAttr="skin-sell"
        thirdCheckTitle="Skin eladás"
        thirdCheckId="skin-sell"
        thirdCheckValue="Skin eladás"
        fourthCheckAttr="valuation"
        fourthCheckTitle="Értékbecslés"
        fourthCheckId="valuation"
        fourthCheckValue="Értékbecslés"
      />
      <FormInput
        required
        forAttribute="steam"
        title="Steam profil linked"
        inputType="text"
        inputId="steam"
        inputName="Steam profil linked"
      />
      <Fieldset
        elements="3"
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
      <FormInput
        required
        forAttribute="skin"
        title="Milyen skined lenne eladó (skin név, teljes raktár)"
        inputType="text"
        inputId="skin"
        inputName="Milyen skined lenne eladó (skin név, teljes raktár)"
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
