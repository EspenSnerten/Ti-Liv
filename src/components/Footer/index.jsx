import "./footer.css";

export default function Footer() {
  const TiLivHvit = "/Ti-Liv-Hvit.png";
  const FacebookIcon = "/facebook-icon.png";
  const InstagramIcon = "/instagram-icon.png";
  const MailIcon = "/mail-icon.png";
  const TiLivIcon = "/Ti-Liv-Rund.png";

  return (
    <>
      <footer>
        <div className="flex flex-col justify-center w-full footercontainer">
          <div className="flex flex-row w-full mx-auto sm:flex-col">
            <div className="mx-auto mb-4 mt-9 sm:mt-6">
              <img
                src={TiLivHvit}
                alt="Ti Liv Logo"
                className="h-[45px] w-[114px]"
              />
            </div>
            <div className="flex mx-auto mb-5 mt-9 sm:mt-0 sm:mb-5">
              <nav>
                <ul className="flex flex-col gap-0 sm:gap-4 sm:flex-row">
                  <li className="text-white text-[12px] tracking-widest font-medium py-1 sm:py-0">
                    Brukervilkår
                  </li>
                  <li className="text-white text-[12px] tracking-widest font-medium py-1 sm:py-0">
                    Om oss
                  </li>
                  <li className="text-white text-[12px] tracking-widest font-medium py-1 sm:py-0">
                    Kontakt
                  </li>
                  <li className="text-white text-[12px] tracking-widest font-medium py-1 sm:py-0">
                    Bli fosterhjem
                  </li>
                  <li className="text-white text-[12px] tracking-widest font-medium py-1 sm:py-0">
                    Bidra
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex flex-row gap-8 mx-auto mb-5">
            <img src={FacebookIcon} alt="" className="h-[25px] w-[25px]" />
            <img src={InstagramIcon} alt="" className="h-[25px] w-[25px]" />
            <img src={MailIcon} alt="" className="h-[25px] w-[25px]" />
          </div>
          <div className="w-[90%]  h-[1px] my-auto mx-auto mb-4  dividerbox max-w-[2300px]"></div>
          <div className="flex flex-col gap-2 mx-auto mb-4 sm:flex-row">
            <div className="flex gap-2">
              <img
                src={TiLivIcon}
                alt=""
                className="h-[14px] w-[14px] my-auto"
              />
              <p className="text-[10px] tracking-widest text-white font-light">
                Ti liv - Foreningen for hjemløse katter
              </p>
            </div>
            <div className="flex mx-auto">
              <p className="text-[10px] tracking-widest text-white font-light">Org.nr. 932 265 583</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
