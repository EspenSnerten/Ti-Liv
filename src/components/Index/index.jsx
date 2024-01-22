export default function Index() {
  const FacebookIcon = "/facebook-icon-svart.png";
  const InstagramIcon = "/instagram-icon-svart.png";
  const MailIcon = "/mail-icon-svart.png";
  return (
    <>
      <>
        <section className="max-w-[2100px] w-[90%] mx-auto flex flex-col min-h-screen justify-center">
          <div className="flex flex-col mx-auto md:mx-0">
            <h1 className="text-black tracking-widest text-[50px]">
              Hjelp oss å
            </h1>
            <h2 className="text-black tracking-widest text-[45px]">
              Hjelpe dem
            </h2>
            <p className="text-black tracking-widest w-[285px] font-medium mt-9 text-[14px]">
              I Norge har vi dessverre mange hjemløse katter som må klare seg
              ute om vinteren og resten av året.
            </p>
            <p className="text-black tracking-widest w-[285px] font-medium mt-4 text-[14px]">
              De står overfor en rekke utfordringer, inkludert mangel på mat,
              skikkelig pleie, og beskyttelse mot farer som kaldt vær og
              trafikk.
            </p>
            <p className="mt-6 font-semibold tracking-widest text-black text-[18px]">
              Se hvordan du kan bidra
            </p>
          </div>
          <div className="flex flex-col-reverse w-full md:mt-96 mt-36 md:flex-row">
            <div className="flex justify-start gap-6 mx-auto mt-9 md:mx-0 md:mt-0">
              <img src={FacebookIcon} alt="" className="w-[30px] h-[30px] my-auto" />
              <img src={InstagramIcon} alt="" className="w-[30px] h-[30px] my-auto" />
              <img src={MailIcon} alt="" className="w-[30px] h-[30px] my-auto" />
            </div>
            <div className="flex justify-center w-full gap-12 mx-auto my-auto md:justify-end md:mx-0">
              <div>
                <p className="text-center text-black text-[35px] font-medium">750 000</p>
                <p className="font-medium text-center text-black">Katter i Norge</p>
              </div>
              <div>
                <p className="text-center text-black text-[35px] font-medium">50 000</p>
                <p className="font-medium text-center text-black">Hjemløse</p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
