import ApiListItem from "./ApiListItem";

const apiBodies = {
  firstApiTip: `Elsősorban mindig jelentkezzetek be a saját webböngészőtökből 
  (Google Chrome, Mozilla, Opera..stb.) a Steam-en.`,
  secondApiTip: `Amennyiben ezek után is kéri valamelyik oldal a böngészőből a Steam-es 
  bejelentkezésedet (Írd be a jelszavadat vagy olvasd be a QR kódot), akkor egy scam oldalra 
  próbálsz belépni. Így szeretnék a scammerek megtudni a jelszavadat és a felhasználó nevedet 
  és ezután ellopni az API key-edet.`,
  thirdApiTip: `Amennyiben mégis egy third-party (nem a Steam tulajdonában álló) oldalra szeretnél belépni, 
  először jelentkezz be a webböngésződből a Steam fiókodra. Ezután, ha megpróbálsz bejelentkezni a third-party 
  oldalra akkor nem fog jelszót és felhasználó nevet kérni, hanem csak egy zöld „Sign In” (Bejelentkezés) 
  gomb fog várni.`,
  fourthApiTip: `Ha nagyon biztosra akarsz menni és egy másik fiókodra akarsz küldeni valami értékesebb skin-t, 
  akkor kérj cserébe vissza egy pár centes itemet/skint. Ezután felugrik a telefonodra a visszaigazolás iránti 
  kérelem és itt jön egy nagyon fontos mozzanat, mert meg kell bizonyosodnod arról, hogy tényleg jó helyre küldöd-e 
  át a dolgokat.`,
  fifthApiTip: `Mindig ellenőrizd, hogy van-e API key beállítva azon a fiókon amire akarsz átküldeni értékesebb dolgokat.`,
  sixthApiTip: `Kapott Badge a másik fiókon.`,
  seventhApiTip: `Steam profilod szintje. (Steam level)`,
  eighthApiTip: `A másik fiók képe alatt az, hogy ismerősök vagytok-e. (egy fehér ember ikon)`,
  ninthApiTip: `A pár centes item a másik fiókról benne van-e a trade-ben. (Az API scam fiókok nem rendelkeznek 
    ilyen itemekkel feltehetőleg, tehát nem szerepelne a tradeben az amit amúgy te beraktál, legyen az skin vagy egy semmitmondó graffiti).`,
  tenthApiTip: `Ha minden stimmel akkor elfogadható a trade.`,
};

export default function ApiList() {
  return (
    <ul className="divide-y">
      <ApiListItem body={apiBodies.firstApiTip} padding="pb-8" />
      <ApiListItem body={apiBodies.secondApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.thirdApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.fourthApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.fifthApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.sixthApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.seventhApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.eighthApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.ninthApiTip} padding="py-8" />
      <ApiListItem body={apiBodies.tenthApiTip} padding="py-8" />
    </ul>
  );
}
