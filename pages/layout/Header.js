import Image from 'next/image'
import carefly from '../../assets/images/carefly.png'
export default function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="header-nav w-100">
                        <nav className="navbar navbar-light navbar-expand-lg has-mega-menu-advanced">                            
                            <a className="navbar-brand header-brand" href="../html/index-intro.html">
                            <Image
                                    className="header-logo img-fluid loading_src"
                                    src={carefly.src}
                                    alt="logo"
                                    width={700}
                                    height={250}
                                />
                                
                            </a>
                            
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
                                            <a href="https://carefly.app" target="_blank" className="btn btn-global btn-curved btn-overlay d-none d-lg-block">
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