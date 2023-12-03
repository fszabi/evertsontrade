import Container from "./Container";
import FooterItem from "./FooterItem";
import ScrollArrow from "./ScrollArrow";
import { Fragment } from "react";

export default function Footer() {
  return (
    <>
      <footer className="py-20">
        <Container customStyles="space-y-20">
          <div className="mx-auto text-center space-y-10 max-w-3xl">
            <a
              target="_blank"
              href="https://steamcommunity.com/tradeoffer/new/?partner=1061101075&token=SLQ6lxob"
              className="mx-auto flex justify-center items-center rounded-full aspect-square min-h-[3rem] p-3 bg-neutral-900 w-fit hover:opacity-80 duration-300"
            >
              <i className="fa-brands fa-steam text-xl"></i>
            </a>
            <div className="space-y-10">
              <p className="text-lg">
                Amennyiben esetleg támogatnád az oldal működését skinekkel, a
                fenti ikonra kattintva tudod megtenni.
              </p>
              <p className="leading-relaxed">
                A támogatásból beérkező skineket teljes mértékben ki fogjuk
                sorsolni a discord szerveren, hiszen ebből nem szeretnénk
                nyerészkedni. Támogatni leginkább minket azzal tudsz ha skineket
                adsz el vagy vásárolsz esetleg tradelsz velünk, illetve ha
                ajánlasz a barátaidnak.
              </p>
            </div>
          </div>
          <ul className="flex justify-center flex-wrap gap-10 font-bold text-lg">
            <FooterItem
              text="21521 Transactions"
              icon={
                <Fragment>
                  <i className="fa-solid fa-bag-shopping"></i>
                </Fragment>
              }
            />

            <FooterItem
              text="Total Sold: 398 326"
              icon={
                <Fragment>
                  <i className="fa-solid fa-money-check-dollar"></i>
                </Fragment>
              }
            />

            <FooterItem
              text="2000+ Happy Customers"
              icon={
                <Fragment>
                  <i className="fa-solid fa-face-smile-beam"></i>
                </Fragment>
              }
            />

            <FooterItem
              text="1200+ Feedbacks"
              icon={
                <Fragment>
                  <i className="fa-solid fa-comment"></i>
                </Fragment>
              }
            />
          </ul>
        </Container>
      </footer>
      <ScrollArrow />
    </>
  );
}
