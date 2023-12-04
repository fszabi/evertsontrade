import FooterLink from "./FooterLink";
import { Fragment } from "react";

export default function FooterLinks() {
  return (
    <ul className="flex justify-center gap-10">
      <FooterLink
        href="https://discord.com/invite/2Yf3zP7CMQ"
        icon={
          <Fragment>
            <i class="fa-brands fa-discord"></i>
          </Fragment>
        }
      />

      <FooterLink
        href="https://www.twitch.tv/evertson01"
        icon={
          <Fragment>
            <i class="fa-brands fa-twitch"></i>
          </Fragment>
        }
      />

      <FooterLink
        href="https://www.facebook.com/groups/csgohungary"
        icon={
          <Fragment>
            <i class="fa-brands fa-facebook"></i>
          </Fragment>
        }
      />
    </ul>
  );
}
