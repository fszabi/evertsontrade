import FooterLink from "./FooterLink";
import { Fragment } from "react";

export default function FooterLinks() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-20 gap-y-5 bg-neutral-900 rounded-lg w-fit mx-auto px-10 max-sm:px-4 py-4">
      <FooterLink
        href="https://discord.com/invite/2Yf3zP7CMQ"
        aria="discord link"
        icon={
          <Fragment>
            <img
              className="w-12 h-12"
              src="assets/svg/discord.svg"
              alt="discord svg"
            />
          </Fragment>
        }
      />

      <FooterLink
        href="https://www.twitch.tv/evertson01"
        aria="twitch link"
        icon={
          <Fragment>
            <img
              className="w-12 h-12"
              src="assets/svg/twitch.svg"
              alt="twitch svg"
            />
          </Fragment>
        }
      />

      <FooterLink
        href="https://www.facebook.com/groups/csgohungary"
        aria="facebook link"
        icon={
          <Fragment>
            <img
              className="w-12 h-12"
              src="assets/svg/facebook.svg"
              alt="facebook svg"
            />
          </Fragment>
        }
      />
    </ul>
  );
}
