import TradeListItem from "./TradeListItem";

const tradeBodies = {
  firstTrade: `Mikor elindítasz egy trade-t (PC-ről vagy mobilról) egy másik fiókra, azt mindig 
  jóvá kell hagynod a telefonodról (MFA – Multi factor authenticator rendszerrel) 
  kétlépcsős azonosítással.`,
  secondTrade: `Amennyiben API scam áldozata vagy ugyanúgy tudsz küldeni tradeket, viszont az általad 
  elfogadott ajánlat elküldésekor, vagyis az „Accept Offer” gomb lenyomása után az eredeti trade offer 
  törlődik és egy teljesen másik fiókra küldöd át a skineket lényegében. Általában, de nem mindig, egy olyan 
  fiókra küldöd át, ami teljesen hasonlít arra a fiókra, mint amire eredetileg is szeretted volna küldeni.`,
  thirdTrade: `Mindig ellenőrizd a fiókot, akivel tradelni szeretnél. Amennyiben ki akarja adni valaki másnak magát, 
  valószínűleg hasonló fiókot készít, de a trade ablakon látható a regisztráció dátuma, ami árulkodó jel lehet.`,
  fourthTrade: `A privát fiókokat érdemes kerülni.`,
  fifthTrade: `Nem fog senki ismeretlenül meccsre hívni téged és nem is szeretné, ha rá szavaznál egy no-name versenyen, 
  hogy skint kapj ajándékba. Egyértelműen scammelni akar téged.`,
  sixthTrade: `A barátfelkéréseket fokozott óvatossággal kezeld ismeretlen emberektől.`,
  seventhTrade: `Teljesen random, ismeretlen linkekre inkább rá se kattints.`,
  eighthTrade: `Ha egyik ismerősöddel, barátoddal akarsz tradelni, ha teheted beszélj vele szóban, telefonon, DC-n vagy bárhol, 
  ahol megbizonyosodhatsz arról, hogy valóban nem törték fel a fiókját és valaki más használja, hogy scammeljen. 
  (Vagy új fiókod készítettek hasonló mintára, mint a barátodé, hogy scammeljenek)`,
  ninthTrade: `Mielőtt elküldöd a trade offert (csereajánlatot), mindig ellenőrizd azt, hogy a fiókod API scam áldozatává vált-e. 
  Fontos lépések a fiókod ellenőrzéshez: A böngésződbe írd be (vagy másold be) a következő URL címet: 
  steamcommunity.com/dev/apikey Itt a saját API key regisztrációs oldaladra fog navigálni a Steam, ahol láthatod a jelenleg beállított API key-t. 
  Hogyha érdekes számokat, e-mail címet, web domain-t, vagy bármi olyan dolgot találsz, amit, amit biztosan tudod, hogy nem te állítottál be, 
  akkor valószínűleg API scam áldozata vagy!`,
  tenthTrade: `Ellenőrzés utáni teendők amennyiben API scam áldozata vagy: (Mindenképpen tartsátok be a sorrendet)`,
  eleventhTrade: `Változtasd meg a jelszavadat Deaktíválj (csatlakoztass le) minden olyan eszközt, 
  ami hozzá fér a Steam fiókodhoz vagy be van jelentkezve rajta.`,
  twelfthTrade: `Minden olyan platformon, ahol ugyanaz a jelszó, mint ami Steam-eden, sürgősen változtasd meg.`,
  thirteenthTrade: `Azon az oldalon (steamcommunity.com/dev/apikey), ahol megnézted, 
  hogy a fiókod API scam-mel fertőzték meg, kattints a Steam API kulcs visszavonása (Revoke My Steam Web API Key) gombra.`,
  fourteenthTrade: `Ezután felugrik egy ablak, ami figyelmeztet, hogy az API kulcs ezután nem fog működik és a 
  művelet visszavonhatatlan lesz. Ne foglalkozzatok vele, „OK” gombra kell kattintani, 
  ez csak a scammertől veszi el az utat a fiókodhoz, amennyiben szükség van rá bármikor tudtok újat igényelni.`,
  fifteenthTrade: `Ellenőrizzétek, hogy valóban üres-e a mező az API kulcsos oldalon. Amennyiben üres a mező, 
  akkor sikeresen megcsináltátok, viszont amennyiben továbbra is van ott valami úgy, 
  hogy pontról-pontra végig csináltátok a teendőket, akkor kezdjétek elölről.`,
};

export default function StepList() {
  return (
    <ul className="divide-y">
      <TradeListItem body={tradeBodies.firstTrade} padding="pb-8" />

      <TradeListItem body={tradeBodies.secondTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.thirdTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.fourthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.fifthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.sixthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.seventhTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.eighthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.ninthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.tenthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.eleventhTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.twelfthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.thirteenthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.fourteenthTrade} padding="py-8" />

      <TradeListItem body={tradeBodies.fifteenthTrade} padding="py-8" />
    </ul>
  );
}
