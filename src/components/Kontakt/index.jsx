import "./kontakt.css";

export default function Kontakt() {
  const DividerIcon = "/Divider-icon.png";
  const DividerDotIcon = "/Divider-dot-icon.png";
  const PhoneIcon = "/phone-icon.png";
  const MailIcon = "/mail-icon.png";
  const TiLivIcon = "/Ti-Liv-Rund.png";

  return (
    <>
      <>
        <section className="flex flex-col w-full">
          <div className="flex justify-center w-full gap-4 h-[195px] dividercontainer">
            <img
              src={DividerIcon}
              alt=""
              className="w-[52px] h-[52px] my-auto"
            />
            <h1 className="my-auto text-white text-[30px] tracking-widest">
              kontakt oss
            </h1>
          </div>

          <div className="flex w-full min-h-screen kontaktcontainer">
            <div className="flex-col lg:flex-row w-full md:w-[50%] flex  lg:min-w-[860px] mx-auto my-auto justify-center">
              <div className="flex flex-col py-20 px-7 dividercontainer ">
                <div className="relative flex flex-col mb-12">
                  <h3 className="text-white text-[24px] font-light tracking-wider">
                    Vi vil
                  </h3>
                  <h3 className="text-white text-[24px] tracking-wider font-light">
                    Gjerne høre fra <span className="font-semibold">Deg</span>
                  </h3>
                  <img src={DividerDotIcon} alt="" className="w-[10px] h-[10x] absolute top-[58px] left-[260px]" />
                </div>
                <div className="flex flex-row gap-2 mb-4">
                  <img
                    src={MailIcon}
                    alt=""
                    className="w-[15px] h-[15px] my-auto"
                  />
                  <p className="font-semibold text-white text-[12px] tracking-wider">
                    kontakt@tiliv.no
                  </p>
                </div>
                <p className=" text-neutral-500 text-[12px] tracking-wider max-w-[375px] mb-4">
                  Du kan kontakte oss ved å bruke det vedlagte skjemaet eller
                  sende oss e-post.
                </p>
                <p className=" text-neutral-500 text-[12px] tracking-wider mb-9">
                  Foreningens styre kan kontaktes på{" "}
                  <span className="font-semibold text-white text-[12px]">
                    styret@tiliv.no
                  </span>
                </p>
                <div className="flex flex-row gap-2 mb-2">
                  <img
                    src={PhoneIcon}
                    alt=""
                    className="w-[15px] h-[15px] my-auto"
                  />
                  <p className="font-semibold text-white text-[12px] tracking-wider">
                    923 74 780
                  </p>
                </div>
                <p className="text-neutral-500 text-[12px] tracking-wider">
                  For henvendelser på telefon send helst{" "}
                  <span className="font-semibold text-white text-[12px]">
                    SMS.
                  </span>
                </p>
                <p className="text-neutral-500 text-[12px] tracking-wider mb-9">
                  Ved akutte situasjoner ring oss.
                </p>
                <div className="flex flex-row gap-2">
                  <img src={TiLivIcon} alt="" className="w-[23px] h-[23px] my-auto" />
                  <p className="text-neutral-500 text-[10px] tracking-wider">
                    Org.nr. 932 265 583
                  </p>
                </div>
              </div>
              <form action="" className="flex flex-col w-full lg:w-[50%] py-20 kontaktform px-7">
                <input type="text" placeholder="Fornavn" className="max-w-[354px] pb-1 kontaktinput text-[12px] bg-transparent mb-12 focus:border-transparent focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" />
                <input type="text" placeholder="Etternavn" className="max-w-[354px] pb-1 kontaktinput text-[12px] bg-transparent mb-12 focus:border-transparent focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" />
                <input type="text" placeholder="Email" className="max-w-[354px] pb-1 kontaktinput text-[12px] bg-transparent mb-12 focus:border-transparent focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" />
                <input type="text" placeholder="Telefon" className="max-w-[354px] pb-1 kontaktinput text-[12px] bg-transparent mb-12 focus:border-transparent focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40" />
                <textarea type="text" placeholder="Melding til oss" rows="2" className="max-w-[354px] pb-1 kontaktinput bg-transparent mb-12 focus:border-transparent focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-40 text-[12px]" />
                <p className="w-fit mx-auto px-9 py-2 text-white bg-transparent border-[1px] text-center text-[12px]">Send</p>
              </form>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
