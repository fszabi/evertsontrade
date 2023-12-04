import TradeUpListItem from "./TradeUpListItem";

const tradeUpBodies = {
  firstTradeUpInfo: `Folyamatos kereskedéssel egyre több és több profitot lehet realizálni 
  ami exponenciálisan nővekszik. Egy év alatt 10.000+ sikeres kereskedést hajtottam végre 
  és ez a jövőben csak növekedni fog.`,
  secondTradeUpInfo: `Jelenleg 20+ személy 4.000.000 FT + értékű skinnel szállt be ebbe a 
  lehetőségbe ami szintén tovább fog növekedni. Nem tervezem sokáig mások skinjeit forgatni 
  mivel rendelkezem én is egy magasabb inventoryval. A legrosszabb piaci körülmények között is 
  profitábilisan tudok kereskedni és ha az árfolyam be esik 20-25%ot akkoris profitálok. 
  `,
  thirdTradeUpInfo: `Az nagyon fontos, hogy rendelkezned kell egy alap pénzügyi intelligenciával 
  mivel a befektetés nem való mindenkinek. A minimum beszálló 300 euró értékű skin és 
  amikor kiszállsz a profitnak a felét leveszem. Amennyiben érdekel ez a lehetőség irj a 
  kapcsolatfelvételnél vagy keress meg steamen esetleg discordon.`,
};

export default function TradeUpList() {
  return (
    <ul className="divide-y">
      <TradeUpListItem body={tradeUpBodies.firstTradeUpInfo} />
      <TradeUpListItem body={tradeUpBodies.secondTradeUpInfo} />
      <TradeUpListItem body={tradeUpBodies.thirdTradeUpInfo} />
    </ul>
  );
}
