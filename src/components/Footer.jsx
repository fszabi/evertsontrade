import FooterItem from "./FooterItem";
import FooterLinks from "./FooterLinks";
import ScrollArrow from "./ScrollArrow";
import { Fragment } from "react";

export default function Footer() {
  return (
    <>
      <footer className="py-20 max-sm:py-10">
        <div className="container-wide space-y-12">
          <div className="mx-auto text-center space-y-12 max-w-3xl">
            <a
              target="_blank"
              aria-label="Evertson trade link megnyitása"
              href="https://steamcommunity.com/tradeoffer/new/?partner=1061101075&token=SLQ6lxob"
              className="mx-auto flex justify-center items-center rounded-full aspect-square h-[5rem] bg-neutral-800"
            >
              <img
                className="w-12 h-12 hover:opacity-50 hover:scale-105 transition-all duration-300"
                src="assets/svg/steam.svg"
                alt="steam svg"
              />
            </a>

            <p className="text-lg max-sm:text-base">
              Amennyiben esetleg támogatnád az oldal működését skinekkel, a
              fenti ikonra kattintva tudod megtenni.
            </p>
            <p className="leading-relaxed max-sm:text-sm">
              A támogatásból beérkező skineket teljes mértékben ki fogjuk
              sorsolni a discord szerveren, hiszen ebből nem szeretnénk
              nyerészkedni. Támogatni leginkább minket azzal tudsz ha skineket
              adsz el vagy vásárolsz esetleg tradelsz velünk, illetve ha
              ajánlasz a barátaidnak.
            </p>
          </div>
          <ul className="flex justify-center flex-wrap gap-10 font-medium text-lg max-sm:text-base">
            <FooterItem
              text="21521 Transactions"
              icon={
                <Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Fragment>
              }
            />

            <FooterItem
              text="Total Sold: 398 326"
              icon={
                <Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                  </svg>
                </Fragment>
              }
            />

            <FooterItem
              text="2000+ Happy Customers"
              icon={
                <Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Fragment>
              }
            />

            <FooterItem
              text="1200+ Feedbacks"
              icon={
                <Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Fragment>
              }
            />
          </ul>
          <FooterLinks />
        </div>
      </footer>
      <ScrollArrow />
    </>
  );
}
