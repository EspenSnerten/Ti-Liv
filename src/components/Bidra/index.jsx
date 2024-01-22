import "./bidra.css";

export default function Bidra() {
  const DividerIcon = "/Divider-icon.png";
  const VippsIcon = "/Vipps-icon.png";
  const VippsQrIcon = "/Vipps-qr-icon.png";
  const GrasrotIcon = "/Grasrotandelen-icon.png";

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
              Hvordan du kan bidra
            </h1>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col justify-center w-full px-2 pt-16 pb-6 bidracontainer">
              <div className="flex flex-col gap-6 mx-auto xl:flex-row">
                <div className="flex flex-col max-w-[665px] w-full bidrabox rounded-sm p-9">
                  <h2 className="text-[30px]">Støtt oss</h2>
                  <p className="mt-4 tracking-wide">
                    Alle våre inntekter går til dekning av kostnader knyttet til
                    kattene vi hjelper. Dersom du ønsker å hjelpe oss, er det
                    flere måter du kan gjøre dette på.
                  </p>
                </div>

                <div className="flex flex-col max-w-[665px] w-full bidrabox rounded-sm p-9">
                  <h2 className="text-[30px]">Bli medlem</h2>
                  <p className="mt-4 tracking-wide">
                    Å være medlem i Ti Liv betyr at du er med på å gi oss en
                    fast og påregnelig inntekt til drift av foreningen.
                  </p>
                  <p className="px-2 py-2 w-[127px] text-center text-white buttonbox rounded-sm mt-4 tracking-wide">
                    Les mer her
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center w-full mx-auto mt-6 md:flex-row gap-7">
                <div className="flex flex-col mx-auto md:mx-0 xl:flex-row gap-7">
                  <div className="md:max-w-[317px] w-full bidrabox rounded-sm px-4 py-9">
                    <h2 className="text-[20px]">Kontonummer</h2>
                    <p className="tracking-wide mt-9">
                      Dersom du ønsker å gi oss en gave, kan det gjøres til vårt
                      kontonummer:{" "}
                      <span className="font-semibold">1506.99.21709</span>
                    </p>
                  </div>

                  <div className="md:max-w-[317px] w-full bidrabox rounded-sm px-4 py-9">
                    <img src={VippsIcon} alt="" className="w-[84px] h-[21px]" />
                    <div className="flex">
                      <p className="tracking-wide mt-9">
                        Dersom du ønsker å Vippse oss, kan det gjøres til{" "}
                        <span className="font-semibold">850292</span>
                      </p>
                      <img
                        src={VippsQrIcon}
                        alt=""
                        className="w-[100px] h-[100px] mt-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mx-auto md:mx-0 xl:flex-row gap-7">
                  <div className="md:max-w-[317px] w-full bidrabox rounded-sm px-4 py-9">
                    <img
                      src={GrasrotIcon}
                      alt=""
                      className="w-[198px] h-[35px]"
                    />
                    <p className="mt-4 font-semibold tracking-wide">
                      Sett oss som din grasrotmottaker
                    </p>
                    <p className="mt-4 tracking-wide">
                      Eller send SMS “{" "}
                      <span className="font-semibold">
                        Grasrotandelen 932265583
                      </span>
                      ” til 60000 (gratis)
                    </p>
                  </div>

                  <div className="md:max-w-[317px] w-full bidrabox rounded-sm px-4 py-9">
                    <h2 className="text-[20px]">Donasjon/gave</h2>
                    <p className="tracking-wide mt-9">
                      Om du ønsker å bidra med utstyr, fôr eller annet, ta
                      kontakt med oss på{" "}
                      <span className="font-semibold">Mail</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full min-h-screen bidrabground">
              <div className="max-w-[1358px] w-full my-16 px-2">
                <div className="flex flex-col rounded-sm bidrabox max-w-[517px] p-16 mx-auto xl:mx-0">
                  <h2 className="text-[30px] mb-12 tracking-widest ">
                    Bli fosterhjem
                  </h2>
                  <p className=" max-w-[370px] mb-6 tracking-wider text-[14px] leading-relaxed">
                    Vil du være fosterhjem for Ti liv? Vi vil gjerne ha deg med
                    på laget!
                  </p>
                  <p className=" max-w-[360px] mb-6 tracking-wider text-[14px] leading-relaxed">
                    Som fosterhjem hos oss får du tildelt nødvendig utstyr, tett
                    oppfølging og veiledning av en koordinator og et nettverk av
                    kunnskap og engasjerte fosterhjem. Sammen skal vi gi kattene
                    et bedre liv.
                  </p>
                  <p className=" max-w-[345px] mb-6 tracking-wider text-[14px] leading-relaxed">
                    Søk om å bli fosterhjem ved å fylle ut spørreskjemaet i
                    linken under.
                  </p>
                  <p className=" max-w-[370px] mb-6 tracking-wider text-[14px] leading-relaxed font-semibold">
                    Nyttig info
                  </p>
                  <p className=" w-[100px] py-2 px-4 dividercontainer text-white tracking-wider text-[14px] leading-relaxed text-center rounded-sm">
                    Søk her
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
