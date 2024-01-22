import { useState } from "react";
import "./header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const TiLivSvart = "/Ti-Liv-Svart.png";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="max-w-[2100px] w-[90%] mx-auto pt-4 md:pt-16">
        <div className="">
          <div className="flex justify-center w-full mx-auto">
            <div className="flex justify-start w-[100%] md:w-[50%]">
              <img src={TiLivSvart} alt="" className="h-[70px] w-[180px]" />
            </div>

            <div className="flex-row justify-end hidden w-full my-auto gap-9 md:flex navcontainer">
              <li className="text-base text-black list-none ">Adopsjon</li>
              <li className="text-base text-black list-none">Meld inn katt</li>
              <li className="text-base text-black list-none">Bidra</li>
              <div className="dropdown dropdown-hover ">
                <div tabIndex={0} role="button" className="text-black navcontainer">
                  Om oss
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-0 pt-2"
                >
                  <li className="py-1 text-base text-black list-none">Kontakt</li>
                  <li className="py-1 text-base text-black list-none">Om Ti Liv</li>
                  <li className="py-1 text-base text-black list-none">Vedtekter</li>
                  <li className="py-1 text-base text-black list-none">Dokumenter</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end w-full md:hidden">
              <button
                className="flex my-auto text-black"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`absolute z-10 w-full py-5 text-center bg-black md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Adopsjon
        </p>
        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Meld inn katt
        </p>

        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Bidra
        </p>
        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Ti Liv
        </p>
        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Kontakt
        </p>
        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Vedtekter
        </p>
        <p
          className="block p-2 my-2 text-lg text-gray-300 hover:text-blue-500"
          onClick={toggleMobileMenu}
        >
          Dokumenter
        </p>
      </div>
    </>
  );
}
