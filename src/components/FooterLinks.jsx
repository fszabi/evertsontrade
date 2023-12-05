import FooterLink from "./FooterLink";
import { Fragment } from "react";

export default function FooterLinks() {
  return (
    <ul className="flex justify-center gap-10">
      <FooterLink
        href="https://discord.com/invite/2Yf3zP7CMQ"
        aria="discord link"
        icon={
          <Fragment>
            <i class="fa-brands fa-discord"></i>
          </Fragment>
        }
      />

      <FooterLink
        href="https://www.twitch.tv/evertson01"
        aria="twitch link"
        icon={
          <Fragment>
            <i class="fa-brands fa-twitch"></i>
          </Fragment>
        }
      />

      <FooterLink
        href="https://www.facebook.com/groups/csgohungary"
        aria="facebook link"
        icon={
          <Fragment>
            <i class="fa-brands fa-facebook"></i>
          </Fragment>
        }
      />
    </ul>
  );
}
