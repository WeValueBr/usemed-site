import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

//import OfficeKInd from '../assets/images/pictures/office-kind-of-collaboration.jpg'
import preview01 from '../assets/images/pictures/preview/preview01.png'
import intro from '../assets/images/pictures/intro/intro-light.jpg'
import mobile from '../assets/images/pictures/intro/rtl-mob.jpg'
import mobile2 from '../assets/Screenshot_1.png';
import grafico from '../assets/grafico.png';
import fichapaciente from '../assets/fichapaciente.png';
import cadastropaciente from '../assets/cadastropaciente.png';
import anamnese from '../assets/anamnese.png';
import anamnesemobile from '../assets/anamnesemobile.png';
import evolucao from '../assets/evolucao.png';
import login from '../assets/login.png';
import carefly from '../assets/images/carefly.png'

function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="header-nav w-100">
                        <nav className="navbar navbar-light navbar-expand-lg has-mega-menu-advanced">                            
                            <div className='navbar-brand header-brand'>
                                <Image
                                        className="header-logo img-fluid loading_src"
                                        src={carefly.src}
                                        alt="logo"
                                        width={700}
                                        height={250}
                                    />
                            </div>
                            
                            <div className="header-menu collapse navbar-collapse">
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
                                </ul>
                            </div>

                            
                            <div className="header-btns">
                                <nav className="header-nav-btns">
                                    <ul className="list-inline m-0">
                                      
                                        <li className="list-inline-item">
                                            <a href="https://carefly.app" rel="noreferrer" target="_blank" className="btn btn-global btn-curved btn-overlay d-none d-lg-block">
                                               Entrar
                                            </a>                                            
                                            <button type="button" className="btn menu-toggle d-block d-lg-none" style={{padding:10}}><i className="icon--menu-line"></i></button>
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

function Footer(){
    return(
        <footer className="footer footer-global">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1001 189.75" className="footer-top-shape">
                <defs>
                    <linearGradient id="footer-top-shape" y1="66.87" x2="478" y2="66.87" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#db1253"></stop>
                        <stop offset="1" stopColor="#f02b34"></stop>
                    </linearGradient>
                </defs>
                <path d="M529.46,59.08l4.61,50.79L58,153.08,52.21,89.27c25.68-32.39,68.52-75,127.16-81.49,29.56-3.24,52.32,3.91,62.89,7.08C293.15,30.1,378.33,47.91,529.46,59.08Z" transform="translate(0 0)" style={{fill:'#f02b34',opacity:0.1}}></path>
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
                                            <i className="icon-marker align-self-center mr-3"></i>
                                            <div className="media-body">
                                                Rua Aurélio de Figueiredo, 330 - sala 201 - Campo Grande, Rio de Janeiro - RJ, 23052-000
                                            </div>
                                        </div>
                                        <div className="footer-contact-item media mb-3">
                                            <i className="icon-phone align-self-center mr-3"></i>
                                            <div className="media-body">
                                                +55 21 99045-2839
                                                <div className="d-block font-weight-bold">Seg - Sex 9h - 19h</div>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item media mb-3">
                                            <i className="icon-new-post align-self-center mr-3"></i>
                                            <div className="media-body">
                                                comercial@carefly.com.br
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
                                            
                                            <li className="list-inline-item"><a href="https://www.instagram.com/carefly.com.br/" rel="noreferrer" target="_blank" ><i className="icon-instagram"></i></a></li>
                                            
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
                                    src={carefly.src}
                                    alt="logo"
                                    width={500}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>

                    
                    <div className="row rules align-items-center">
                        <div className="col-md-8 col-sm-7 col-12">
                            <p>Otimizamos seu tempo para que você possa voar.</p>
                        </div>
                        
                        <div className="footer-copyright my-2 col-12">
                            <p>Copyright © 2022 Todos os direitos reservados por <strong> Carefly.</strong></p>
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
                            <h3 className="font-lg">Básico</h3>
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
                                
                            </ul>
                            <div className="price-bottom same-height" style={{height: 112.797}}>
                                {
                                    type == false ?
                                        <div className="price-table-price font-weight-bold font-lg" data-period="monthly">R$ 40,00 <small>/mês</small> <br/> </div>
                                    :
                                        <div className="price-table-price font-weight-bold font-lg" data-period="monthly">
                                            R$ 420,00 <small>/mês</small>                                           
                                        </div>
                                }
                                <small>por usuário</small>
                                <div className="mt-3 text-center">
                                    <a href="#" className="btn btn-success btn-curved btn-overlay">Comece agora</a>
                                </div>
                            </div>
                        </div>
                        <div className="price-table-item featured" data-plan="monthly">
                            <span className="price-table-label bg-warning text-white">Em breve</span>
                            <i className="icon-aircraft"></i>
                            <h3 className="font-lg">Plus</h3>
                            <ul className="price-table-detail font-regular font-weight-light mt-3 mb-4">
                                <li style={{fontWeight:'bold'}}><b>Tudo do plano Básico +</b></li>
                                <li>Contas a pagar</li>
                                <li>Contas a receber</li>
                                <li>Relatório de pagamento</li>                            
                            </ul>
                            <div className="price-bottom same-height" style={{height: 112.797}}>
                                {
                                    type == false ?
                                        <div className="price-table-price font-weight-bold font-lg" data-period="monthly">R$ 50,00 <small>/mês</small> <br/> </div>
                                    :
                                        <div className="price-table-price font-weight-bold font-lg" data-period="monthly">
                                            R$ 540,00 <small>/mês</small>                                           
                                        </div>
                                }
                                <small>por usuário</small>
                                <div className="mt-3 text-center">
                                    <a href="#" className="btn btn-success btn-curved btn-overlay disabled">Comece agora</a>
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
                        <stop offset="0.23" stopColor="#fbeec4" stopOpacity="0.28"></stop>
                        <stop offset="0.46" stopColor="#fcf1cf" stopOpacity="0.23"></stop>
                        <stop offset="0.7" stopColor="#fdf6e0" stopOpacity="0.15"></stop>
                        <stop offset="0.93" stopColor="#fffdf7" stopOpacity="0.04"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <path d="M720,1c8.32,33.56,15.26,81.37,7,137C710.67,248,607.74,263.87,573,385c-5.78,20.17-19.81,71.27-6,131,22.29,96.44,106.78,170.59,190,200,96.59,34.13,163,2.14,392-47,116.26-25,207-45.08,268-53V1Z" transform="translate(-561.11 -1)" style={{fill: '#fbedc1',opacity: 0.29}}></path>
                    <path d="M965.71,50.85c-10.33,5.47-118.29,62.6-105.42,143.43,10.62,66.68,98.4,116.79,170.57,100.33,93.17-21.25,122.41-126.14,117.87-181.56-.6-7.37-9.42-50.45-44.69-74.07C1052.89,4.72,986.63,39.79,965.71,50.85Z" transform="translate(-561.11 -1)" style={{fill: 'url(#a)'}}></path>
                    <g style={{opacity: 0.4}}>
                        <line x1="124.46" y1="167.19" x2="40.09" y2="192" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="150.12" y1="183.1" x2="27.62" y2="219.12" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="164.16" y1="200.08" x2="25.46" y2="240.87" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="176.66" y1="240.18" x2="37.6" y2="281.08" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="173.19" y1="220.1" x2="29.53" y2="262.35" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="174.33" y1="263.54" x2="52.69" y2="299.32" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                        <line x1="162.78" y1="288.83" x2="76.55" y2="314.19" style={{fill: 'none',stroke: '#fbedc1',strokeMiterlimit: 10,strokeWidth: 3}}></line>
                    </g>
                    </svg>
                </figure>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
  return (
    <div >
        <Head>
            <title>CAREFLY - Otimizamos seu tempo para que você possa voar.</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="content" id="main">
            <section className="section position-static section-hiro d-flex overflow-hidden" style={{paddingBottom:200}}>
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-xl-5 col-lg-6 col-md-6 col-12 hiro-text pl-md-5 pt-5 pt-md-0 text-md-left text-center">
                            <h1 className="hiro-title font-uxl font-xxxl-onMobile font-weight-medium mb-4">
                                CAREFLY
                            </h1>
                            <p className="font-weight-light font-md font-regular-onMobile">
                                O sistema de gestão que nasce para revolucionar a administração do seu consultório ou clínica. Otimizamos seu tempo para que você possa voar!
                            </p>
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
                                        src={fichapaciente.src}                                        
                                        width={500}
                                        height={300}
                                    />
                                    <div className="card-img-overlay item-overlay">
                                        <div className="item-overlay-content">
                                            <a href="#" className="btn text-white"><i className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="card item-has-overlay"  style={{right:32,top:280}}>
                                    <Image
                                        className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                        src={cadastropaciente.src}                                        
                                        width={500}
                                        height={300}
                                    />
                                    <div className="card-img-overlay item-overlay item-overlay-purple">
                                        <div className="item-overlay-content">
                                            <a href="#" className="btn text-white"><i className="icon-circled-arrow-pointing-up-and-left font-xxl"></i></a>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="card item-has-overlay"  style={{right:300,top:84}}>
                                    <Image
                                        className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                        src={anamnese.src}
                                        
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
                                <div className="card item-has-overlay"  style={{right:204,top:177}}>
                                    <Image
                                        className="card-img card-img-cover rounded-0 loading_src" alt="Image Description" data-was-processed="true"
                                        src={login.src}
                                        
                                        width={500}
                                        height={300}
                                    />
                                    <div className="card-img-overlay item-overlay item-overlay-success">
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

            <section className="section" id="features" style={{paddingBottom:0}}>                
                <div className="hexagon-back hexagon-left">
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
                                            className="img-fluid image-shadow loading_src" alt="Image Description" data-was-processed="true"
                                            src={fichapaciente.src}                                            
                                            width={440}
                                            height={200}
                                        />
                                    </div>
                                    <div className="browser-mockup skrollable skrollable-after" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3"  style={{transform:'translate(0px, 0px)',opacity:1}}>
                                        <Image
                                            className="img-fluid image-shadow loading_src" alt="Image Description" data-was-processed="true"
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
                <div className="hexagon-back hexagon-right">
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
                                    <p className="text-muted font-weight-light">O Carefly possibilita que o profissional ou administrador verifique o andamento dos atendimentos de acordo com o status: agendado, finalizado, falta com direito à reposição, falta sem direito à reposição, profissional desmarcou.</p>
                                </div>
                            </div>
                            <div className="col-md-7 mt-5 mt-md-0">
                                <div className="sreen-wrapper">                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1300 914.1" className="screen-svg-background">
                                        <path d="M351,143c164.15-8.35,174.6-56.7,268-41,90.07,15.14,106.72,64.54,203,123,221.19,134.3,389.35,29,460,130,69.08,98.73-24.58,295.27-126,403C1026.32,895.74,792.25,985.69,636,905c-184.18-95.11-98.46-343.78-334-492-71.24-44.83-183.78-88-186-163-1.1-37.2,25.39-66.13,30-71C188.9,133.67,251.49,148.06,351,143Z" transform="translate(-59.86 -63.14)" style={{opacity: 0.2,fill: '#FFDD6E'}}></path>
                                        <path d="M316.67,111.34C496,102.22,507.44,49.39,609.49,66.54c98.41,16.55,116.6,70.52,221.8,134.4C1073,347.67,1256.7,232.65,1333.9,343c75.48,107.87-26.85,322.62-137.67,440.33C1054.54,933.8,798.79,1032.09,628.07,943.92,426.82,840,520.48,568.29,263.13,406.35c-77.84-49-200.8-96.11-203.23-178.1C58.7,187.6,87.64,156,92.68,150.67,139.55,101.15,207.93,116.87,316.67,111.34Z" transform="translate(-59.86 -63.14)" style={{fill: '#FFDD6E',opacity: 0.05}}></path>
                                        <circle cx="292.14" cy="500.86" r="6" style={{fill: '#9365D5'}}></circle>
                                        <circle cx="751.14" cy="76.86" r="4" style={{fill: '#fee28a'}}></circle>
                                        <circle cx="231.14" cy="34.86" r="6" style={{fill: '#ff9247'}}></circle>
                                    </svg>
                                    <div className="browser-mockup ml-auto skrollable skrollable-between" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,200px);opacity: 0.3" style={{transform: 'translate(0px, 95.6px)', opacity: 0.6654}}>
                                       
                                        <Image
                                            className="img-fluid image-shadow loading_src" alt="Image Description" data-was-processed="true"
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
                <div className="hexagon-back hexagon-left">
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
                                            className="img-fluid image-shadow loading_src" alt="Image Description" data-was-processed="true"
                                            src={anamnese.src}
                                            
                                            width={430}
                                            height={200}
                                        />
                                    </div>
                                    <div className="mob-browser-mockup image-shadow skrollable skrollable-between" data-center="transform:translate(0,0px);opacity: 1" data-500-center="transform:translate(0,300px);opacity: 1" style={{transform: 'translate(0px, 184.8px)',opacity: 1}}>
                                       
                                        <Image
                                            className="img-fluid image-shadow loading_src" alt="Image Description" data-was-processed="true"
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

            <Plan />
        </main>
        <Footer/>
    </div>
  )
}
