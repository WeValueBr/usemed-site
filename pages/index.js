import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import macbook from "../assets/macbook.svg";
import grafico from "../assets/grafico.png";
import fichapaciente from "../assets/fichapaciente.png";
import cadastropaciente from "../assets/cadastropaciente.png";
import fonocom from "../assets/companies/fonocom-logomarca.png";
import simone from "../assets/companies/simone.png";
import multiser from "../assets/companies/multiser.png";
import voe from "../assets/companies/voe.png";
import benackids from "../assets/companies/benackids.png";
import log from "../assets/companies/log.png";
import pamelacordeiro from "../assets/companies/pamelacordeiro.png";
import reabilitakids from "../assets/companies/reabilitakids.png";
import beatrizviana from "../assets/companies/beatrizviana.png";
import img2 from "../assets/img/750x750/img1.jpg";

import anamnesemobile from "../assets/anamnesemobile.png";
import evolucao from "../assets/evolucao.png";
import carefly from "../assets/images/carefly.png";
import carefly2 from "../assets/images/carefly2.png";
import favicon from "../assets/images/favicon.ico";
import agencyMarketing from "../assets/images/illustration/agency-marketing.svg";
import collaboration from "../assets/images/pictures/office-kind-of-collaboration.jpg";
import menina from "../assets/meninalaptop.jpg";
import meninasmartphone from "../assets/meninasmartphone.jpg";
import Header from "./layout/Header";

function Footer() {
  return (
    <footer className="footer footer-global">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1001 189.75"
           className="footer-top-shape">
        <defs>
          <linearGradient id="footer-top-shape" y1="66.87" x2="478" y2="66.87" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#db1253"></stop>
            <stop offset="1" stopColor="#f02b34"></stop>
          </linearGradient>
        </defs>
        <path
          d="M529.46,59.08l4.61,50.79L58,153.08,52.21,89.27c25.68-32.39,68.52-75,127.16-81.49,29.56-3.24,52.32,3.91,62.89,7.08C293.15,30.1,378.33,47.91,529.46,59.08Z"
          transform="translate(0 0)" style={{ fill: "#4794fe", opacity: 0.1 }}></path>
        <a xlinkHref="#main" className="gotop">
          <path
            d="M478,82.75v51H0V69.68C28.5,39.75,75,1.13,134,0c29.74-.56,51.76,8.62,62,12.73C245.28,32.52,328.5,58,478,82.75Z"
            transform="translate(0 0)" style={{ fill: "#4794fe" }}></path>
        </a>
        <path d="M1001,44.75c-60.13-38.91-193.92-26.39-224-22C658.74,40,377.1,76.45,0,130.75v59H1001"
              transform="translate(0 0)" style={{ fill: "#222" }}></path>
        <a xlinkHref="#main" className="svg-uparrow-link gotop">
          <path
            d="M126,49a13,13,0,1,0,13,13A13,13,0,0,0,126,49Zm0,2a11,11,0,1,1-11,11A11,11,0,0,1,126,51Zm0,4-4,4h3V69h2V59h3Z"
            transform="translate(0 0)" className="svg-uparrow" style={{ fill: "#fff" }}></path>
        </a>
      </svg>
      <div className="footer-global-body bg-dark pb-5">
        <div className="footer-global-backsvg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 692.24 603.55"
               style={{ opacity: 0.05 }}>
            <defs>
              <linearGradient id="footer_backsvg01" x1="284.66" y1="728.48" x2="748.46" y2="417.52"
                              gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="gray"></stop>
                <stop offset="0.01" stopColor="gray" stopOpacity="0.99"></stop>
                <stop offset="0.15" stopColor="gray" stopOpacity="0.69"></stop>
                <stop offset="0.3" stopColor="gray" stopOpacity="0.44"></stop>
                <stop offset="0.46" stopColor="gray" stopOpacity="0.24"></stop>
                <stop offset="0.62" stopColor="gray" stopOpacity="0.11"></stop>
                <stop offset="0.79" stopColor="gray" stopOpacity="0.03"></stop>
                <stop offset="1" stopColor="gray" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path
              d="M438.5,303.5c-23.86,8.64-252.12,95.06-255,283-2.29,149.39,139.18,274.91,267,291,244,30.71,487.13-331,411-490C808.64,277.09,593.64,247.35,438.5,303.5Z"
              transform="translate(-183.47 -275.79)" style={{ fill: "url(#footer_backsvg01)" }}></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 692.24 603.55"
               style={{ opacity: 0.05 }}>
            <defs>
              <linearGradient id="footer_backsvg02" x1="284.66" y1="728.48" x2="748.46" y2="417.52"
                              gradientTransform="translate(1059.18 1155.13) rotate(180)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="gray"></stop>
                <stop offset="0.01" stopColor="gray" stopOpacity="0.99"></stop>
                <stop offset="0.15" stopColor="gray" stopOpacity="0.69"></stop>
                <stop offset="0.3" stopColor="gray" stopOpacity="0.44"></stop>
                <stop offset="0.46" stopColor="gray" stopOpacity="0.24"></stop>
                <stop offset="0.62" stopColor="gray" stopOpacity="0.11"></stop>
                <stop offset="0.79" stopColor="gray" stopOpacity="0.03"></stop>
                <stop offset="1" stopColor="gray" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path
              d="M620.68,851.63c23.86-8.64,252.12-95.07,255-283,2.29-149.4-139.18-274.91-267-291-244-30.72-487.13,331-411,490C250.54,878,465.54,907.78,620.68,851.63Z"
              transform="translate(-183.47 -275.79)" style={{ fill: "url(#footer_backsvg02)" }}></path>
          </svg>
        </div>
        <div className="container">
          <div className="row mb-5 pt-5">
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 mb-5 mb-lg-0">
              <div className="footer-col">
                <h3 className="font-sm footer-title">Links <span>Rápidos.</span></h3>
                <div className="footer-col-body">
                  <nav className="footer-nav">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#main">Início</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#features">
                          Funcionalidades
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#plan">Preços e planos</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 mb-5 mb-lg-0"></div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 mb-5 mb-lg-0"></div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5 mb-lg-0">
              <div className="footer-col">
                <h3 className="font-sm footer-title">Contate-<span>nos.</span></h3>
                <div className="footer-col-body">
                  <div className="footer-contact-widget mt-4">
                    <div className="footer-contact-item media mb-3">
                      <i className="icon-marker align-self-center mr-3"></i>
                      <div className="media-body">
                        Rua Aurélio de Figueiredo, 330 - sala 201 - Campo Grande, Rio de Janeiro - RJ, 23052-000
                      </div>
                    </div>
                    <div className="footer-contact-item media mb-3">
                      <i className="icon-phone align-self-center mr-3"></i>
                      <div className="media-body">
                        Comercial <br />
                        +55 21 97533-6733
                        <div className="d-block font-weight-bold">Seg - Sex 9h - 19h</div>
                      </div>
                    </div>
                    <div className="footer-contact-item media mb-3">
                      <i className="icon-phone align-self-center mr-3"></i>
                      <div className="media-body">
                        Suporte <br />
                        +55 21 99045-2839
                        <div className="d-block font-weight-bold">Seg - Sex 9h - 19h</div>
                      </div>
                    </div>
                    <div className="footer-contact-item media mb-3">
                      <i className="icon-new-post align-self-center mr-3"></i>
                      <div className="media-body">
                        suporte@wayfly.com.br
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 mb-5 mb-lg-0">
              <div className="footer-col">
                <h3 className="font-sm footer-title">Siga-<span>nos.</span></h3>
                <div className="footer-col-body">
                  <p>Siga-nos nas redes sociais.</p>
                  <div className="footer-social">
                    <ul className="list-inline social-list ">
                      <li className="list-inline-item"><a href="https://www.instagram.com/wayfly.com.br/"
                                                          rel="noreferrer" target="_blank"><i
                        className="icon-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 py-4 align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-logo">
                <Image
                  className="img-fluid loading_src"
                  src={carefly2.src}
                  alt="logo"
                  width={60}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className="row rules align-items-center">
            <div className="col-md-8 col-sm-7 col-12">
              <p>Otimizamos seu tempo para que você possa voar.</p>
            </div>

            <div className="footer-copyright my-2 col-12">
              <p>Copyright © 2022 Todos os direitos reservados por <strong> Wayfly.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Plan() {
  const [type, setType] = useState(false);

  return (
    <section className="section position-static section-hiro d-flex" id="plan">
      <div className="container">
        <div className="mx-md mx-auto">
          <div className="section-title-wrap text-center mb-4 mt-5">
            <div className="section-title-inner d-inline-flex">
              <h2 className="section-title" style={{ textTransform: "none" }}>Tecnologia a serviço da saúde, inclusive a
                sua.</h2>
            </div>
            <p style={{ textTransform: "none", fontSize: 17 }}>Soluções para administrar sua clínica ou consultório de
              forma prática e segura.</p>
          </div>
          <div className="d-block text-center mb-5">
            <label className="text-switch">
              <input type="checkbox" id="pricePlanToggle" onChange={() => setType(!type)} />
              <span className="switch-tracker"></span>
              <span className="text-switch-label off">Mensal</span>
              <span className="text-switch-label on">Anual</span>
            </label>
          </div>
          <div className="scrollbar-on-mobile">
            <div className="box rounded-lg shadow shadow-more price-table">
              <div className="price-table-item" data-plan="monthly">
                <i className="icon-paper-plane"></i>
                <h3 className="font-lg">Básico</h3>
                <ul className="price-table-detail font-regular font-weight-light mt-3 mb-4">
                  <li>Cadastro paciente</li>
                  <li>Cadastro do profissional com especialidades de atuação</li>
                  <li>Anamnese</li>
                  <li>Evolução</li>
                  <li>Orientação parental</li>
                  <li>Área para anexar exames e relatórios (5GB Grátis)*</li>
                  <li>Sinalização de motivo da falta com ou sem direito à reposição de atendimento</li>
                  <li>Plano terapêutico livre</li>
                  <li>Controle de perfil de usuários</li>
                  <li>Download e impressão da documentação sempre que necessário</li>
                </ul>
                <div className="price-bottom same-height" style={{ height: 112.797 }}>
                  {
                    type == false ?
                      <div className="price-table-price font-weight-bold font-lg" data-period="monthly">R$
                        40,00 <small>/mês</small> <br /></div>
                      :
                      <div className="price-table-price font-weight-bold font-lg" data-period="monthly">
                        R$ 420,00 <small>/ano</small>
                      </div>
                  }
                  <small>por profissional</small>
                  <div className="mt-3 text-center">
                    <a target="_blank" rel="noreferrer"
                       href="https://api.whatsapp.com/send?phone=5521975336733&amp;text=Olá, gostaria de informações sobre o plano básico."
                       className="btn btn-success btn-curved btn-overlay">Comece agora</a>
                  </div>
                </div>
              </div>
              <div className="price-table-item featured" data-plan="monthly">

                <i className="icon-aircraft"></i>
                <h3 className="font-lg">Plus</h3>
                <ul className="price-table-detail font-regular font-weight-light mt-3 mb-4">
                  <li style={{ fontWeight: "bold" }}><b>Tudo do plano Básico +</b></li>
                  <li>Contas a pagar</li>
                  <li>Contas a receber</li>
                  <li>Relatório de pagamento</li>
                  <li>Relatório de inadimplência</li>
                  <li>Relatório de adimplente</li>
                </ul>
                <div className="price-bottom same-height" style={{ height: 112.797 }}>
                  {
                    type == false ?
                      <div className="price-table-price font-weight-bold font-lg" data-period="monthly">R$
                        50,00 <small>/mês</small> <br /></div>
                      :
                      <div className="price-table-price font-weight-bold font-lg" data-period="monthly">
                        R$ 540,00 <small>/ano</small>
                      </div>
                  }
                  <small>por profissional</small>
                  <div className="mt-3 text-center">
                    <a target="_blank" rel="noreferrer"
                       href="https://api.whatsapp.com/send?phone=5521975336733&amp;text=Olá, gostaria de informações sobre o plano plus."
                       className="btn btn-success btn-curved btn-overlay">Comece agora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-figure-wrap width-50vw  position-right-0 position-top-0 position-absolute pointer-events-none">
          <figure className="section-figure position-relative m-0 z-index--1 opacity-lg-10">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 855.89 729.21">
              <defs>
                <linearGradient id="a" x1="889.61" y1="171.15" x2="1190.46" y2="171.15"
                                gradientTransform="translate(-40.84 270.26) rotate(-15)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fbedc1" stopOpacity="0.3"></stop>
                  <stop offset="0.23" stopColor="##f3f9ff" stopOpacity="0.28"></stop>
                  <stop offset="0.46" stopColor="#fcf1cf" stopOpacity="0.23"></stop>
                  <stop offset="0.7" stopColor="#fdf6e0" stopOpacity="0.15"></stop>
                  <stop offset="0.93" stopColor="#fffdf7" stopOpacity="0.04"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                d="M965.71,50.85c-10.33,5.47-118.29,62.6-105.42,143.43,10.62,66.68,98.4,116.79,170.57,100.33,93.17-21.25,122.41-126.14,117.87-181.56-.6-7.37-9.42-50.45-44.69-74.07C1052.89,4.72,986.63,39.79,965.71,50.85Z"
                transform="translate(-561.11 -1)" style={{ fill: "#f3f9ff" }}></path>
              <g style={{ opacity: 0.4 }}>
                <line x1="124.46" y1="167.19" x2="40.09" y2="192"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
                <line x1="150.12" y1="183.1" x2="27.62" y2="219.12"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
                <line x1="164.16" y1="200.08" x2="25.46" y2="240.87"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
                <line x1="176.66" y1="240.18" x2="37.6" y2="281.08"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
                <line x1="173.19" y1="220.1" x2="29.53" y2="262.35"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
                <line x1="174.33" y1="263.54" x2="52.69" y2="299.32"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
                <line x1="162.78" y1="288.83" x2="76.55" y2="314.19"
                      style={{ fill: "none", stroke: "#f3f9ff", strokeMiterlimit: 10, strokeWidth: 3 }}></line>
              </g>
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Main() {

  return (
    <section className="section position-static section-hiro d-flex overflow-hidden">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-xl-5 col-lg-6 col-md-6 col-12 hiro-text pl-md-5 pt-5 pt-md-0 text-md-left text-center">
            <h1 className="hiro-title font-uxl font-xxxl-onMobile font-weight-medium mb-4">WAYFLY</h1>
            <p className="font-weight-light font-md font-regular-onMobile"> Muito mais que um prontuário eletrônico! O
              Wayfly é um sistema de gestão que nasce para revolucionar a administração do seu consultório ou clínica
              tanto em aspectos administrativos quanto clínicos. Otimizamos seu tempo para que você possa voar!</p>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6 hiro-img d-none d-md-block">
            <div className="preview-cards skrollable skrollable-before" data--100-top="transform:scale(1);opacity:1"
                 data--300-top="transform:scale(0.95) ;opacity:0.3" style={{ transform: "scale(1)", opacity: 1 }}>
              <div className="card item-has-overlay" style={{ right: 30, top: 50 }}>
                <Image
                  className="card-img card-img-cover rounded-0 loading_src" alt="Image Description"
                  data-was-processed="true"
                  src={grafico.src}
                  width={500}
                  height={300}
                />
                <div className="card-img-overlay item-overlay item-overlay-orange">
                  <div className="item-overlay-content">
                    <a href="#" className="btn text-white"><i
                      className="icon-circled-arrow-pointing-up-and-left  font-xxl"></i></a>
                  </div>
                </div>
              </div>
              <div className="card item-has-overlay" style={{ right: 70, top: 150 }}>
                <Image
                  className="card-img card-img-cover rounded-0 loading_src" alt="Image Description"
                  data-was-processed="true"
                  src={cadastropaciente.src}
                  width={500}
                  height={300}
                />
                <div className="card-img-overlay item-overlay">
                  <div className="item-overlay-content">
                    <a href="#" className="btn text-white"><i
                      className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                  </div>
                </div>
              </div>

              <div className="card item-has-overlay" style={{ right: 300, top: 84 }}>
                <Image
                  className="card-img card-img-cover rounded-0 loading_src" alt="Image Description"
                  data-was-processed="true"
                  src={fichapaciente.src}
                  width={500}
                  height={300}
                />
                <div className="card-img-overlay item-overlay item-overlay-danger">
                  <div className="item-overlay-content">
                    <a href="#" className="btn text-white"><i
                      className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                  </div>
                </div>
              </div>
              <div className="card item-has-overlay" style={{ right: 300, top: 225 }}>
                <Image
                  className="card-img card-img-cover rounded-0 loading_src" alt="Image Description"
                  data-was-processed="true"
                  src={evolucao.src}
                  width={500}
                  height={300}
                />
                <div className="card-img-overlay item-overlay item-overlay-info">
                  <div className="item-overlay-content">
                    <a href="#" className="btn text-white"><i
                      className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function View() {

  return (
    <section className="section section-middle-padding  bg-light-primary overflow-hidden section-angled-border"
             id="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 126" className="section-top-angled-border">
        <polygon points="0 0 1920 0 1920 67 0 126 0 0" style={{ fill: "#fff" }}></polygon>
      </svg>
      <div className="container">
        <div className="section-body">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 my-lg-0 my-5">
              <div
                className="section-title-wrap text-left section-title-wrap--left section-title-wrap-md-center mb-5 mb-lg-0">
                <div className="section-title-inner d-inline-block">
                  <h2 className="section-title">Wayfly <span className="d-block font-weight-light"
                                                             style={{ textTransform: "none" }}>é pra mim?</span></h2>
                </div>
                <p style={{ textTransform: "none" }}>Se você é profissional da saúde atuando com agendamento,
                  preenchimento de prontuário e administração de consultórios e clínicas, esse sistema é para você! O
                  Wayfly vem sendo desenvolvido por uma equipe de terapeutas e programadores para proporcionar a melhor
                  experiência para esse público de profissionais da saúde que se preocupam com organização e seriedade
                  sem deixar a segurança, praticidade e sustentabilidade de lado!</p>
                <div className="row mt-3">
                  <div className="col-md-4 col-sm-4 mb-3">
                    <div className="simple-icon-text">
                      <h3 className="simple-icon-text-title font-md mb-1"><i
                        className="icon-business font-xxl"></i> 10115</h3>
                      <p className="font-regular font-weight-light">Atendimentos finalizados</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-4">
                    <div className="simple-icon-text">
                      <h3 className="simple-icon-text-title font-md mb-1"><i className="icon-happy font-xxl"></i> 1163
                      </h3>
                      <p className="font-regular font-weight-light">Pacientes cadastrados</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-4">
                    <div className="simple-icon-text">
                      <h3 className="simple-icon-text-title font-md mb-1"><i className="icon-happy font-xxl"></i> 168
                      </h3>
                      <p className="font-regular font-weight-light">Terapeutas cadastrados</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-8 col-md-12 pt-lg-0 pt-5">
              <div className="images-parallax-mixed">

                <div className="section-title--back dotted--back inverse">
                  <svg id="Layer_01" data-name="Layer 01" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 348.5 436">
                    <defs>
                      <linearGradient id="linear-gradient" x1="9.5" y1="73.5" x2="348.5" y2="73.5"
                                      gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#4f4f4f"></stop>
                        <stop offset="0.64" stopColor="#4f4f4f" stopOpacity="0.32"></stop>
                        <stop offset="1" stopColor="#4f4f4f" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="linear-gradient-5" y1="93.5" y2="93.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-9" y1="113.5" y2="113.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-13" y1="133.5" y2="133.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-17" y1="173.5" y2="173.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-21" y1="153.5" y2="153.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-25" y1="193.5" y2="193.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-29" y1="253.5" y2="253.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-33" y1="313.5" y2="313.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-37" y1="273.5" y2="273.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-41" y1="213.5" y2="213.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-45" y1="333.5" y2="333.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-49" y1="353.5" y2="353.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-53" y1="373.5" y2="373.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-57" y1="393.5" y2="393.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-61" y1="413.5" y2="413.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-65" y1="232.5" y2="232.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-69" y1="293.5" y2="293.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                      <linearGradient id="linear-gradient-73" y1="53.5" y2="53.5"
                                      xlinkHref="#linear-gradient"></linearGradient>
                    </defs>
                    <circle className="dotted01-1" cx="52" cy="6" r="6"></circle>
                    <circle className="dotted01-2" cx="139" cy="430" r="6"></circle>
                    <circle className="dotted01-3" cx="10" cy="51" r="10"></circle>
                    <g id="Layer_2" data-name="Layer 2" style={{ opacity: 0.5 }}>
                      <polyline className="dotted01-4" points="10 73.5 9.5 73.5 10 73.5"></polyline>
                      <line className="dotted01-5" x1="25.13" y1="73.5" x2="340.43" y2="73.5"></line>
                      <polyline className="dotted01-4" points="348 73.5 348.5 73.5 348 73.5"></polyline>
                      <line className="dotted01-5" x1="332.87" y1="73.5" x2="17.57" y2="73.5"></line>
                      <polyline className="dotted01-6" points="10 93.5 9.5 93.5 10 93.5"></polyline>
                      <line className="dotted01-7" x1="25.13" y1="93.5" x2="340.43" y2="93.5"></line>
                      <polyline className="dotted01-6" points="348 93.5 348.5 93.5 348 93.5"></polyline>
                      <line className="dotted01-7" x1="332.87" y1="93.5" x2="17.57" y2="93.5"></line>
                      <polyline className="dotted01-8" points="10 113.5 9.5 113.5 10 113.5"></polyline>
                      <line className="dotted01-9" x1="25.13" y1="113.5" x2="340.43" y2="113.5"></line>
                      <polyline className="dotted01-8" points="348 113.5 348.5 113.5 348 113.5"></polyline>
                      <line className="dotted01-9" x1="332.87" y1="113.5" x2="17.57" y2="113.5"></line>
                      <polyline className="dotted01-10" points="10 133.5 9.5 133.5 10 133.5"></polyline>
                      <line className="dotted01-11" x1="25.13" y1="133.5" x2="340.43" y2="133.5"></line>
                      <polyline className="dotted01-10" points="348 133.5 348.5 133.5 348 133.5"></polyline>
                      <line className="dotted01-11" x1="332.87" y1="133.5" x2="17.57" y2="133.5"></line>
                      <polyline className="dotted01-12" points="10 173.5 9.5 173.5 10 173.5"></polyline>
                      <line className="dotted01-13" x1="25.13" y1="173.5" x2="340.43" y2="173.5"></line>
                      <polyline className="dotted01-12" points="348 173.5 348.5 173.5 348 173.5"></polyline>
                      <line className="dotted01-13" x1="332.87" y1="173.5" x2="17.57" y2="173.5"></line>
                      <polyline className="dotted01-14" points="10 153.5 9.5 153.5 10 153.5"></polyline>
                      <line className="dotted01-15" x1="25.13" y1="153.5" x2="340.43" y2="153.5"></line>
                      <polyline className="dotted01-14" points="348 153.5 348.5 153.5 348 153.5"></polyline>
                      <line className="dotted01-15" x1="332.87" y1="153.5" x2="17.57" y2="153.5"></line>
                      <polyline className="dotted01-16" points="10 193.5 9.5 193.5 10 193.5"></polyline>
                      <line className="dotted01-17" x1="25.13" y1="193.5" x2="340.43" y2="193.5"></line>
                      <polyline className="dotted01-16" points="348 193.5 348.5 193.5 348 193.5"></polyline>
                      <line className="dotted01-17" x1="332.87" y1="193.5" x2="17.57" y2="193.5"></line>
                      <polyline className="dotted01-18" points="10 253.5 9.5 253.5 10 253.5"></polyline>
                      <line className="dotted01-19" x1="25.13" y1="253.5" x2="340.43" y2="253.5"></line>
                      <polyline className="dotted01-18" points="348 253.5 348.5 253.5 348 253.5"></polyline>
                      <line className="dotted01-19" x1="332.87" y1="253.5" x2="17.57" y2="253.5"></line>
                      <polyline className="dotted01-20" points="10 313.5 9.5 313.5 10 313.5"></polyline>
                      <line className="dotted01-21" x1="25.13" y1="313.5" x2="340.43" y2="313.5"></line>
                      <polyline className="dotted01-20" points="348 313.5 348.5 313.5 348 313.5"></polyline>
                      <line className="dotted01-21" x1="332.87" y1="313.5" x2="17.57" y2="313.5"></line>
                      <polyline className="dotted01-22" points="10 273.5 9.5 273.5 10 273.5"></polyline>
                      <line className="dotted01-23" x1="25.13" y1="273.5" x2="340.43" y2="273.5"></line>
                      <polyline className="dotted01-22" points="348 273.5 348.5 273.5 348 273.5"></polyline>
                      <line className="dotted01-23" x1="332.87" y1="273.5" x2="17.57" y2="273.5"></line>
                      <polyline className="dotted01-24" points="10 213.5 9.5 213.5 10 213.5"></polyline>
                      <line className="dotted01-25" x1="25.13" y1="213.5" x2="340.43" y2="213.5"></line>
                      <polyline className="dotted01-24" points="348 213.5 348.5 213.5 348 213.5"></polyline>
                      <line className="dotted01-25" x1="332.87" y1="213.5" x2="17.57" y2="213.5"></line>
                      <polyline className="dotted01-26" points="10 333.5 9.5 333.5 10 333.5"></polyline>
                      <line className="dotted01-27" x1="25.13" y1="333.5" x2="340.43" y2="333.5"></line>
                      <polyline className="dotted01-26" points="348 333.5 348.5 333.5 348 333.5"></polyline>
                      <line className="dotted01-27" x1="332.87" y1="333.5" x2="17.57" y2="333.5"></line>
                      <polyline className="dotted01-28" points="10 353.5 9.5 353.5 10 353.5"></polyline>
                      <line className="dotted01-29" x1="25.13" y1="353.5" x2="340.43" y2="353.5"></line>
                      <polyline className="dotted01-28" points="348 353.5 348.5 353.5 348 353.5"></polyline>
                      <line className="dotted01-29" x1="332.87" y1="353.5" x2="17.57" y2="353.5"></line>
                      <polyline className="dotted01-30" points="10 373.5 9.5 373.5 10 373.5"></polyline>
                      <line className="dotted01-31" x1="25.13" y1="373.5" x2="340.43" y2="373.5"></line>
                      <polyline className="dotted01-30" points="348 373.5 348.5 373.5 348 373.5"></polyline>
                      <line className="dotted01-31" x1="332.87" y1="373.5" x2="17.57" y2="373.5"></line>
                      <polyline className="dotted01-32" points="10 393.5 9.5 393.5 10 393.5"></polyline>
                      <line className="dotted01-33" x1="25.13" y1="393.5" x2="340.43" y2="393.5"></line>
                      <polyline className="dotted01-32" points="348 393.5 348.5 393.5 348 393.5"></polyline>
                      <line className="dotted01-33" x1="332.87" y1="393.5" x2="17.57" y2="393.5"></line>
                      <polyline className="dotted01-34" points="10 413.5 9.5 413.5 10 413.5"></polyline>
                      <line className="dotted01-35" x1="25.13" y1="413.5" x2="340.43" y2="413.5"></line>
                      <polyline className="dotted01-34" points="348 413.5 348.5 413.5 348 413.5"></polyline>
                      <line className="dotted01-35" x1="332.87" y1="413.5" x2="17.57" y2="413.5"></line>
                      <polyline className="dotted01-36" points="10 232.5 9.5 232.5 10 232.5"></polyline>
                      <line className="dotted01-37" x1="25.13" y1="232.5" x2="340.43" y2="232.5"></line>
                      <polyline className="dotted01-36" points="348 232.5 348.5 232.5 348 232.5"></polyline>
                      <line className="dotted01-37" x1="332.87" y1="232.5" x2="17.57" y2="232.5"></line>
                      <polyline className="dotted01-38" points="10 293.5 9.5 293.5 10 293.5"></polyline>
                      <line className="dotted01-39" x1="25.13" y1="293.5" x2="340.43" y2="293.5"></line>
                      <polyline className="dotted01-38" points="348 293.5 348.5 293.5 348 293.5"></polyline>
                      <line className="dotted01-39" x1="332.87" y1="293.5" x2="17.57" y2="293.5"></line>
                      <polyline className="dotted01-40" points="10 53.5 9.5 53.5 10 53.5"></polyline>
                      <line className="dotted01-41" x1="25.13" y1="53.5" x2="340.43" y2="53.5"></line>
                      <polyline className="dotted01-40" points="348 53.5 348.5 53.5 348 53.5"></polyline>
                      <line className="dotted01-41" x1="332.87" y1="53.5" x2="17.57" y2="53.5"></line>
                    </g>
                  </svg>
                </div>
                <img src={meninasmartphone.src}
                     className="img-fluid images-parallax-mixed-first skrollable loading_src skrollable-between"
                     alt="Image Description" data-center="transform:translate(0,0px);opacity: 1"
                     data-500-center="transform:translate(0,200px);opacity: 0.3" data-was-processed="true"
                     style={{ transform: "translate(0px, 42.4px)", opacity: 0.8516 }} />
                <img src={menina.src}
                     className="img-fluid images-parallax-mixed-last skrollable loading_src skrollable-between"
                     alt="Image Description" data-center="transform:translate(0,0px);opacity: 1"
                     data-500-center="transform:translate(0,100px);opacity: 0.3" data-was-processed="true"
                     style={{ transform: "translate(0px, 5.2px)", opacity: 0.9636 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 126" className="section-bottom-angled-border">
        <polygon points="0 126 1920 126 1920 59 0 0 0 126" style={{ fill: "#fff" }}></polygon>
      </svg>
    </section>
  );
}

function Features() {

  return (
    <section className="section">
      <div className="hexagon-back hexagon-left">
        <svg data-name="hexagon" className="hexagon-svg skrollable skrollable-between" viewBox="0 0 348.51 350"
             data-0="transform:rotate(0deg);" data-top="transform:rotate(360deg);"
             style={{ transform: "rotate(352.941deg)" }}>
          <path
            d="M429.23,188.1l64.46,125a50,50,0,0,1,0,45.86l-64.46,125A50,50,0,0,1,384.77,511H265.23a50,50,0,0,1-44.46-27.1l-64.46-125a50,50,0,0,1,0-45.86l64.46-125A50,50,0,0,1,265.23,161H384.77A50,50,0,0,1,429.23,188.1Z"
            transform="translate(-150.74 -161)" style={{ fill: "#4794fe", opacity: 0.3 }}></path>
          <path
            d="M404.81,237.74l39.43,75a50.08,50.08,0,0,1,0,46.58l-39.43,75A50,50,0,0,1,360.53,461H289.47a50,50,0,0,1-44.28-26.74l-39.43-75a50.08,50.08,0,0,1,0-46.58l39.43-75A50,50,0,0,1,289.47,211h71.06A50,50,0,0,1,404.81,237.74Z"
            transform="translate(-150.74 -161)" style={{ fill: "#4794fe" }}></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-body">
          <div className="row align-items-center">
            <div className="col-md-7 mb-5 mb-md-0">
              <img src={agencyMarketing.src} alt="Image Description" className="img-fluid loading_src"
                   data-was-processed="true" />
            </div>
            <div className="col-md-5">
              <div
                className="section-title-wrap text-left section-title-wrap--left section-title-wrap-md-center mb-5 mb-lg-0">
                <div className="section-title-inner d-inline-block">
                  <h2 className="section-title" style={{ textTransform: "none" }}>O que você encontra no <span
                    className="d-block font-weight-light">Wayfly? </span></h2>
                </div>
                <p style={{ textTransform: "none" }}>Cadastro de pacientes, agenda, prontuário eletrônico completo com:
                  evolução por consulta, registro de faltas com especificação do motivo, expediente e terapeutas,
                  anamnese, área para registro do plano de tratamento e orientações para casa. Você também pode anexar
                  documentos como exames e relatórios. Além disso, atualizações constantes com novas funcionalidades. Em
                  breve terapia ABA!</p>
                <div className="row mt-4">
                  <div className="col-6">
                    <div className="btn btn-circle btn-light-success mb-3 mx-auto mx-lg-0"><i
                      className="icon-vector"></i></div>
                    <h3 className="font-md">Segurança</h3>
                  </div>
                  <div className="col-6">
                    <div className="btn btn-circle btn-light-primary mb-3 mx-auto mx-lg-0"><i
                      className="icon-puzzle"></i></div>
                    <h3 className="font-md">Suporte</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function shuffleArray(inputArray){
  return inputArray.sort(()=> Math.random() - 0.5);
}

function TreeInfo(){
  return(
    <div class="bg-light">
      <div class="container space-2 space-lg-3">
        <div class="row">
          <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <ul class="nav nav-box" role="tablist">
              <li className="nav-item w-100 mx-0 mb-3">
                <a className="nav-link p-4 active" id="pills-one-code-features-tab" data-toggle="pill" href="#pills-one-code-features" role="tab" aria-controls="pills-one-code-features" aria-selected="true">
                  <div class="media align-items-center align-items-lg-start">
                    <figure class="w-100 max-w-6rem mt-2 mr-4">
                      <img className="img-fluid" src="../../assets/svg/icons/icon-45.svg" alt="SVG"/>
                    </figure>
                    <div class="media-body">
                      <h4 class="mb-0">Agenda</h4>
                      <div class="d-none d-lg-block mt-2">
                        <p class="text-body mb-0">Otimize o agendamento dos terapeutas em sua clínica com nosso software de agenda personalizado! Gerencie facilmente os status dos agendamentos, desde "agendado" até "finalizado", passando por "falta com direito à reposição", "falta sem direito à reposição" e até mesmo quando o profissional precisa desmarcar. Com o recurso de cadastro recorrente, você poderá agendar automaticamente as sessões regulares de seus pacientes, poupando tempo e esforço. Além disso, o cadastro de reposições permite agendar novas consultas para pacientes que faltaram anteriormente. E se houver necessidade de remarcação, nosso software simplifica o processo, garantindo a flexibilidade e a melhor experiência para seus pacientes. Aumente a eficiência de sua clínica com nossa solução de agenda e eleve a qualidade do atendimento prestado!</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li className="nav-item w-100 mx-0 mb-3">
                <a className="nav-link p-4" id="pills-two-code-features-tab" data-toggle="pill"
                   href="#pills-two-code-features" role="tab" aria-controls="pills-two-code-features"
                   aria-selected="false">
                  <div class="media align-items-center align-items-lg-start">
                    <figure class="w-100 max-w-6rem mt-2 mr-4">
                      <img className="img-fluid" src="../../assets/svg/icons/icon-23.svg" alt="SVG"/>
                    </figure>
                    <div class="media-body">
                      <h4 class="mb-0">Prontuario eletronico</h4>
                      <div class="d-none d-lg-block mt-2">
                        <p class="text-body mb-0"><font style={{verticalAlign: 'inherit'}}><font
                          style={{verticalAlign: 'inherit'}}>O prontuário eletrônico oferece uma ampla gama de recursos para atender às necessidades específicas do seu ambiente clínico. Desde a anamnese até a devolutiva, nosso sistema oferece um fluxo de atendimento contínuo e bem estruturado para seus pacientes. Com a anamnese integrada, você pode coletar de forma eficiente informações vitais sobre o histórico do paciente, sintomas, queixas e outras informações relevantes, garantindo uma base sólida para o diagnóstico e tratamento.

                          Além disso, nossa solução permite a avaliação completa dos pacientes, oferecendo uma visão abrangente do progresso e do estado de saúde. Com a seção de evolução, você pode documentar de forma detalhada o progresso do paciente ao longo do tempo, facilitando a revisão e o monitoramento contínuos. Essa funcionalidade é essencial para aprimorar o atendimento ao paciente, garantindo uma comunicação eficaz entre a equipe multidisciplinar e a coordenação de cuidados integrados.

                          Um destaque exclusivo do nosso software é o plano terapêutico. Com essa ferramenta, você pode criar um plano de tratamento personalizado para cada paciente, envolvendo diferentes especialidades e terapeutas. Isso permite uma melhor integração da equipe, possibilitando uma abordagem colaborativa e holística para o bem-estar do paciente. O plano terapêutico pode ser facilmente atualizado e compartilhado com todos os membros da equipe, promovendo uma comunicação fluida e um alinhamento eficiente nas estratégias de tratamento.

                          Para aprimorar ainda mais a experiência do paciente, nosso prontuário eletrônico oferece recursos de orientação. Essa funcionalidade permite que você compartilhe informações relevantes, orientações e instruções detalhadas com os pais ou cuidadores do paciente. Ao fornecer informações claras e precisas, você fortalece a comunicação dentro da clínica, promovendo uma compreensão mais abrangente do tratamento e garantindo uma adesão adequada às orientações fornecidas.

                          Além disso, nosso software de prontuário eletrônico possui uma seção dedicada a anexos de documentos. Essa funcionalidade permite que você armazene e acesse facilmente documentos relevantes.</font></font>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li className="nav-item w-100 mx-0">
                <a className="nav-link p-4" id="pills-three-code-features-tab" data-toggle="pill"
                   href="#pills-three-code-features" role="tab" aria-controls="pills-three-code-features"
                   aria-selected="false">
                  <div class="media align-items-center align-items-lg-start">
                    <figure class="w-100 max-w-6rem mt-2 mr-4">
                      <img className="img-fluid" src="../../assets/svg/icons/icon-44.svg" alt="SVG"/>
                    </figure>
                    <div class="media-body">
                      <h4 class="mb-0">Financeiro</h4>
                      <div class="d-none d-lg-block mt-2">
                        <p class="text-body mb-0"><font style={{verticalAlign: 'inherit'}}><font
                          style={{verticalAlign: 'inherit'}}>Você pode modificar qualquer aspecto do seu
                          site.</font></font></p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-7 order-lg-1 align-self-lg-end">

            <div class="tab-content pr-lg-4">
              <div class="tab-pane fade show active" id="pills-one-code-features" role="tabpanel"
                   aria-labelledby="pills-one-code-features-tab">

                <div class="device">
                  <img className="img-fluid" src="../../assets/svg/components/macbook.svg" alt="Descrição da imagem"/>
                    <img className="device-macbook-screen" src="../../assets/img/1618x1010/img5.jpg"
                         alt="Descrição da imagem"/>
                </div>

              </div>

              <div class="tab-pane fade" id="pills-two-code-features" role="tabpanel"
                   aria-labelledby="pills-two-code-features-tab">
                <div class="shadow-sm rounded">
                  <img className="avatar-img rounded-lg" src="../../assets/img/1618x1010/img3.jpg"
                       alt="Descrição da imagem"/>
                </div>
              </div>

              <div class="tab-pane fade" id="pills-three-code-features" role="tabpanel"
                   aria-labelledby="pills-three-code-features-tab">

                <div class="device-wrapper">
                  <div class="device">
                    <img className="img-fluid" src="../../assets/svg/components/macbook.svg" alt="Descrição da imagem" />
                      <img className="device-macbook-screen" src="../../assets/img/1618x1010/img4.jpg"
                           alt="Descrição da imagem" />
                  </div>
                  <div class="device device-iphone-x">
                    <img className="device-iphone-x-frame" src="../../assets/svg/components/iphone-x.svg"
                         alt="Descrição da imagem"/>
                      <img className="device-iphone-x-screen" src="../../assets/img/407x867/img7.jpg"
                           alt="Descrição da imagem"/>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function Companies() {
  const [ state,setState] = useState([]);

  useEffect(()=>{
    const companies = [
      {
        "url": benackids.src,
        "width":150,
        "height":50
      },
      {
        "url": fonocom.src,
        "width":150,
        "height":50
      },
      {
        "url": log.src,
        "width":100,
        "height":40
      },
      {
        "url": voe.src,
        "width":150,
        "height":50
      },
      {
        "url": multiser.src,
        "width":150,
        "height":50
      },
      {
        "url": simone.src,
        "width":150,
        "height":50
      },
      {
        "url": reabilitakids.src,
        "width":150,
        "height":50
      },
      {
        "url": pamelacordeiro.src,
        "width":150,
        "height":50
      },
      {
        "url": beatrizviana.src,
        "width":150,
        "height":50
      }
    ]

    setState(shuffleArray(companies).slice(0, 6));
  },[])

  return (
    <div className="row justify-content-between text-center" style={{marginTop:150}}>
      {
        state.map((value,index) =>{
            return(
              <div className="col-4 col-lg-2 mb-5 mb-lg-0">

                <div className="mx-3">
                  <Image
                    className="img-fluid image-shadow loading_src" alt="Cadastro do paciente" data-was-processed="true" style={{marginTop:0}}
                    src={value.url} alt="Image Description" width={value.width} height={value.height} />

                </div>
              </div>
            )
        })
      }

    </div>
  );
}

function FigureTop(){
  return(
    <figure>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px" viewBox="0 0 1921 273" style={{marginBottom: '-8px', enableBackground:'new 0 0 1921 273'}} xmlSpace="preserve">
        <polygon fill="#f9fbff" points="0,273 1921,273 1921,0 "></polygon>
      </svg>
    </figure>
  )
}
function FigureBotton(){
  return(
    <figure>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px" viewBox="0 0 1921 273" style={{marginBottom: '-8px', enableBackground:'new 0 0 1921 273'}} xmlSpace="preserve">
        <polygon fill="#f9fbff" points="1921,0 0,0 0,273 "></polygon>
      </svg>
    </figure>
  )
}

function Hero() {

  return (

    <div className="row justify-content-lg-between mb-7">
      <div className="col-md-5 col-lg-5">

        <div className="mb-5">
          <h6 style={{ letterSpacing: 4, color: "#00a3e9", fontWeight: "bold" }}>SEJA BEM-VINDO(A) À WAYFLY</h6>
          <h3>Muito mais que um prontuário eletrônico!</h3>
          <div style={{ width: 100, height: 5, background: "#00a3e9", margin: "20px 0" }}></div>
          <p>O Wayfly é um sistema de gestão que nasceu para revolucionar a administração do seu consultório ou clínica
            tanto em aspectos administrativos quanto clínicos.</p>
        </div>

        <div className="mb-3">
          <a className="btn btn-primary btn-wide transition-3d-hover mb-2 mb-sm-0 mr-3" href="#">Vamos conversar</a>
          <a className="btn btn-link mb-2 mb-sm-0" href="#">Veja os planos</a>
        </div>
      </div>


        <figure class="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 right-0 pr-0 ie-main-hero">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
            <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
              c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
            <defs>
              <path id="mainHeroSVG1" d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z"></path>
            </defs>
            <clipPath id="mainHeroSVG2">
              <use xlinkHref="#mainHeroSVG1"></use>
            </clipPath>

            <g transform="matrix(1 0 0 1 0 0)" clipPath="url(#mainHeroSVG2)">
              <image width="750" height="750" xlinkHref={img2.src} transform="matrix(1.4462 0 0 1.4448 52.8755 0)"></image>
            </g>
          </svg>
        </figure>

    </div>

  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Wayfly - Otimizamos seu tempo para que você possa voar.</title>
        <meta name="description"
              content="Agenda, evolução por consulta, cadastro de paciente, expediente de terapeutas, anamnese, área para registro do plano de tratamento e orientações parentais." />
        <meta name="robots" content="index" />
        <meta name="author" content="wayfly" />
        <meta name="keywords"
              content="Agenda, evolução por consulta, cadastro de paciente, expediente e terapeutas, anamnese, área para registro do plano de tratamento e orientações parentais."></meta>
        <link rel="icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main id="content" role="main">
        <div className="container space-top-3">
          <Hero />
          <div class="text-center mx-lg-auto" style={{marginTop:320}}>
            <div class="mb-9">
              <h2 style={{ letterSpacing: 0, color: "#00a3e9", fontWeight: "bold" }}>
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>A melhor maneira de aumentar a produtividade</font>
                </font>
              </h2>
              <p class="lead">
                São mais de <b style={{ letterSpacing: 2, color: "#00a3e9", fontWeight: "bold" }}>18.000</b> atendimentos finalizados
              </p>
            </div>
          </div>

        </div>
        <FigureTop />
        <TreeInfo />
        <FigureBotton />
        <div className="container space-top-3 space-top-lg-4 space-bottom-2 space-bottom-lg-3">
          <Companies />
        </div>
      </main>
    </div>
  );
}
