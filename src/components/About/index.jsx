export default function About() {
  const DividerIcon = "/Divider-icon.png";
  const TiLivSvart = "/Ti-Liv-Svart.png";
  const AboutMedia = "/Ti-Liv-about-media.jpg";

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
              Hvem er ti liv
            </h1>
          </div>
          <div className="flex h-[full]">
            <div className="w-[50%] hidden lg:flex">
              <img
                src={AboutMedia}
                alt=""
                className="object-cover w-full h-[100%]"
              />
            </div>
            <div className="flex flex-col contentcontainer w-[100%] lg:w-[50%]">
              <div className="flex flex-col justify-center mx-3 lg:ml-16 lg:mr-4 lg:justify-center">
                <img
                  src={TiLivSvart}
                  alt=""
                  className="lg:h-[136px] lg:w-[357px] h-[104px] w-[266px] mt-[20%] mx-auto lg:mx-0 "
                />
                <h3 className="mx-auto mt-16 font-semibold tracking-wide text-black lg:mx-0 lg:ml-7 max-w-[532px]">
                  Ti Liv - Foreningen for Hjemløse Katter{" "}
                </h3>
                <p className="tracking-wide text-black lg:mx-0 lg:ml-7 mx-auto max-w-[532px] mb-6">
                  er en veldedighetsorganisasjon som ble startet i 2023 av et
                  dedikert team på 13 erfarne frivillige med over 16 års
                  erfaring innen veldedighet og frivillig arbeid for dyrevern,
                  vi har satt oss som mål å være en hjelpende hånd for hjemløse
                  katter som har havnet i nød. Vår lidenskap for å støtte de
                  svakeste skapningene, de som er blitt dumpet, forlatt eller
                  født under krevende forhold, driver oss til å gå langt for å
                  gi dem omsorg og en ny sjanse.
                </p>
                <p className="tracking-wide text-black lg:mx-0 lg:ml-7 mx-auto max-w-[532px] mb-6">
                  Ti Liv drives utelukkende på frivillig basis, med et sterkt
                  fundament av erfarne frivillige er vi stolte av å være en
                  organisasjon som er drevet av genuin kjærlighet og dedikasjon
                  for dyrevern.
                </p>
                <img
                  src={AboutMedia}
                  alt=""
                  className="block lg:hidden rounded-xl max-w-[532px] w-[95%] mx-auto my-4 "
                />
                <p className="tracking-wide text-black lg:mx-0 lg:ml-7 mx-auto max-w-[532px] mb-6">
                  Vi er avhengige av gaver, donasjoner og grasrotmidler for å
                  sikre at våre inntekter går direkte til de kattene som trenger
                  det mest. Hver krone vi mottar går utelukkende til
                  veterinærutgifter, medisiner og nødvendig utstyr som er
                  essensielt for å gi kattene en tryggere og sunnere tilværelse.
                </p>
                <p className="tracking-wide text-black lg:mx-0 lg:ml-7 mx-auto max-w-[532px] mb-6">
                  Med Ti Liv kan du være trygg på at du støtter en
                  veldedighetsorganisasjon med et erfaringsrikt og lidenskapelig
                  team, som arbeider kontinuerlig for å gi hjemløse katter en
                  varm og kjærlig plass å kalle sitt hjem. Takk for at du er en
                  del av vår reise ved å gjøre en positiv forskjell i livene til
                  disse fantastiske skapningene.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
