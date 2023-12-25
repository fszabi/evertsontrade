import TradeGuideListItem from "./TradeGuideListItem";

const tradeGuideTexts = {
  firstTradeGuideText: ` Mivel sokan nincsennek képben a skinek áraival ezért összeállitottam
  egy rövid útmutatót.`,
  secondTradeGuideText: `1. Elsősorban szükséged lesz a csgotrader.app-ra amit hozzá kell adnod a böngészőhöz: `,
  thirdTradeGuideText: `2. Amint ez sikerült utána az adott böngésződben meg kell keresned a bővitményeket majd a csgotrader.appot 
  és a beállitásoknál a pricingot kell megkeresned. Ezek után a providernél beállitod a BUFF163- BUFF starting at (by pricempire.com) -ot.`,
  fourthTradeGuideText: `Innentől ha a saját vagy bárki raktárát megnyitod láthatod a valós értékét. Természetesen ez nem mutatja a ritka 
  floatos vagy craftok árait, csak és kizárólag a buff 100%os árakat mutatja.`,
  fifthTradeGuideText: `Kereskedők általában buff 100-110% körül adnak el és buff 80-95% között vásárolnak. 
  Szintén függ a vétel és az eladási ár is az adott item float,sticker+pozició,pattern, liquiditás és egyéb tényezőktől.`,
  sixthTradeGuideText: `Ez egy folyamatosan hullámzó piac, nagy valószinűséggel bukni fogsz egyszerű játékosként minden skinen ezért 
  csak akkor vásárolj skineket ha nem zavar hogy 5-10%ot vagy akár nagyobb %os bukóban tudod eladni. Ezzel számolnod kell 
  mivel alapjáraton a steam piac is 12%ot számit fel ami buff ár szerint 5-8% lehet.`,
  seventhTradeGuideText: `Illetve vannak olyan itemek amiket nem szabad vásárolni kivéve ha te direkt olyat szeretnél. 
  Pl: Statrakos kések vagy minimal wear dopplerek,tiger/slaugherek esetleg souvenir skinek vagy ww bs itemek.`,
  eighthTradeGuideText: `Remélem segitettem ezzel kicsit jobban átlátni a skinek árait, ha bárkinek bármilyen 
  kérdése van vagy segitségre van szüksége fordúljon hozzám nyugodtan.`,
};

export default function TradeGuideList() {
  return (
    <ul className="divide-y">
      <TradeGuideListItem
        body={tradeGuideTexts.firstTradeGuideText}
        padding="pb-8"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.secondTradeGuideText}
        padding="py-8"
        href="https://chrome.google.com/webstore/detail/csgo-trader-steam-trading/kaibcgikagnkfgjnibflebpldakfhfih"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.thirdTradeGuideText}
        padding="py-8"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.fourthTradeGuideText}
        padding="py-8"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.fifthTradeGuideText}
        padding="py-8"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.sixthTradeGuideText}
        padding="py-8"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.seventhTradeGuideText}
        padding="py-8"
      />

      <TradeGuideListItem
        body={tradeGuideTexts.eighthTradeGuideText}
        padding="py-8"
      />
    </ul>
  );
}
