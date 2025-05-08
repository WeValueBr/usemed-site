import Head from 'next/head'
import favicon from '../assets/images/favicon.ico'
import {Footer, Header, WhatsApp} from "./index";
import {useEffect, useRef} from "react";

export default function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        console.log(video)

        const handleLoadedMetadata = () => {
            video.currentTime = 2; // Inicia a partir de 60 segundos
        };

        if (video) {
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (video) {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, []);


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
                            <span class="title-sep"><span>CASO DE SUCESSO</span></span>
                            <h2 class="section-title">Espaço <span class="d-block font-weight-light">Aline Mercier.</span></h2>
                        </div>
                    </div>
                    <div class="container" style={{display:"flex"}}>
                        <video autoPlay ref={videoRef} width="40%" height="auto" controls style={{borderRadius:10}}>
                            <source  src="/aline.MOV" type="video/mp4" />
                        </video>
                        <div style={{padding:30}}>
                            <p>
                                Há cerca de 3 meses, o Espaço Aline Mercier passou a utilizar o sistema Wayfly, e desde então, a rotina da equipe passou por uma verdadeira transformação.

                                Segundo Aline, fundadora do espaço, a mudança mais impactante foi na organização das informações dos pacientes. O sistema facilitou muito o preenchimento das evoluções, anamneses e plano terapêutico, tudo de forma centralizada e acessível. “Antes era tudo feito no papel. Agora está tudo ali, organizado, com fácil acesso”, conta.

                                Outro destaque foi a emissão automática de notas fiscais, que acontece logo após o pagamento. Isso reduziu drasticamente o tempo gasto com tarefas administrativas e trouxe mais segurança para os profissionais. “O sistema faz tudo pra você. Isso facilita demais o nosso dia a dia.”

                                Além disso, Aline destacou a usabilidade da plataforma: mesmo quem não tem muita familiaridade com tecnologia consegue usar sem dificuldade. Com isso, a equipe ganhou tempo e pôde focar ainda mais no que realmente importa: o atendimento de qualidade aos pacientes.

                                O resultado? Mais agilidade, organização e tranquilidade para toda a equipe.


                            </p>
                        </div>
                    </div>
                </section>
                <WhatsApp />
            </main>
            <Footer/>
        </div>
    )
}
