import StickerListItem from "./StickerListItem";

const stickerListBodies = {
  firstStickerBody: `A legkönnyebben egy ritka matricás skin árát úgy tudod meghatározni, hogy beszorzod a matrica értékét 0.03-al, 
  általában 1-3% overpayt érnek meg a katowice 14,15 illetve a régi értékesebb matricás fegyverek. Viszont ezt az árat nagyban befolyásolja 
  a pozició és a matrica kopottsági értéke. Amennyiben egy matrica kopott sajnos fele annyit/se ér mintha nem lenne kopva. Ezen az útmutatón találsz egy részletes leirást minden fegyvernél külön: `,
  secondStickerBody: `Természetesen vannak nehezebben és könnyebben eladható craftok, az alábbi két 
  képen egy tier listát látsz a Katowice 2014-es matricákról. Az első a papir a második a holo-s tier list. `,
  thirdStickerBody: `Érdemes lehet Buff163-on utána nézni egy adott craftnak mivel ott rengeteg van eladó és biztosan találsz ugyan 
  olyat vagy hasonlót. Viszont vannak igazán ritka és értékes craftok amik nincsennek fent egy oldalon sem és szinte csak gyűjtöknél találhatóak meg amiknek a valós árát nehéz megtippelni.`,
};

export default function StickerList() {
  return (
    <ul className="divide-y">
      <StickerListItem
        body={stickerListBodies.firstStickerBody}
        padding="pb-8"
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=1762585506"
      />

      <StickerListItem
        body={stickerListBodies.secondStickerBody}
        padding="py-8"
      />

      <StickerListItem
        body={stickerListBodies.thirdStickerBody}
        padding="py-8"
      />
    </ul>
  );
}
