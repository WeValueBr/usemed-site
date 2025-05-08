import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react';
import grafico from '../assets/grafico.png';
import fichapaciente from '../assets/fichapaciente.png';
import cadastropaciente from '../assets/cadastropaciente.png';
import anamnese from '../assets/anamnese.png';
import anamnesemobile from '../assets/anamnesemobile.png';
import evolucao from '../assets/evolucao.png';
import carefly from '../assets/images/carefly.png'
import carefly2 from '../assets/images/carefly2.png'
import favicon from '../assets/images/favicon.ico'
import agencyMarketing from '../assets/images/illustration/agency-marketing.svg'
import collaboration from '../assets/images/pictures/office-kind-of-collaboration.jpg'
import menina from '../assets/meninalaptop.jpg'
import meninasmartphone from '../assets/meninasmartphone.jpg'

export function Header(){

    const [novo,setNovo] = useState();

    useEffect(() => {

        function click(ev) {

            if(ev.srcElement.closest('#novo') == null){
                setNovo(false);
            }
        }

        if(novo){
            window.addEventListener('click',click,false);
            return () => {
                window.removeEventListener('click',click,false);
            };
        }

    }, [novo]);

    return(
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="header-nav w-100">
                        <nav className="navbar navbar-light navbar-expand-lg has-mega-menu-advanced" id="novo">
                            <div className='navbar-brand header-brand'>
							<Image
                                    className="header-logo img-fluid loading_src"
                                    src={carefly.src}
                                    alt="logo"
                                    width={40}
                                    height={50}
                                />
                            </div>
                            <div className={"header-menu collapse navbar-collapse "+(novo ? "show":"")}>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown mega-menu-advanced-wrapper">
                                        <a className="nav-link" href="#main" id="homelink" >
                                            Início
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown mega-menu-advanced-wrapper">
                                        <a className="nav-link" href="#features"  >
                                            Funcionalidades
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown mega-menu-advanced-wrapper">
                                        <a className="nav-link" href="#plan"  >
                                            Preços e planos
                                        </a>
                                    </li>
                                    {novo && <li className="nav-item dropdown mega-menu-advanced-wrapper">
                                        <a href="https://app.wayfly.com.br" rel="noreferrer" target="_blank" className=" nav-link btn btn-global btn-curved btn-overlay  d-lg-block">
                                            Entrar
                                        </a>
                                    </li>}
                                </ul>
                            </div>
                            <div className="header-btns">
                                <nav className="header-nav-btns">
                                    <ul className="list-inline m-0">
                                        <li className="list-inline-item">
                                            <a href="https://app.wayfly.com.br" rel="noreferrer" target="_blank" className="btn btn-global btn-curved btn-overlay d-none d-lg-block">
                                               Entrar
                                            </a>
                                            <button type="button" className={"btn menu-toggle d-block d-lg-none "+(novo ? "toggled":"")} style={{padding:10}} onClick={() => setNovo(!novo)}><i className="icon--menu-line"></i></button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export function Footer(){
    return(
        <footer className="footer footer-global">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1001 189.75" className="footer-top-shape">
                <defs>
                    <linearGradient id="footer-top-shape" y1="66.87" x2="478" y2="66.87" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#db1253"></stop>
                        <stop offset="1" stopColor="#f02b34"></stop>
                    </linearGradient>
                </defs>
                <path d="M529.46,59.08l4.61,50.79L58,153.08,52.21,89.27c25.68-32.39,68.52-75,127.16-81.49,29.56-3.24,52.32,3.91,62.89,7.08C293.15,30.1,378.33,47.91,529.46,59.08Z" transform="translate(0 0)" style={{fill:'#4794fe',opacity:0.1}}></path>
                <a xlinkHref="#main" className="gotop">
                    <path d="M478,82.75v51H0V69.68C28.5,39.75,75,1.13,134,0c29.74-.56,51.76,8.62,62,12.73C245.28,32.52,328.5,58,478,82.75Z" transform="translate(0 0)" style={{fill:'#4794fe'}}></path>
                </a>
                <path d="M1001,44.75c-60.13-38.91-193.92-26.39-224-22C658.74,40,377.1,76.45,0,130.75v59H1001" transform="translate(0 0)" style={{fill:'#222'}}></path>
                <a xlinkHref="#main" className="svg-uparrow-link gotop">
                    <path d="M126,49a13,13,0,1,0,13,13A13,13,0,0,0,126,49Zm0,2a11,11,0,1,1-11,11A11,11,0,0,1,126,51Zm0,4-4,4h3V69h2V59h3Z" transform="translate(0 0)" className="svg-uparrow" style={{fill:'#fff'}}></path>
                </a>
            </svg>
            <div className="footer-global-body bg-dark pb-5">
                <div className="footer-global-backsvg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 692.24 603.55" style={{opacity:0.05}}>
                        <defs>
                            <linearGradient id="footer_backsvg01" x1="284.66" y1="728.48" x2="748.46" y2="417.52" gradientUnits="userSpaceOnUse">
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
                        <path d="M438.5,303.5c-23.86,8.64-252.12,95.06-255,283-2.29,149.39,139.18,274.91,267,291,244,30.71,487.13-331,411-490C808.64,277.09,593.64,247.35,438.5,303.5Z" transform="translate(-183.47 -275.79)" style={{fill:"url(#footer_backsvg01)"}}></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 692.24 603.55" style={{opacity:0.05}}>
                        <defs>
                        <linearGradient id="footer_backsvg02" x1="284.66" y1="728.48" x2="748.46" y2="417.52" gradientTransform="translate(1059.18 1155.13) rotate(180)" gradientUnits="userSpaceOnUse">
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
                        <path d="M620.68,851.63c23.86-8.64,252.12-95.07,255-283,2.29-149.4-139.18-274.91-267-291-244-30.72-487.13,331-411,490C250.54,878,465.54,907.78,620.68,851.63Z" transform="translate(-183.47 -275.79)" style={{fill:"url(#footer_backsvg02)"}}></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="row mb-5 pt-5">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6 mb-5 mb-lg-0">
                            <div className="footer-col">
                                <h3 className="font-sm footer-title">Links  <span>Rápidos.</span></h3>
                                <div className="footer-col-body">
                                    <nav className="footer-nav">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#main">Início</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#features"  >
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
                                            <i className="icon-phone align-self-center mr-3"></i>
                                            <div className="media-body">
                                                Comercial <br/>
                                                +55 21 97533-6733
                                                <div className="d-block font-weight-bold">Seg - Sex 9h - 19h</div>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item media mb-3">
                                            <i className="icon-phone align-self-center mr-3"></i>
                                            <div className="media-body">
                                                Suporte <br/>
                                                +55 21 99045-2839
                                                <div className="d-block font-weight-bold">Seg - Sex 9h - 19h</div>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item media mb-3">
                                            <i className="icon-new-post align-self-center mr-3"></i>
                                            <div className="media-body">
                                                contato@wayfly.com.br
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
                                            <li className="list-inline-item"><a href="https://www.instagram.com/wayfly.com.br/" rel="noreferrer" target="_blank" ><i className="icon-instagram"></i></a></li>
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
    )
}

function Plan(){
    const [type,setType] = useState(false)

    return(
        <section className="section position-static section-hiro d-flex" id="plan">
            <div className="container">
                <div className="mx-md mx-auto">
                <div className="section-title-wrap text-center mb-4 mt-5">
                    <div className="section-title-inner d-inline-flex">
                        <h2 className="section-title" style={{textTransform:'none'}}>Tecnologia a serviço da saúde, inclusive a sua.</h2>
                    </div>
                    <p style={{textTransform:'none',fontSize:17}}>Soluções para administrar sua clínica ou consultório de forma prática e segura.</p>
                </div>
                <div className="d-block text-center mb-5">
                    <label className="text-switch">
                    <input type="checkbox" id="pricePlanToggle" onChange={() => setType(!type)}/>
                    <span className="switch-tracker"></span>
                    <span className="text-switch-label off">Mensal</span>
                    <span className="text-switch-label on">Anual</span>
                    </label>
                </div>
                <div className="scrollbar-on-mobile">
                    <div className="box rounded-lg shadow shadow-more price-table">
                        <div className="price-table-item" data-plan="monthly">
                            <i className="icon-paper-plane"></i>
                            <h3 className="font-lg">Plus</h3>
                            <ul className="price-table-detail font-regular font-weight-light mt-3 mb-4">
                                <li>Cadastro paciente</li>
                                <li>Cadastro do profissional com especialidades de atuação</li>
                                <li>Anamnese</li>
                                <li>Evolução</li>
                                <li>Orientação parental</li>
                                <li>Área para anexar  exames e relatórios (5GB Grátis)*</li>
                                <li>Sinalização de motivo da falta com ou sem direito à reposição de atendimento</li>
                                <li>Plano terapêutico livre</li>
                                <li>Controle de perfil de usuários</li>
                                <li>Download e impressão da documentação sempre que necessário</li>
	 			                <li>Contas a pagar</li>
                                <li>Contas a receber</li>
                                <li>Relatório de pagamento</li>
                                <li>Relatório de inadimplência</li>
                                <li>Relatório de adimplente</li>
                            </ul>
                            <div className="price-bottom same-height" style={{height: 112.797}}>
                                {
                                    type == false ?
                                        <div className="price-table-price font-weight-bold font-lg" data-period="monthly">R$ 55,00 <small>/mês</small> <br/> </div>
                                    :
                                        <div className="price-table-price font-weight-bold font-lg" data-period="monthly">
                                            R$ 627,00 <small>/ano</small>
                                        </div>
                                }
                                <small>por profissional</small>
                                <div className="mt-3 text-center">
                                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521990452839&amp;text=Olá, gostaria de informações sobre o plano plus."  className="btn btn-success btn-curved btn-overlay">Comece agora</a>
                                </div>
                            </div>
                        </div>
                    </div>
					</div>
                </div>
                <div className="section-figure-wrap width-50vw  position-right-0 position-top-0 position-absolute pointer-events-none">
                <figure className="section-figure position-relative m-0 z-index--1 opacity-lg-10">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 855.89 729.21">
                    <defs>
                        <linearGradient id="a" x1="889.61" y1="171.15" x2="1190.46" y2="171.15" gradientTransform="translate(-40.84 270.26) rotate(-15)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fbedc1" stopOpacity="0.3"></stop>
                        <stop offset="0.23" stopColor="##f3f9ff" stopOpacity="0.28"></stop>
                        <stop offset="0.46" stopColor="#fcf1cf" stopOpacity="0.23"></stop>
                        <stop offset="0.7" stopColor="#fdf6e0" stopOpacity="0.15"></stop>
                        <stop offset="0.93" stopColor="#fffdf7" stopOpacity="0.04"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <path d="M965.71,50.85c-10.33,5.47-118.29,62.6-105.42,143.43,10.62,66.68,98.4,116.79,170.57,100.33,93.17-21.25,122.41-126.14,117.87-181.56-.6-7.37-9.42-50.45-44.69-74.07C1052.89,4.72,986.63,39.79,965.71,50.85Z" transform="translate(-561.11 -1)" style={{fill: '#f3f9ff'}}></path>
                    <g style={{opacity: 0.4}}>
                        <line x1="124.46" y1="167.19" x2="40.09" y2="192" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="150.12" y1="183.1" x2="27.62" y2="219.12" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="164.16" y1="200.08" x2="25.46" y2="240.87" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="176.66" y1="240.18" x2="37.6" y2="281.08" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="173.19" y1="220.1" x2="29.53" y2="262.35" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="174.33" y1="263.54" x2="52.69" y2="299.32" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="162.78" y1="288.83" x2="76.55" y2="314.19" style={{fill: 'none',stroke: '#f3f9ff',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                    </g>
                    </svg>
                </figure>
                </div>
            </div>
        </section>
    )
}

function Main(){

    return(
        <section className="section position-static section-hiro d-flex overflow-hidden" >
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-12 hiro-text pl-md-5 pt-5 pt-md-0 text-md-left text-center">
                        <h1 className="hiro-title font-uxl font-xxxl-onMobile font-weight-medium mb-4">WAYFLY</h1>
                        <p className="font-weight-light font-md font-regular-onMobile"> Muito mais que um prontuário eletrônico! O Wayfly é um sistema de gestão que nasce para revolucionar a administração do seu consultório ou clínica tanto em aspectos administrativos quanto clínicos. Otimizamos seu tempo para que você possa voar!</p>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6 hiro-img d-none d-md-block">
                        <div className="preview-cards skrollable skrollable-before" data--100-top="transform:scale(1);opacity:1" data--300-top="transform:scale(0.95) ;opacity:0.3" style={{transform:'scale(1)',opacity:1}}>
                            <div className="card item-has-overlay" style={{right:30,top:50}}>
                                <Image
                                    className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                    src={grafico.src}
                                    width={500}
                                    height={300}
                                />
                                <div className="card-img-overlay item-overlay item-overlay-orange">
                                    <div className="item-overlay-content">
                                        <a href="#" className="btn text-white"><i className="icon-circled-arrow-pointing-up-and-left  font-xxl"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card item-has-overlay" style={{right:70,top:150}}>
                                <Image
                                    className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                    src={cadastropaciente.src}
                                    width={500}
                                    height={300}
                                />
                                <div className="card-img-overlay item-overlay">
                                    <div className="item-overlay-content">
                                        <a href="#" className="btn text-white"><i className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="card item-has-overlay"  style={{right:300,top:84}}>
                                <Image
                                    className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                    src={fichapaciente.src}
                                    width={500}
                                    height={300}
                                />
                                <div className="card-img-overlay item-overlay item-overlay-danger">
                                    <div className="item-overlay-content">
                                        <a href="#" className="btn text-white"><i className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card item-has-overlay" style={{right:300,top:225}}>
                                <Image
                                    className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                    src={evolucao.src}
                                    width={500}
                                    height={300}
                                />
                                <div className="card-img-overlay item-overlay item-overlay-info">
                                    <div className="item-overlay-content">
                                        <a href="#" className="btn text-white"><i className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function View(){

    return(
        <section className="section section-middle-padding  bg-light-primary overflow-hidden section-angled-border" id="about">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 126" className="section-top-angled-border">
                <polygon points="0 0 1920 0 1920 67 0 126 0 0" style={{fill: '#fff'}}></polygon>
            </svg>
            <div className="container">
                <div className="section-body">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 my-lg-0 my-5">
                            <div className="section-title-wrap text-left section-title-wrap--left section-title-wrap-md-center mb-5 mb-lg-0">
                                <div className="section-title-inner d-inline-block">
                                    <h2 className="section-title">Wayfly <span className="d-block font-weight-light" style={{textTransform:'none'}}>é pra mim?</span></h2>
                                </div>
                                <p style={{textTransform:'none'}}>Se você é profissional da saúde atuando com agendamento, preenchimento de prontuário e administração de consultórios e clínicas, esse sistema é para você! O Wayfly vem sendo desenvolvido por uma equipe de terapeutas e programadores para proporcionar a melhor experiência para esse público de profissionais da saúde que se preocupam com organização e seriedade sem deixar a segurança, praticidade e sustentabilidade de lado!</p>
                                <div className="row mt-3">
                                    <div className="col-md-4 col-sm-4 mb-3">
                                        <div className="simple-icon-text">
                                            <h3 className="simple-icon-text-title font-md mb-1"><i className="icon-business font-xxl"></i> 149.203</h3>
                                            <p className="font-regular font-weight-light">Atendimentos finalizados</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 mb-4">
                                        <div className="simple-icon-text">
                                            <h3 className="simple-icon-text-title font-md mb-1"><i className="icon-happy font-xxl"></i> 9.217</h3>
                                            <p className="font-regular font-weight-light">Pacientes cadastrados</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 mb-4">
                                        <div className="simple-icon-text">
                                            <h3 className="simple-icon-text-title font-md mb-1"><i className="icon-happy font-xxl"></i> 354</h3>
                                            <p className="font-regular font-weight-light">Terapeutas cadastrados</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 pt-lg-0 pt-5">
                            <div className="images-parallax-mixed">

                                <div className="section-title--back dotted--back inverse">
                                    <svg id="Layer_01" data-name="Layer 01" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 348.5 436">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="9.5" y1="73.5" x2="348.5" y2="73.5" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#4f4f4f"></stop>
                                                <stop offset="0.64" stopColor="#4f4f4f" stopOpacity="0.32"></stop>
                                                <stop offset="1" stopColor="#4f4f4f" stopOpacity="0"></stop>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-5" y1="93.5" y2="93.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-9" y1="113.5" y2="113.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-13" y1="133.5" y2="133.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-17" y1="173.5" y2="173.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-21" y1="153.5" y2="153.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-25" y1="193.5" y2="193.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-29" y1="253.5" y2="253.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-33" y1="313.5" y2="313.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-37" y1="273.5" y2="273.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-41" y1="213.5" y2="213.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-45" y1="333.5" y2="333.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-49" y1="353.5" y2="353.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-53" y1="373.5" y2="373.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-57" y1="393.5" y2="393.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-61" y1="413.5" y2="413.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-65" y1="232.5" y2="232.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-69" y1="293.5" y2="293.5" xlinkHref="#linear-gradient"></linearGradient>
                                            <linearGradient id="linear-gradient-73" y1="53.5" y2="53.5" xlinkHref="#linear-gradient"></linearGradient>
                                        </defs>
                                        <circle className="dotted01-1" cx="52" cy="6" r="6"></circle>
                                        <circle className="dotted01-2" cx="139" cy="430" r="6"></circle>
                                        <circle className="dotted01-3" cx="10" cy="51" r="10"></circle>
                                        <g id="Layer_2" data-name="Layer 2" style={{opacity:0.5}}>
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
                                        <line className="dotted01-39" x1="332.87" y1="293.5" x2="17.57" y2="293.5"></line><polyline className="dotted01-40" points="10 53.5 9.5 53.5 10 53.5"></polyline><line className="dotted01-41" x1="25.13" y1="53.5" x2="340.43" y2="53.5"></line><polyline className="dotted01-40" points="348 53.5 348.5 53.5 348 53.5"></polyline><line className="dotted01-41" x1="332.87" y1="53.5" x2="17.57" y2="53.5"></line></g>
                                    </svg>
                                </div>
                                <img src={meninasmartphone.src} className="img-fluid images-parallax-mixed-first skrollable loading_src skrollable-between" alt="Image Description" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3" data-was-processed="true" style={{transform: 'translate(0px, 42.4px)', opacity: 0.8516}}/>
                                <img src={menina.src} className="img-fluid images-parallax-mixed-last skrollable loading_src skrollable-between" alt="Image Description" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,100px);opacity: 0.3" data-was-processed="true" style={{transform: 'translate(0px, 5.2px)', opacity: 0.9636}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 126" className="section-bottom-angled-border">
                <polygon points="0 126 1920 126 1920 59 0 0 0 126" style={{fill: '#fff'}}></polygon>
            </svg>
        </section>
    );
}

export function WhatsApp(){
    return(
        <div style={{bottom: 20,display: 'block',position: 'fixed',right: 20,zIndex: 999,width: 60}}>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521990452839&amp;text=Olá, gostaria de informações sobre o sistema Wayfly" >
                <svg viewBox="0 0 60 60" fill="none">
                    <path d="M30 60C13.456 60 0 46.536 0 29.994 0 13.453 13.456 0 30 0s30 13.453 30 29.994C60 46.537 46.544 60 30 60z" fill="#00C52B"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.564 13.5C21.979 13.5 15 20.703 15 29.554c0 3.119.86 6.111 2.484 8.704l-2.361 5.37a1.429 1.429 0 00.208 1.492c.264.322.642.497 1.029.497.123 0 .236-.02.359-.048l6.516-1.843a15.197 15.197 0 007.329 1.891c8.584 0 15.563-7.203 15.563-16.063 0-8.85-6.979-16.054-15.564-16.054zm0 29.31c-2.276 0-4.505-.624-6.47-1.803a1.32 1.32 0 00-1.048-.146l-4.259 1.208 1.483-3.372a1.46 1.46 0 00-.133-1.404 13.441 13.441 0 01-2.427-7.749c0-7.31 5.761-13.256 12.844-13.256 7.083 0 12.844 5.946 12.844 13.256.01 7.32-5.752 13.266-12.835 13.266z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.551 31.962c-.651-.4-1.501-.848-2.266-.526-.586.253-.963 1.199-1.35 1.686-.199.254-.426.293-.728.166-2.21-.907-3.91-2.437-5.128-4.533-.208-.321-.17-.584.076-.887.368-.448.83-.955.935-1.56.104-.604-.17-1.305-.416-1.841-.311-.683-.651-1.667-1.322-2.057-.614-.36-1.417-.156-1.964.302-.945.79-1.398 2.037-1.38 3.265 0 .351.048.702.124 1.034.188.809.557 1.569.963 2.29a19.19 19.19 0 001 1.58c1.181 1.656 2.655 3.099 4.355 4.171.85.536 1.765 1.014 2.72 1.336 1.066.36 2.01.74 3.163.516 1.2-.234 2.39-1.004 2.87-2.203.143-.35.209-.75.133-1.12-.17-.78-1.18-1.239-1.785-1.619z" fill="#fff"></path>
                </svg>
            </a>
        </div>
    )
}

function Features(){

    return(
        <section className="section">
            <div className="hexagon-back hexagon-left">
                <svg data-name="hexagon" className="hexagon-svg skrollable skrollable-between" viewBox="0 0 348.51 350" data-0="transform:rotate(0deg);" data-top="transform:rotate(360deg);" style={{transform: 'rotate(352.941deg)'}}>
                    <path d="M429.23,188.1l64.46,125a50,50,0,0,1,0,45.86l-64.46,125A50,50,0,0,1,384.77,511H265.23a50,50,0,0,1-44.46-27.1l-64.46-125a50,50,0,0,1,0-45.86l64.46-125A50,50,0,0,1,265.23,161H384.77A50,50,0,0,1,429.23,188.1Z" transform="translate(-150.74 -161)" style={{fill: '#4794fe',opacity: 0.3}}></path>
                    <path d="M404.81,237.74l39.43,75a50.08,50.08,0,0,1,0,46.58l-39.43,75A50,50,0,0,1,360.53,461H289.47a50,50,0,0,1-44.28-26.74l-39.43-75a50.08,50.08,0,0,1,0-46.58l39.43-75A50,50,0,0,1,289.47,211h71.06A50,50,0,0,1,404.81,237.74Z" transform="translate(-150.74 -161)" style={{fill: '#4794fe'}}></path>
                </svg>
            </div>
            <div className="container">
                <div className="section-body">
                    <div className="row align-items-center">
                        <div className="col-md-7 mb-5 mb-md-0">
                            <img src={agencyMarketing.src} alt="Image Description" className="img-fluid loading_src" data-was-processed="true" />
                        </div>
                        <div className="col-md-5">
                            <div className="section-title-wrap text-left section-title-wrap--left section-title-wrap-md-center mb-5 mb-lg-0">
                                <div className="section-title-inner d-inline-block">
                                    <h2 className="section-title" style={{textTransform:'none'}}>O que você encontra no <span className="d-block font-weight-light">Wayfly? </span></h2>
                                </div>
                                <p style={{textTransform:'none'}}>Cadastro de pacientes, agenda, prontuário eletrônico completo com: evolução por consulta, registro de faltas com especificação do motivo, expediente e terapeutas, anamnese, área para registro do plano de tratamento e orientações para casa. Você também pode anexar documentos como exames e relatórios. Além disso, atualizações constantes com novas funcionalidades. Em breve terapia ABA!</p>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <div className="btn btn-circle btn-light-success mb-3 mx-auto mx-lg-0"><i className="icon-vector"></i></div>
                                        <h3 className="font-md">Segurança</h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="btn btn-circle btn-light-primary mb-3 mx-auto mx-lg-0"><i className="icon-puzzle"></i></div>
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

function FeaturesNew(){

    return(
        <section s className="section section-special section-special-has-video bg-gradient-success overlay-gradient-success section-more-padding lazy-back" data-src="assets/images/pictures/office-kind-of-collaboration.jpg" data-was-processed="true" style={{backgroundImage: 'url('+collaboration.src+')',marginTop:100,backgroundSize:'cover'}}>
            <div className="section-background-svgs">
                <svg id="sp-up" data-name="section special up element" className="section-special-elem elem-up" viewBox="0 0 720 30.28">
                    <path className="spup-1" d="M144,143.72c35.42.3,220.4,1.84,270,1,4-.07,10.1-.2,18-1,42.72-4.32,46.64-12.53,72-12.72,24.93-.19,28.71,8.46,72,12.72,7.89.78,14,.92,18,1,49.52,1,234.63-.84,270-1v-27H144Z" transform="translate(-144 -114.72)"></path>
                    <path className="spup-2" d="M144,142c35.42.3,220.4,1.84,270,1,4-.07,10.1-.2,18-1,42.72-4.32,46.64-16.81,72-17,24.93-.19,28.71,12.74,72,17,7.89.78,14,.92,18,1,49.52.95,234.63-.84,270-1V115H144Z" transform="translate(-144 -114.72)"></path>
                    <path className="spup-3" d="M144,141.72c35.42.3,220.4,1.84,270,1,4-.07,10.1-.2,18-1,42.72-4.32,46.64-18.8,72-19,24.93-.19,28.71,14.74,72,19,7.89.78,14,.92,18,1,49.52,1,234.63-.84,270-1v-27H144Z" transform="translate(-144 -114.72)"></path>
                </svg>
                <svg id="sp-down" data-name="section special down element" className="section-special-elem elem-down" viewBox="0 0 720 45.96">
                    <path className="spdown-1" d="M144,291.51c35.42.3,220.4,1.83,270,1,4-.07,10.1-.2,18-1,42.72-4.32,48.4-23.27,73.77-23.47,24.92-.19,26.94,19.21,70.23,23.47,7.89.78,14,.92,18,1,49.52.95,234.63-.84,270-1v17.28H144Z" transform="translate(-144 -268.04)"></path>
                    <path className="spdown-2" d="M144,294.3c35.42.3,220.4,1.83,270,1,4-.07,10.1-.2,18-1,42.72-4.33,48.4-17.62,73.77-17.81C530.69,276.3,532.71,290,576,294.3c7.89.77,14,.92,18,1,49.52.95,234.63-.85,270-1v17.27H144Z" transform="translate(-144 -268.04)"></path>
                    <path className="spdown-3" d="M144,296.72c35.42.3,220.4,1.84,270,1,4-.07,10.1-.2,18-1,42.72-4.32,47.64-13.8,73-14,24.93-.19,27.71,9.74,71,14,7.89.78,14,.92,18,1,49.52,1,234.63-.84,270-1V314H144Z" transform="translate(-144 -268.04)"></path>
                </svg>
                <svg id="grad-transparent-shape01" className="grad-transparent-shape" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 685.4 597.04" style={{top:'10%',left:'7%'}}>
                    <defs>
                    <linearGradient id="linear-gradient01" x1="145.44" y1="367.72" x2="830.84" y2="367.72" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff"></stop>
                        <stop offset="0.04" stopColor="#fff" stopOpacity="0.94"></stop>
                        <stop offset="0.19" stopColor="#fff" stopOpacity="0.7"></stop>
                        <stop offset="0.35" stopColor="#fff" stopOpacity="0.48"></stop>
                        <stop offset="0.5" stopColor="#fff" stopOpacity="0.31"></stop>
                        <stop offset="0.64" stopColor="#fff" stopOpacity="0.17"></stop>
                        <stop offset="0.77" stopColor="#fff" stopOpacity="0.08"></stop>
                        <stop offset="0.9" stopColor="#fff" stopOpacity="0.02"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                    </defs>
                    <path className="gts01-1" d="M384.5,71.5c164.37-15.62,316.39,49.24,392,171,11.67,18.79,91.8,152.29,33,276-64.2,135.08-249.27,164.3-372,140-111-22-242.23-101.84-280-239-6.09-22.13-38-138.08,36-240C260.67,87,366.1,73.55,384.5,71.5Z" transform="translate(-145.44 -69.2)"></path>
                </svg>
            </div>

            <div className="container">
                <div className="section-title-wrap text-center section-title-wrap--simple text-white mb-5">
                    <div className="section-title-inner">
                        <span className="title-sep"></span>
                        <h2 className="section-title" style={{textTransform:'none'}}>Outras <span className="d-block font-weight-light">funcionalidades.</span></h2>
                    </div>
                </div>
                <div className="section-body">
                    <div className="row text-center">
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="icon-box">
                                <figure className="icon-box--icon text-white icon-box--customshape mb-4 mx-auto">
                                    <svg className="fill-light-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.88 300.36" style={{fill:'rgba(238, 238, 238, 0.2)'}}>
                                        <path d="M771.5,270.5c33.35-.23,60.9,29.78,63,56,2.87,35.84-43.07,47.93-41,84,2,34.52,45.06,40.54,49,75,4.08,35.61-36,80.66-76,85-59.87,6.49-128.69-77.32-121-156C649.94,369.1,700,271,771.5,270.5Z" transform="translate(-644.91 -270.5)"></path>
                                    </svg>
                                    <i className="icon-document"></i>
                                </figure>
                                <div className="icon-box--body">
                                    <h3 className="icon-box--title font-md text-white">Anexo de documentos</h3>
                                    <p className="mt-3 font-weight-light font-sm text-light-white">Espaço físico para guardar prontuários pode ser um problema! Você não precisa mais juntar papel! Escaneie documentos e exames pelo celular e anexe no cadastro do paciente. Acesse de qualquer lugar sem carregar papel! Faça download e imprima, se precisar!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="icon-box">
                                <figure className="icon-box--icon text-white icon-box--customshape mb-4 mx-auto">
                                    <svg className="fill-light-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.16 316.41" style={{fill:'rgba(238, 238, 238, 0.2)'}}>
                                        <path d="M1044,515c0,127-160,180-228.5,133.5C744.9,600.58,712.7,538.36,729,461,780,219,1044,431,1044,515Z" transform="translate(-724.84 -348.73)"></path>
                                    </svg>
                                    <i className="icon-handshake-1"></i>
                                </figure>
                                <div className="icon-box--body">
                                    <h3 className="icon-box--title font-md text-white">
                                        integração de dados para equipes multidisciplinares
                                    </h3>
                                    <p className="mt-3 font-weight-light font-sm text-light-white">O sistema integra todos os profissionais da clínica. Terapeutas visualizam a ficha do paciente que elas tem atendimento marcado em comum. Na ficha do paciente consta as orientações parentais, o plano de tratamento, relatórios, exames e anamnese. A comunicação da equipe fica facilitada, porém cada terapeuta tem acesso exclusivo às suas evoluções diárias mantendo o sigilo necessário.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="icon-box">
                                <figure className="icon-box--icon text-white icon-box--customshape mb-4 mx-auto">
                                    <svg className="fill-light-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.16 316.41" style={{fill:'rgba(238, 238, 238, 0.2)'}}>
                                        <path d="M1044,515c0,127-160,180-228.5,133.5C744.9,600.58,712.7,538.36,729,461,780,219,1044,431,1044,515Z" transform="translate(-724.84 -348.73)"></path>
                                    </svg>
                                    <i className="icon-plus"></i>
                                </figure>
                                <div className="icon-box--body">
                                    <h3 className="icon-box--title font-md text-white">
                                        Cadastro automático de atendimento
                                    </h3>
                                    <p className="mt-3 font-weight-light font-sm text-light-white">Você pode selecionar a opção de tornar o agendamento recorrente para os casos de atendimento com horário reservado semanalmente. Nao precisa agendar toda semana.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <div >
            <Head>
                <meta charSet="utf-8" />
                <meta name="language" content="pt-BR" />
                <title>Wayfly - Otimizamos seu tempo para que você possa voar.</title>
                <meta name="description" content="Agenda, evolução por consulta, cadastro de paciente, expediente de terapeutas, anamnese, área para registro do plano de tratamento e orientações parentais." />
                <meta name="robots" content="index" />
                <meta name="author" content="wayfly" />
                <meta name="keywords" content="Agenda, evolução por consulta, cadastro de paciente, expediente e terapeutas, anamnese, área para registro do plano de tratamento e orientações parentais."></meta>
                <link rel="icon" href={favicon.src} />
            </Head>
            <Header />
            <main className="content" id="main">
                <Main />
                <Features />
                <View />

                <section className="section" id="features" style={{paddingBottom:0}}>
                    <div className="hexagon-back hexagon-right">
                        <svg data-name="hexagon" className="hexagon-svg skrollable skrollable-after" viewBox="0 0 348.51 350" data-0="transform:rotate(0deg);" data-top="transform:rotate(360deg);" style={{transform: 'rotate(360deg)'}}>
                            <path d="M429.23,188.1l64.46,125a50,50,0,0,1,0,45.86l-64.46,125A50,50,0,0,1,384.77,511H265.23a50,50,0,0,1-44.46-27.1l-64.46-125a50,50,0,0,1,0-45.86l64.46-125A50,50,0,0,1,265.23,161H384.77A50,50,0,0,1,429.23,188.1Z" transform="translate(-150.74 -161)" style={{fill:'#4794fe',opacity: 0.03}}></path>
                            <path d="M404.81,237.74l39.43,75a50.08,50.08,0,0,1,0,46.58l-39.43,75A50,50,0,0,1,360.53,461H289.47a50,50,0,0,1-44.28-26.74l-39.43-75a50.08,50.08,0,0,1,0-46.58l39.43-75A50,50,0,0,1,289.47,211h71.06A50,50,0,0,1,404.81,237.74Z" transform="translate(-150.74 -161)"  style={{fill:'#4794fe'}}></path>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="section-body">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="sreen-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1300 914.1" className="screen-svg-background">
                                            <defs>
                                            <linearGradient id="screen01" x1="115.97" y1="517.19" x2="1305.76" y2="517.19" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#0088fe"></stop>
                                                <stop offset="1" stopColor="#d4edff"></stop>
                                            </linearGradient>
                                            </defs>
                                            <path d="M351,143c164.15-8.35,174.6-56.7,268-41,90.07,15.14,106.72,64.54,203,123,221.19,134.3,389.35,29,460,130,69.08,98.73-24.58,295.27-126,403C1026.32,895.74,792.25,985.69,636,905c-184.18-95.11-98.46-343.78-334-492-71.24-44.83-183.78-88-186-163-1.1-37.2,25.39-66.13,30-71C188.9,133.67,251.49,148.06,351,143Z" transform="translate(-59.86 -63.14)"  style={{opacity:0.06,fill:'url(#screen01)'}}></path>
                                            <path d="M316.67,111.34C496,102.22,507.44,49.39,609.49,66.54c98.41,16.55,116.6,70.52,221.8,134.4C1073,347.67,1256.7,232.65,1333.9,343c75.48,107.87-26.85,322.62-137.67,440.33C1054.54,933.8,798.79,1032.09,628.07,943.92,426.82,840,520.48,568.29,263.13,406.35c-77.84-49-200.8-96.11-203.23-178.1C58.7,187.6,87.64,156,92.68,150.67,139.55,101.15,207.93,116.87,316.67,111.34Z" transform="translate(-59.86 -63.14)" style={{fill:'#4794fe',opacity: 0.03}}></path>
                                            <circle cx="292.14" cy="500.86" r="6"  style={{fill: '#0088fe'}}></circle>
                                            <circle cx="751.14" cy="76.86" r="4"  style={{fill: '#fee28a'}}></circle>
                                            <circle cx="231.14" cy="34.86" r="6"  style={{fill: '#ff9247'}}></circle>
                                        </svg>
                                        <div className="browser-mockup skrollable skrollable-after" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3"  style={{transform:'translate(0px, 0px)',opacity:1}}>
                                            <Image
                                                className="img-fluid image-shadow loading_src" alt="Ficha do paciente" data-was-processed="true"
                                                src={fichapaciente.src}
                                                width={440}
                                                height={200}
                                            />
                                        </div>
                                        <div className="browser-mockup skrollable skrollable-after" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3"  style={{transform:'translate(0px, 0px)',opacity:1}}>
                                            <Image
                                                className="img-fluid image-shadow loading_src" alt="Cadastro do paciente" data-was-processed="true"
                                                src={cadastropaciente.src}
                                                width={430}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 order-sm-1 mb-5 mb-md-0">
                                    <div className="section-title-wrap--simple section-title-center-onMobile">
                                        <div className="section-title-inner d-inline-block">
                                            <span className="title-sep-hr"></span>
                                            <h2 className="section-title text-left">Cadastro de <span className="d-block font-weight-light">pacientes.</span></h2>
                                        </div>
                                        <p className="text-muted font-weight-light">Informações pessoais, área de observações, responsáveis principais e financeiros com registro de CPF e endereço, facilitando emissão de notas fiscais e recibos.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-2x-padding section-sm-padding-onMobile" style={{paddingBottom:200}}>
                    <div className="hexagon-back hexagon-left">
                        <svg data-name="hexagon" className="hexagon-svg skrollable skrollable-between" viewBox="0 0 348.51 350" data-0="transform:rotate(0deg);" data-top="transform:rotate(-360deg);" style={{transform: 'rotate(-336.03deg)'}}>
                            <path d="M429.23,188.1l64.46,125a50,50,0,0,1,0,45.86l-64.46,125A50,50,0,0,1,384.77,511H265.23a50,50,0,0,1-44.46-27.1l-64.46-125a50,50,0,0,1,0-45.86l64.46-125A50,50,0,0,1,265.23,161H384.77A50,50,0,0,1,429.23,188.1Z" transform="translate(-150.74 -161)" style={{fill: '#4794fe',opacity: 0.3}}></path>
                            <path d="M404.81,237.74l39.43,75a50.08,50.08,0,0,1,0,46.58l-39.43,75A50,50,0,0,1,360.53,461H289.47a50,50,0,0,1-44.28-26.74l-39.43-75a50.08,50.08,0,0,1,0-46.58l39.43-75A50,50,0,0,1,289.47,211h71.06A50,50,0,0,1,404.81,237.74Z" transform="translate(-150.74 -161)" style={{fill: '#4794fe'}}></path>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="section-body">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="section-title-wrap--simple section-title-center-onMobile mb-md-5">
                                        <div className="section-title-inner d-inline-block">
                                            <span className="title-sep-hr"></span>
                                            <h2 className="section-title text-left">Gráficos</h2>
                                        </div>
                                        <p className="text-muted font-weight-light">O Wayfly possibilita que o profissional ou administrador verifique o andamento dos atendimentos de acordo com o status: agendado, finalizado, falta com direito à reposição, falta sem direito à reposição, profissional desmarcou.</p>
                                    </div>
                                </div>
                                <div className="col-md-7 mt-5 mt-md-0">
                                    <div className="sreen-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1300 914.1" className="screen-svg-background">
                                            <path d="M351,143c164.15-8.35,174.6-56.7,268-41,90.07,15.14,106.72,64.54,203,123,221.19,134.3,389.35,29,460,130,69.08,98.73-24.58,295.27-126,403C1026.32,895.74,792.25,985.69,636,905c-184.18-95.11-98.46-343.78-334-492-71.24-44.83-183.78-88-186-163-1.1-37.2,25.39-66.13,30-71C188.9,133.67,251.49,148.06,351,143Z" transform="translate(-59.86 -63.14)" style={{opacity: 0.2,fill: '#4794fe'}}></path>
                                            <path d="M316.67,111.34C496,102.22,507.44,49.39,609.49,66.54c98.41,16.55,116.6,70.52,221.8,134.4C1073,347.67,1256.7,232.65,1333.9,343c75.48,107.87-26.85,322.62-137.67,440.33C1054.54,933.8,798.79,1032.09,628.07,943.92,426.82,840,520.48,568.29,263.13,406.35c-77.84-49-200.8-96.11-203.23-178.1C58.7,187.6,87.64,156,92.68,150.67,139.55,101.15,207.93,116.87,316.67,111.34Z" transform="translate(-59.86 -63.14)" style={{fill: '#4794fe',opacity: 0.05}}></path>
                                            <circle cx="292.14" cy="500.86" r="6" style={{fill: '#9365D5'}}></circle>
                                            <circle cx="751.14" cy="76.86" r="4" style={{fill: '#fee28a'}}></circle>
                                            <circle cx="231.14" cy="34.86" r="6" style={{fill: '#ff9247'}}></circle>
                                        </svg>
                                        <div className="browser-mockup ml-auto skrollable skrollable-between" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3" style={{transform: 'translate(0px, 95.6px)'}}>
                                            <Image
                                                className="img-fluid image-shadow loading_src"
                                                alt="Dashboard com gráficos"
                                                data-was-processed="true"
                                                src={grafico.src}
                                                width={430}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{paddingBottom:200}}>
                    <div className="container">
                        <div className="section-body">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="sreen-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1300 914.1" className="screen-svg-background">
                                            <defs>
                                            <linearGradient id="screen01" x1="115.97" y1="517.19" x2="1305.76" y2="517.19" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#0088fe"></stop>
                                                <stop offset="1" stopColor="#d4edff"></stop>
                                            </linearGradient>
                                            </defs>
                                            <path d="M351,143c164.15-8.35,174.6-56.7,268-41,90.07,15.14,106.72,64.54,203,123,221.19,134.3,389.35,29,460,130,69.08,98.73-24.58,295.27-126,403C1026.32,895.74,792.25,985.69,636,905c-184.18-95.11-98.46-343.78-334-492-71.24-44.83-183.78-88-186-163-1.1-37.2,25.39-66.13,30-71C188.9,133.67,251.49,148.06,351,143Z" transform="translate(-59.86 -63.14)"  style={{opacity:0.06,fill:'url(#screen01)'}}></path>
                                            <path d="M316.67,111.34C496,102.22,507.44,49.39,609.49,66.54c98.41,16.55,116.6,70.52,221.8,134.4C1073,347.67,1256.7,232.65,1333.9,343c75.48,107.87-26.85,322.62-137.67,440.33C1054.54,933.8,798.79,1032.09,628.07,943.92,426.82,840,520.48,568.29,263.13,406.35c-77.84-49-200.8-96.11-203.23-178.1C58.7,187.6,87.64,156,92.68,150.67,139.55,101.15,207.93,116.87,316.67,111.34Z" transform="translate(-59.86 -63.14)" style={{fill:'#4794fe',opacity: 0.03}}></path>
                                            <circle cx="292.14" cy="500.86" r="6"  style={{fill: '#0088fe'}}></circle>
                                            <circle cx="751.14" cy="76.86" r="4"  style={{fill: '#fee28a'}}></circle>
                                            <circle cx="231.14" cy="34.86" r="6"  style={{fill: '#ff9247'}}></circle>
                                        </svg>
                                        <div className="browser-mockup skrollable skrollable-after" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3"  style={{transform:'translate(0px, 0px)',opacity:1}}>
                                            <Image
                                                className="img-fluid image-shadow loading_src" alt="Anamnese" data-was-processed="true"
                                                src={anamnese.src}
                                                width={430}
                                                height={200}
                                            />
                                        </div>
                                        <div className="mob-browser-mockup image-shadow skrollable skrollable-between" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,300px);opacity: 1" style={{transform: 'translate(0px, 184.8px)',opacity: 1}}>
                                            <Image
                                                className="img-fluid image-shadow loading_src" alt="Anamnese no aplicativo" data-was-processed="true"
                                                src={anamnesemobile.src}
                                                width={170}
                                                height={350}
                                            />
                                            <div className="mob-elems"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 order-sm-1 mb-5 mb-md-0">
                                    <div className="section-title-wrap--simple section-title-center-onMobile">
                                        <div className="section-title-inner d-inline-block">
                                            <span className="title-sep-hr"></span>
                                            <h2 className="section-title text-left">Anamnese</h2>
                                        </div>
                                        <p className="text-muted font-weight-light">Você pode realizar a anamnese diretamente pelo sistema, fazendo os registros da entrevista ou cadastrar os dados posteriormente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FeaturesNew />

                <Plan />

                <WhatsApp />
            </main>
            <Footer/>
        </div>
    )
}
