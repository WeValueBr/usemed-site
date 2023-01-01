import Head from 'next/head'

import { useEffect,useState } from 'react'

export default function Home() {
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setTimeout(setLoading(false), 3000);

        return () => {
            
        }
    }, [])


    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="language" content="pt-BR" />
                <title>CAREFLY - Otimizamos seu tempo para que você possa voar.</title>
                <meta name="description" content="Agenda, evolução por consulta, cadastro de paciente, expediente e terapeutas, anamnese, área para registro do plano de tratamento e orientações parentais." />
                <meta name="robots" content="index" />
                <meta name="author" content="carefly" />
                <meta name="keywords" content="Agenda, evolução por consulta, cadastro de paciente, expediente e terapeutas, anamnese, área para registro do plano de tratamento e orientações parentais."></meta>
            </Head>

            <div className="preloader" style={{display:loading ? 'block' : 'none'}}>
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="error-area" style={{textAlign:'left'}}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <br/>
                                <h2>CONFIDENCIALIDADE</h2>
                                <p>Na forma como utilizada neste Termo, &quot;Informação Confidencial&quot; significa todo dado e informação de natureza confidencial, incluindo, sem limitação, a Plataforma e demais softwares e APIs, os segredos industriais e de negócios, financeiros, operacionais, econômicos, estratégicos, informações técnicas e qualquer outra informação de negócios relevante e quaisquer de suas cópias ou arquivos, quer tenham sido apresentadas de forma oral ou por escrito, por uma parte (&quot;Parte Divulgadora&quot;) à outra parte (&quot;Parte Receptora&quot;) nos termos deste Termo.</p>
                                <p>As Informações Confidenciais não incluirão informações que (i) sejam ou se tornem de domínio público por qualquer meio, exceto se resultante de violação deste Termo; (ii) sejam de conhecimento da Parte Receptora à época da divulgação pela Parte Divulgadora, desde que tal conhecimento esteja documentado em arquivos que sejam de propriedade da Parte Receptora antes de tal divulgação; (iii) sejam posteriormente recebidas pela Parte Receptora de boa-fé através de um terceiro não relacionado que tivesse o direito de divulgar tais informações e (iv) tenham sido aprovadas por escrito como sendo de divulgação não restrita pela Parte Divulgadora.</p>
                                <p>As Partes concordam que, sem o consentimento escrito da outra Parte, não poderão divulgar, direta ou indiretamente, no todo ou em parte, individualmente ou em conjunto com terceiros, qualquer Informação Confidencial a qualquer pessoa que não esteja vinculada a este Termo que necessite conhecer tal Informação Confidencial para os propósitos contemplados neste Termo. As Partes concordam ainda em: (i) obter, de qualquer indivíduo que necessite receber e que receba qualquer Informação Confidencial da outra parte, um compromisso de confidencialidade e de uso restrito, de acordo com os termos e condições aqui estabelecidas; e (ii) fazer valer por todas as formas tais compromissos e assistir ativamente a Parte Divulgadora na proteção de suas Informações Confidenciais.</p>
                                <p>A Parte Receptora somente poderá divulgar as Informações Confidenciais quando exigido, nos casos a seguir: (i) quando a divulgação da Informação Confidencial for necessária para um procedimento administrativo ou judicial, desde que a Parte Receptora tenha primeiramente notificado a Parte Divulgadora por escrito a respeito da exigência de divulgação, com o intuito de permitir que a Parte Divulgadora defenda, limite ou proteja a Informação Confidencial; (ii) quando a divulgação da Informação Confidencial for exigida por decisão judicial baseada em lei; ou (iii) quando a Parte Divulgadora tenha dado seu consentimento prévio e por escrito para a divulgação da Informação Confidencial.</p>
                                <p>A obrigação de confidencialidade prevista nesta cláusula vigorará durante toda a vigência do Termo e pelo prazo de 02 (dois) anos, a contar de sua rescisão.</p>
                                <h2>PRIVACIDADE E PROTEÇÃO DE DADOS</h2>  
                                <p>As Partes se comprometem a cumprir toda a legislação aplicável sobre segurança da informação, privacidade e proteção de dados, inclusive (sempre e quando aplicáveis) a Constituição Federal, o Código de Defesa do Consumidor, o Código Civil, o Marco Civil da Internet (Lei Federal n. 12.965/2014), seu decreto regulamentador (Decreto 8.771/2016), a Lei Geral de Proteção de Dados (Lei Federal n. 13.709/2018), e demais normas setoriais ou gerais sobre o tema, se comprometendo a tratar os dados pessoais acessados em virtude deste Termo e nas formas dispostas neste instrumento, sem transferi-los a qualquer terceiro, exceto se expressamente autorizado por este ou outro instrumento que as vincule.</p>
                                <p>O Usuário Contratante declara, ainda, estar ciente e de acordo com as Políticas de Segurança da Informação e Privacidade e Proteção de Dados Pessoais da CAREFLY.</p>
                                <p>O pagamento de qualquer indenização eventualmente devido pela CAREFLY em razão dos serviços disponibilizados, seja por si ou por seus subcontratados, ficará condicionado à comprovação de sua responsabilidade, por sentença judicial transitada em julgado. A reparação será devida na exata medida da culpabilidade no evento lesivo.</p>
                                <p>Caso o Usuário Contratante, independente de culpa, não atender às suas obrigações legais, contratuais e as disposições do presente Termo relacionadas aos Dados Pessoais, o Usuário Contratante deverá: (i) responsabilizar-se, direta ou regressivamente, única e exclusivamente, por todos os prejuízos, indenizações, multas, condenações judiciais ou administrativas ou quaisquer outras despesas oriundas de todos e quaisquer danos causados à CAREFLY; e (ii) responsabilizar-se por toda e qualquer reclamação, contestação ou divergência que a CAREFLY venha a ter junto aos titulares de Dados Pessoais, autoridades e/ou terceiros, comprometendo-se, inclusive, a assumir exclusivamente o polo passivo de eventual demanda administrativa ou judicial.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
