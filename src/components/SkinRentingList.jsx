import SkinRentingListItem from "./SkinRentingListItem";

const skinRentingComments = {
  firstRentingComment: `A skin bérlés röviden az, hogy egy adott skint ki tudsz tőlem bérelni x hétre pár ezer FT-ért.`,
  secondRentingComment: `20.000-100.000 FT között értékű skin 2 hétre 1.000 FT 4 hétre 2000 FT.`,
  thirdRentingComment: `100.000 FT fölött pedig 2 hétre 2000 FT 4 hétre 4000 FT.`,
};

export default function SkinRentingList() {
  return (
    <ul className="divide-y">
      <SkinRentingListItem
        body={skinRentingComments.firstRentingComment}
        padding="pb-8"
      />

      <SkinRentingListItem
        body={skinRentingComments.secondRentingComment}
        padding="py-8"
      />

      <SkinRentingListItem
        body={skinRentingComments.thirdRentingComment}
        padding="py-8"
      />
    </ul>
  );
}
