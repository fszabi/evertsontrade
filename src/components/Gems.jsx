import GemsItem from "./GemsItem";

const gemsBodies = {
  firstGemsBody: `Az összes késből található case hardened változat illetve Hydra kesztyű, AK-47, Five-Seven és Mac-10-ből.`,
  secondGemsBody: `Röviden annyit érdemes tudni ezekről a skinekről, hogy több mint ezer változatban dobhat egy adott case hardened skint. 
  Ritka esetben szinte teljesen kékből vagy sárgából kerül kinyitásra az adott skin aminek az értéke több 1000 dollártól egészen 1.400.000 dollárig is terjedhet.`,
  thirdGemsBody: `A Blue gemeket ezen az oldalon tudod megnézni: `,
  fourthGemsBody: `A Gold gemeket ezen az oldalon tudod megnézni: `,
};

export default function StickerList() {
  return (
    <ul className="divide-y">
      <GemsItem body={gemsBodies.firstGemsBody} padding="pb-8" />

      <GemsItem body={gemsBodies.secondGemsBody} padding="py-8" />

      <GemsItem
        body={gemsBodies.thirdGemsBody}
        padding="py-8"
        href="https://csgobluegem.com/"
      />

      <GemsItem
        body={gemsBodies.fourthGemsBody}
        padding="py-8"
        href="https://broskins.com/index.php?threads/case-hardened-gold-gem-guide-patterns.276/"
      />
    </ul>
  );
}
