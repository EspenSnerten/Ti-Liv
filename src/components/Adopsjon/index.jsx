export default function Adopsjon() {
  const DividerIcon = "/Divider-icon.png";
  const AdopsjonMedia = "/Ti-Liv-adopsjon-media.jpg";

  return (
    <>
      <>
        <section className="flex flex-col w-full min-h-screen">
          <div className="flex justify-center w-full gap-4 h-[195px] dividercontainer">
            <img
              src={DividerIcon}
              alt=""
              className="w-[52px] h-[52px] my-auto"
            />
            <h1 className="my-auto text-white text-[30px] tracking-widest">
              Gi de et hjem
            </h1>
          </div>
          <div className="relative flex flex-col w-full lg:flex-row">
            <div className="w-[50%] lg:flex hidden relative">
              <img src={AdopsjonMedia} alt="" className="object-cover w-full h-[100%]"/>
            </div>
            <div className="contentcontainer w-full lg:w-[50%] ">
              <div className="flex flex-col my-auto ml-0 px-2 lg:ml-12 mt-[10%] ">
              <h1 className="lg:text-[48px] text-[35px] mb-9 lg:mx-0 mx-auto">adopter en katt fra Ti Liv</h1>
              <p className="max-w-[475px] tracking-wide lg:mx-0 mx-auto font-medium mb-9">
                Å bringe en ny katt inn i hjemmet er en berikende opplevelse, og
                hos oss hjelper du ikke bare én, men to katter. Vi jobber aktivt
                med å koble kjæledyr med kjærlige eiere. Vår prosess er enkel,
                rask og skreddersydd for å sikre den beste matchen for både deg
                og katten.
              </p>
              <ul className="flex flex-col gap-9 max-w-[437px] mb-9 lg:mx-0 mx-auto">
                <li className="font-light tracking-wide list-none">
                  <span className="font-medium">Dobbelt hjelp:</span> Ved å
                  adoptere en katt fra oss, støtter du ikke bare den katten som
                  finner et hjem hos deg, men også en annen trengende katt som
                  vi kan hjelpe.
                </li>
                <li className="font-light tracking-wide list-none">
                  <span className="font-medium">Rask respons:</span> Vi
                  kontakter deg snarlig for å avtale en adopsjonssamtale.
                </li>
                <li className="font-light tracking-wide list-none">
                  <span className="font-medium">Tilpasset matching:</span> Vi
                  søker å finne en katt som passer best for din livssituasjon og
                  hjem.
                </li>
                <li className="font-light tracking-wide list-none">
                  <span className="font-medium">Variert utvalg:</span> Selv om
                  vi kanskje ikke alltid har en katt som matcher dine ønsker,
                  samarbeider vi tett med organisasjonene
                  <span className="font-medium">Katter i Nød</span> og{" "}
                  <span className="font-medium">
                    Hjerte for Hjemløse katter
                  </span>{" "}
                  for å finne din drømmekatt.
                </li>
                <li className="font-light tracking-wide list-none">
                  <span className="font-medium">Adopsjonsgebyr:</span> For å
                  dekke våre utgifter, krever vi et adopsjonsgebyr på kr{" "}
                  <span className="font-medium">3000,-</span>.
                </li>
                <li className="font-light tracking-wide list-none">
                  <span className="font-medium">Inkluderte tjenester:</span>{" "}
                  Alle våre katter er chippet, vaksinert, og kastrert ved
                  overtagelse, med mindre annet er opplyst.
                </li>
              </ul>
              <div className="flex flex-row gap-6 mx-auto mb-7 lg:mx-0">
                <p className="px-4 py-2 text-center text-white rounded-sm dividercontainer">Søk her</p>
                <p className="px-4 py-2 text-center text-white rounded-sm dividercontainer">Våre katter</p>
              </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
