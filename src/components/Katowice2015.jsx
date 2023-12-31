import Katowice2015Item from "./Katowice2015Item";

const katowice2015Bodies = {
  firstKatowice2015Body: `Hasonló illetve néhány matrica drágább árban van mint a DreamHack 2014es matricák. 
  Rengeteg szép craftot lehet belőlük késziteni és szintén közkedveltek a gyűjtők és játékosok körében.`,
  secondKatowice2015Body: `Akár a matrica értékének a 10-15%át is el lehet kérni túlfizetésként ha az megfelelő pozicióban van felragasztva az adott fegyverre.`,
  thirdKatowice2015Body: `Akár még a steam profilodat is szebbé teheted velük ha van jelenlegi árfolyamon 1.579.000 FT-ot erre.`,
};

export default function Katowice2015() {
  return (
    <ul className="divide-y">
      <Katowice2015Item
        body={katowice2015Bodies.firstKatowice2015Body}
        padding="pb-8"
      />

      <Katowice2015Item
        body={katowice2015Bodies.secondKatowice2015Body}
        padding="py-8"
      />

      <Katowice2015Item
        body={katowice2015Bodies.thirdKatowice2015Body}
        padding="py-8"
      />
    </ul>
  );
}
