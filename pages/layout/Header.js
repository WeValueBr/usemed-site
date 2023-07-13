import Image from "next/image";
import carefly from "../../assets/images/carefly.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header className={"header header-box-shadow-on-scroll header-abs-top header-bg-transparent header-show-hide "+(scrollPosition > 0 ? "scrolled  js-header-fix-moment" : "header-untransitioned")}>
      <div className="header-section">
        <div id="logoAndNav" className="container">
          <nav className="js-mega-menu navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html" aria-label="Front">

              <Image
                className="img-fluid image-shadow loading_src" alt="Cadastro do paciente" data-was-processed="true" style={{marginTop:0}}
                src={carefly.src}
                width={30}
                height={35}
              />
            </a>
            <button type="button" className="navbar-toggler btn btn-icon btn-sm rounded-circle">
              <span className="navbar-toggler-default">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z" />
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z" />
                </svg>
              </span>
            </button>
            <div id="navBar" className="collapse navbar-collapse">
              <div className="navbar-body header-abs-top-inner">
                <ul className="navbar-nav">
                  <li className="hs-has-mega-menu navbar-nav-item">
                    <a id="homeMegaMenu" className="hs-mega-menu-invoker nav-link " href="javascript:;"
                       aria-haspopup="true" aria-expanded="false">Início</a>
                  </li>
                  <li className="navbar-nav-last-item">
                    <a className="btn btn-sm btn-primary transition-3d-hover"
                       href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/"
                       target="_blank">
                      Entrar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
