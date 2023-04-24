import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react';
import Link from 'next/link'
import carefly from '../assets/images/carefly.png'
import carefly2 from '../assets/images/carefly2.png'
import favicon from '../assets/images/favicon.ico'

function Header(){

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
                                        <div className="nav-link" >
                                            <Link href="/#main"><span style={{color:'#000',cursor:'pointer'}}>Início</span></Link>
                                        </div>

                                    </li>
                                    <li className="nav-item dropdown mega-menu-advanced-wrapper">
                                        <div className="nav-link" >
                                            <Link href="/#features"><span style={{color:'#000',cursor:'pointer'}}>Funcionalidades</span></Link>
                                        </div>

                                    </li>
                                    <li className="nav-item dropdown mega-menu-advanced-wrapper">
                                        <div className="nav-link" >
                                            <Link href="/#plan"><span style={{color:'#000',cursor:'pointer'}}> Preços e planos</span></Link>
                                        </div>
                                      
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
                                                <div className="nav-link" >
                                                    <Link href="/#main"><span style={{color:'#fff',cursor:'pointer'}}>Início</span></Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link" >
                                                    <Link href="/#features"><span style={{color:'#fff',cursor:'pointer'}}>Funcionalidades</span></Link>
                                                </div>

                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link" >
                                                    <Link href="/#plan"><span style={{color:'#fff',cursor:'pointer'}}>Preços e planos</span></Link>
                                                </div>

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
                <section class="section section-more-padding pt-5 overflow-hidden">
                    <div class="section-title-wrap text-center pt-5">
                        <div class="section-title-inner d-inline-flex">
                            <span class="title-sep"><span>APRESENTAÇÃO</span></span>
                            <h2 class="section-title">Sistema <span class="d-block font-weight-light">Wayfly.</span></h2>
                        </div>
                    </div>
                    <div class="container">
                        <video width="100%" height="auto" controls style={{borderRadius:10}}>
                            <source src="https://wevaluebrasil.s3.amazonaws.com/apresentacao/Apresentacao.mp4" type="video/mp4" />

                        </video>
                    </div>
                </section>






                <div style={{bottom: 20,display: 'block',position: 'fixed',right: 20,zIndex: 999,width: 60}}>
                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521975336733&amp;text=Olá, gostaria de informações sobre o sistema Wayfly" >
                        <svg viewBox="0 0 60 60" fill="none">
                            <path d="M30 60C13.456 60 0 46.536 0 29.994 0 13.453 13.456 0 30 0s30 13.453 30 29.994C60 46.537 46.544 60 30 60z" fill="#00C52B"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.564 13.5C21.979 13.5 15 20.703 15 29.554c0 3.119.86 6.111 2.484 8.704l-2.361 5.37a1.429 1.429 0 00.208 1.492c.264.322.642.497 1.029.497.123 0 .236-.02.359-.048l6.516-1.843a15.197 15.197 0 007.329 1.891c8.584 0 15.563-7.203 15.563-16.063 0-8.85-6.979-16.054-15.564-16.054zm0 29.31c-2.276 0-4.505-.624-6.47-1.803a1.32 1.32 0 00-1.048-.146l-4.259 1.208 1.483-3.372a1.46 1.46 0 00-.133-1.404 13.441 13.441 0 01-2.427-7.749c0-7.31 5.761-13.256 12.844-13.256 7.083 0 12.844 5.946 12.844 13.256.01 7.32-5.752 13.266-12.835 13.266z" fill="#fff"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M36.551 31.962c-.651-.4-1.501-.848-2.266-.526-.586.253-.963 1.199-1.35 1.686-.199.254-.426.293-.728.166-2.21-.907-3.91-2.437-5.128-4.533-.208-.321-.17-.584.076-.887.368-.448.83-.955.935-1.56.104-.604-.17-1.305-.416-1.841-.311-.683-.651-1.667-1.322-2.057-.614-.36-1.417-.156-1.964.302-.945.79-1.398 2.037-1.38 3.265 0 .351.048.702.124 1.034.188.809.557 1.569.963 2.29a19.19 19.19 0 001 1.58c1.181 1.656 2.655 3.099 4.355 4.171.85.536 1.765 1.014 2.72 1.336 1.066.36 2.01.74 3.163.516 1.2-.234 2.39-1.004 2.87-2.203.143-.35.209-.75.133-1.12-.17-.78-1.18-1.239-1.785-1.619z" fill="#fff"></path>
                        </svg>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
