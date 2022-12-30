import Image from 'next/image'
import carefly from '../../assets/images/carefly.png'

export default function Footer(){
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
                                            
                                            <li className="list-inline-item"><a href="https://www.instagram.com/carefly.com.br/" target="_blank" ><i className="icon-instagram"></i></a></li>
                                            
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