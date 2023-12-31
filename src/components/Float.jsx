export default function Float() {
  return (
    <>
      <div className="space-y-5">
        <h3 className="text-center text-lg max-sm:text-base">
          Factory New (0.00-0.07)
        </h3>
        <picture>
          <source srcSet="assets/webp/factorynew.webp" />
          <img
            className="rounded-lg w-full"
            src="assets/png/facorynew.png"
            alt="factorynew"
          />
        </picture>
      </div>
      <div className="space-y-5">
        <h3 className="text-center text-lg max-sm:text-base">
          Minimal Wear (0.07-0.15)
        </h3>
        <picture>
          <source srcSet="assets/webp/minimalwear.webp" />
          <img
            className="rounded-lg w-full"
            src="assets/png/minimalwear.png"
            alt="minimalwear"
          />
        </picture>
      </div>
      <div className="space-y-5">
        <h3 className="text-center text-lg max-sm:text-base">
          Field-Tested (0.15-0.37)
        </h3>
        <picture>
          <source srcSet="assets/webp/fieldtested.webp" />
          <img
            className="rounded-lg w-full"
            src="assets/png/fieldtested.png"
            alt="fieldtested"
          />
        </picture>
      </div>
      <div className="space-y-5">
        <h3 className="text-center text-lg max-sm:text-base">
          Well-Worn (0.37-0.44)
        </h3>
        <picture>
          <source srcSet="assets/webp/wellworn.webp" />
          <img
            className="rounded-lg w-full"
            src="assets/png/wellworn.png"
            alt="wellworn"
          />
        </picture>
      </div>
      <div className="space-y-5">
        <h3 className="text-center text-lg max-sm:text-base">
          Battle-Scarred (0.44-1.00)
        </h3>
        <picture>
          <source srcSet="assets/webp/battlescarred.webp" />
          <img
            className="rounded-lg w-full"
            src="assets/png/battlescarred.png"
            alt="battlescarred"
          />
        </picture>
      </div>
    </>
  );
}
