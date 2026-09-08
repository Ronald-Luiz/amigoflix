import { useEffect, useRef, useState } from "react";

import ParticlesBackground from "./ParticlesBackground";

import {
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    CircleCheck,
    Clock3,
    Gamepad2,
    Headphones,
    Laptop,
    Monitor,
    Play,
    ShieldCheck,
    Smartphone,
    Star,
    Sparkles,
    Tablet,
    Tv,
    UsersRound,
    Wifi,
    Zap,
} from "lucide-react";

import tvCompleta from "./assets/arte.jpeg";
import mascot from "./assets/amigoflix.png";
import canais from "./assets/canais.webp";
import filmes from "./assets/filmes.webp";
import esportes from "./assets/esportes.webp";
import desenhos from "./assets/desenhos.webp";
import shows from "./assets/shows.webp";
import logo from "./assets/logo.png";
import video from "./assets/amigoflix.mp4";
import pix from "./assets/icons/pix.png";
import whatsappIcon from "./assets/icons/whatsapp.png";
import maxLogo from "./assets/icons/max-logo.svg";
import netflixLogo from "./assets/icons/netflix.png";
import primeVideoLogo from "./assets/icons/primevideo.png";
import disneyPlusLogo from "./assets/icons/dinseyplus.png";
import globoLogo from "./assets/icons/globo.png";
import rokuLogo from "./assets/icons/roku.png";
import paramountLogo from "./assets/icons/paramount.png";
import hboLogo from "./assets/icons/hbo.png";
import starLogo from "./assets/icons/star-channels-seeklogo.png";
import discoveryLogo from "./assets/icons/discovery-channel-logo.svg";

// =====================================================
// WHATSAPP
// =====================================================

const whatsappNumber = "5535988171523";
const TMDB_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDQ0MTQ1ZjdiYzZlZTc5NDY5YjU3ZGJhZThkMTYxMCIsIm5iZiI6MTY5OTMxOTM2Mi44OTUsInN1YiI6IjY1NDk4ZTQyMWFjMjkyN2IzMzg4NTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JnqrNQyxyQp7nfRbu-m_dXj2nUylALdbgQGrNLeLr2o";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const whatsapp = `https://wa.me/${whatsappNumber}`;

const buildWhatsAppLink = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// =====================================================
// CATEGORIAS
// =====================================================

const categories = [
    {
        image: canais,
        title: "Canais ao vivo",
        subtitle: "+2.000 canais",
        detail:
            "Mais de 2.000 canais ao vivo com qualidade HD, esportes, notícias e entretenimento pra toda a família.",
        features: [
            "Canais nacionais e internacionais",
            "Cobertura de esportes e notícias",
            "Qualidade de imagem estável",
            "Conteúdo para toda a família",
        ],
    },
    {
        image: filmes,
        title: "Mais de 45 Mil Títulos",
        subtitle: "+45 mil filmes e séries",
        detail:
            "Filmes, séries, documentários e lançamentos em uma biblioteca gigantesca e sempre atualizada.",
        features: [
            "+45 mil filmes e séries",
            "Atualização constante da biblioteca",
            "Conteúdo em alta qualidade",
            "Lançamentos e clássicos",
        ],
    },
    {
        image: esportes,
        title: "Esportes",
        subtitle: "Futebol, NBA, F1 e mais",
        detail:
            "Jogos ao vivo, campeonatos, eventos e cobertura completa de futebol, NBA, F1 e muito mais.",
        features: [
            "Futebol e campeonatos ao vivo",
            "NBA, F1 e eventos esportivos",
            "Cobertura em alta definição",
            "Sem travamentos",
        ],
    },
    {
        image: desenhos,
        title: "Desenhos",
        subtitle: "Conteúdo infantil",
        detail:
            "Animações, desenhos clássicos e programação segura para as crianças curtirem com a família.",
        features: [
            "Desenhos clássicos e novidades",
            "Animes populares dublados",
            "Canal infantil 24h",
            "Filmes infantis e familiares",
            "Conteúdo educativo",
            "Seguro para todas as idades",
        ],
    },
    {
        image: shows,
        title: "Shows & Música",
        subtitle: "Concertos e especiais",
        detail:
            "Shows, concertos, especiais musicais e momentos imperdíveis em alta definição.",
        features: [
            "Concertos e shows ao vivo",
            "Música para todos os gostos",
            "Especialidades e documentários",
            "Experiência cinematográfica",
        ],
    },
];

// =====================================================
// PLANOS
// =====================================================

const plans = [
    {
        name: "Plano mensal",
        detail: "1 dispositivo",
        price: "35,00",
        period: "mês",
        badge: "",
    },
    {
        name: "Oferta 3 meses",
        detail: "1 dispositivo",
        price: "90,00",
        period: "3 meses",
        badge: "Economize R$ 15,00",
    },
];

// =====================================================
// FAQ
// =====================================================

const faqs = [
    [
        "O que é o Amigo Flix?",
        "É uma plataforma completa de entretenimento com canais ao vivo, filmes, séries, esportes e conteúdo infantil.",
    ],
    [
        "Onde posso assistir?",
        "Em Smart TVs, TV Box, celulares, tablets, computadores, Xbox, Fire TV e outros dispositivos compatíveis.",
    ],
    [
        "Preciso de TV a cabo ou antena?",
        "Não. Você só precisa de uma conexão com a internet e um dispositivo compatível.",
    ],
    [
        "Como funciona o teste grátis de 6 horas?",
        "Solicite pelo WhatsApp e receba o acesso para testar a qualidade antes de assinar.",
    ],
    [
        "Quais formas de pagamento são aceitas?",
        "O pagamento é feito via Pix, de forma rápida e prática.",
    ],
    [
        "O que preciso para começar?",
        "Internet estável e um dispositivo compatível. Nossa equipe ajuda com toda a instalação.",
    ],
    [
        "E se travar?",
        "Nosso suporte especializado está disponível pelo WhatsApp para ajudar rapidamente.",
    ],
];

// =====================================================
// DEPOIMENTOS
// =====================================================

const testimonials = [
    [
        "Instalei na minha Smart TV Samsung e ficou sensacional! Canais de futebol ao vivo em 4K sem travar. Já indiquei pra todo mundo!",
        "Carlos Eduardo",
        "Caxambu, MG",
    ],
    [
        "O teste grátis me conquistou. Em 10 minutos estava assistindo na minha TV Box Android. Suporte super atencioso no WhatsApp.",
        "Fernanda Lima",
        "Baependi, MG",
    ],
    [
        "Minha família adora! Tem conteúdo pra criança, pra minha esposa e os jogos do Brasileirão na Smart TV da sala.",
        "Roberto Silva",
        "São Lourenço, MG",
    ],
    [
        "Paguei muito tempo em TV a cabo caro. Agora tenho muito mais conteúdo por menos da metade do preço.",
        "Ana Paula",
        "Três Corações, MG",
    ],
    [
        "Uso no celular quando viajo e na TV Box em casa. A qualidade é impressionante, filmes e séries com imagem cristalina.",
        "Marcos Vinícius",
        "Belo Horizonte, MG",
    ],
    [
        "Minha mãe de 65 anos aprendeu a usar sozinha na Smart TV. Interface simples e ativação super rápida.",
        "Juliana Costa",
        "Florianópolis, SC",
    ],
];

// =====================================================
// COMPONENTE BOTÃO
// =====================================================

function ActionLink({
    children,
    secondary = false,
    href,
    message = "Olá, vim pelo site e quero saber mais sobre o Amigo Flix.",
}) {
    const finalHref = href ?? buildWhatsAppLink(message);

    return (
        <a
            className={secondary ? "btn btn-secondary" : "btn btn-primary"}
            href={finalHref}
        >
            {children}
        </a>
    );
}

// =====================================================
// TÍTULO DAS SEÇÕES
// =====================================================

function SectionTitle({ eyebrow, children, subtitle }) {
    return (
        <div className="section-heading">
            {eyebrow && <span>{eyebrow}</span>}
            <h2>{children}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

// =====================================================
// APP
// =====================================================

export default function App() {
    const [openFaq, setOpenFaq] = useState(null);
    const [brand, setBrand] = useState(0);
    const [activeCategory, setActiveCategory] = useState(null);
    const [tmdbMovies, setTmdbMovies] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `${TMDB_BASE_URL}/movie/now_playing?language=pt-BR&page=1`,
                    {
                        headers: {
                            accept: "application/json",
                            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Erro ao carregar filmes do TMDB");
                }

                const data = await response.json();

                if (isMounted) {
                    setTmdbMovies(data.results.slice(0, 12));
                }
            } catch (error) {
                console.error(error);

                if (isMounted) {
                    setTmdbMovies([]);
                }
            }
        };

        fetchMovies();
        const intervalId = setInterval(fetchMovies, 600000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (!activeCategory) return;

        const handleCloseOnScroll = () => {
            setActiveCategory(null);
        };

        window.addEventListener("scroll", handleCloseOnScroll, {
            passive: true,
        });
        window.addEventListener("wheel", handleCloseOnScroll, {
            passive: true,
        });
        window.addEventListener("touchmove", handleCloseOnScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleCloseOnScroll);
            window.removeEventListener("wheel", handleCloseOnScroll);
            window.removeEventListener("touchmove", handleCloseOnScroll);
        };
    }, [activeCategory]);

    const brandCarouselRef = useRef(null);
    const brandRefs = useRef([]);

    const brands = [
        {
            name: "Samsung",
            os: "Tizen OS",
            models: [
                "Crystal UHD DU7000",
                "Crystal UHD AU8000",
                "QLED Q60D",
                "QLED Q80C",
                "Neo QLED QN90D",
                "The Frame LS03",
            ],
        },
        {
            name: "LG",
            os: "webOS",
            models: [
                "LG UHD UP77",
                "LG NanoCell N7",
                "LG OLED B3",
                "LG QNED QNED81",
                "LG CineBeam",
                "LG Smart TV 4K",
            ],
        },
        {
            name: "TCL",
            os: "Google TV / Roku TV",
            models: [
                "TCL C645",
                "TCL P735",
                "TCL Q6",
                "TCL P8",
                "TCL S5",
                "TCL Roku TV",
            ],
        },
        {
            name: "Philips",
            os: "Android TV / Titan OS",
            models: [
                "Philips 50PUS7304",
                "Philips 55PUS7807",
                "Philips 65OLED806",
                "Philips 75PUS8507",
                "Titan OS 55",
                "Philips Smart TV",
            ],
        },
        {
            name: "AOC / Multilaser",
            os: "Roku TV / Android TV",
            models: [
                "AOC Android TV",
                "Multilaser 4K",
                "AOC QLED 50",
                "Roku Smart TV",
                "Android TV Plus",
                "AOC UHD",
            ],
        },
        {
            name: "Sony",
            os: "Google TV",
            models: [
                "Sony Bravia XR",
                "Sony X80L",
                "Sony A80L",
                "Sony A90K",
                "Sony Google TV",
                "Sony Mini LED",
            ],
        },
        {
            name: "Roku / Fire TV / Chromecast",
            os: "Dispositivos externos",
            models: [
                "Roku Ultra",
                "Fire TV Stick 4K",
                "Chromecast 4K",
                "Fire TV Cube",
                "Roku HD",
                "Android TV Box",
            ],
        },
    ];

    const visibleBrands = Array.from(
        { length: 4 },
        (_, index) => brands[(brand + index) % brands.length]
    );

    const focusBrand = (index) => {
        setBrand(index);

        requestAnimationFrame(() => {
            brandRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        });
    };

    const scrollBrandCarousel = (direction) => {
        const nextIndex =
            (brand + direction + brands.length) % brands.length;

        focusBrand(nextIndex);
    };

    return (
        <main>
            <ParticlesBackground />

            {/* =================================================
                HERO
            ================================================= */}

            <section className="hero">
                <img
                    className="logo"
                    src={logo}
                    alt="Logotipo Amigo Flix"
                />

                <span className="pill">SUA TV COMPLETA</span>

                <h1>
                    SUA <strong>MELHOR ESCOLHA</strong>
                    <br />
                    EM ENTRETENIMENTO
                </h1>

                <p className="hero-sub">
                    +45 MIL TÍTULOS • ANIMES • ESPORTES • E MUITO MAIS!
                </p>

                <div className="hero-actions">
                    <ActionLink
                        message="Olá, vim pelo site e quero solicitar meu teste grátis de 6 horas do Amigo Flix."
                    >
                        <Sparkles size={18} />
                        🤩
                        Teste Grátis 6 horas
                    </ActionLink>

                    <ActionLink secondary href="#planos">
                        <Play size={17} />
                        Ver Planos
                    </ActionLink>
                </div>

                <a
                    className="whatsapp"
                    href={buildWhatsAppLink(
                        "Olá, vim pelo site e quero saber mais sobre o Amigo Flix."
                    )}
                >
                    <img src={whatsappIcon} alt="WhatsApp" />
                    <span>WhatsApp</span>
                    <b>(35) 98817-1523</b>
                </a>
            </section>



            {/* =================================================
                APPS
            ================================================= */}

            <section className="apps">
                <p>TUDO DOS SEUS APPS FAVORITOS EM UM SÓ LUGAR</p>

                <div className="apps-list">
                    {[
                        { name: "Max", icon: maxLogo },
                        { name: "Netflix", icon: netflixLogo },
                        { name: "Prime Video", icon: primeVideoLogo },
                        { name: "Disney+", icon: disneyPlusLogo },
                        { name: "GloboPlay", icon: globoLogo },
                        { name: "Apple TV+", icon: rokuLogo },
                        { name: "Paramount+", icon: paramountLogo },
                        { name: "HBO", icon: hboLogo },
                        {
                            name: "Star+",
                            icon: starLogo,
                        },
                        {
                            name: "Discovery+",
                            icon: discoveryLogo,
                        },
                    ].map(({ name, icon }) => (
                        <span className="app-pill" key={name}>
                            {icon ? (
                                <img
                                    src={icon}
                                    alt={name}
                                    className="app-icon"
                                />
                            ) : null}

                            <span>{name}</span>
                        </span>
                    ))}
                </div>
            </section>

            {/* =================================================
                VÍDEO
            ================================================= */}

            <section className="tmdb-showcase section">
                <SectionTitle
                    eyebrow="LANÇAMENTOS"
                    subtitle="Os filmes mais recentes em destaque para você acompanhar"
                >
                    Bombando!🔥
                </SectionTitle>

                <div className="tmdb-carousel" aria-live="polite">
                    <div className="tmdb-track">
                        {tmdbMovies.length > 0 ? (
                            [...tmdbMovies, ...tmdbMovies].map((movie, index) => (
                                <article
                                    className="tmdb-card"
                                    key={`${movie.id}-${index}`}
                                >
                                    <img
                                        src={
                                            movie.poster_path
                                                ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
                                                : logo
                                        }
                                        alt={movie.title}
                                    />
                                    <div className="tmdb-card-overlay">
                                        <span>{movie.release_date?.slice(0, 4) || "Novo"}</span>
                                        <strong>{movie.title}</strong>
                                    </div>
                                </article>
                            ))
                        ) : (
                            Array.from({ length: 6 }).map((_, index) => (
                                <div className="tmdb-card tmdb-card-skeleton" key={index} />
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className="video-showcase section">
                <SectionTitle
                    eyebrow="AMIGO FLIX EM AÇÃO"
                    subtitle="Veja a qualidade, o visual e a experiência em movimento"
                />

                <div className="video-shell">
                    <video
                        className="site-video"
                        src={video}
                        poster={logo}
                        controls
                        playsInline
                        muted
                        autoPlay
                        loop
                    >
                        Seu navegador não suporta vídeo HTML5.
                    </video>
                </div>
            </section>

            {/* =================================================
                INTRO
            ================================================= */}

            <section className="intro section">
                <div className="intro-copy">
                    <SectionTitle eyebrow="ENTRETENIMENTO SEM LIMITES">
                        Tudo que você ama,
                        <br />
                        <em>sem limites</em>
                    </SectionTitle>

                    <p>
                        Entretenimento ilimitado por um preço que cabe no seu
                        bolso. Rápido, fácil e seguro — ative em minutos pelo
                        WhatsApp.
                    </p>

                    <div className="checks">
                        {[
                            "Sem fidelidade",
                            "Suporte especializado",
                            "Atualizações constantes",
                            "Perfil para toda a família",
                        ].map((x) => (
                            <span key={x}>
                                <CircleCheck /> {x}
                            </span>
                        ))}
                    </div>
                </div>

                <img
                    src={tvCompleta}
                    alt="TV completa Amigo Flix"
                    className="tv-completa"
                />
            </section>

            {/* =================================================
                RAZÕES
            ================================================= */}

            <section className="reasons section">
                <SectionTitle eyebrow="POR QUE ESCOLHER">
                    5 Razões para ter <em>o nosso app</em>
                </SectionTitle>

                <div className="reason-layout">
                    <img
                        src={mascot}
                        alt="Mascote robô Amigo Flix"
                    />

                    <div className="reason-grid">
                        {[
                            [
                                Zap,
                                "Qualidade.",
                                "Imagem 4K/Full HD sem travamentos",
                            ],
                            [
                                ShieldCheck,
                                "Mais segurança.",
                                "Conexão estável e protegida",
                            ],
                            [
                                Headphones,
                                "Suporte rápido.",
                                "Atendimento ágil pelo WhatsApp",
                            ],
                            [
                                CircleCheck,
                                "Preço justo.",
                                "Planos a partir de R$ 35/mês",
                            ],
                            [
                                Wifi,
                                "Total estabilidade.",
                                "Servidores premium 24/7",
                            ],
                            [
                                Play,
                                "+ de 45 mil títulos",
                                "Filmes, séries, canais e esportes",
                            ],
                        ].map(([Icon, title, description]) => (
                            <article key={String(title)}>
                                <Icon />

                                <div>
                                    <h3>{String(title)}</h3>
                                    <p>{String(description)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* =================================================
                ANIVERSÁRIO
            ================================================= */}

            <section className="anniversary section">
                <div className="anniversary-copy">
                    <p className="anniversary-kicker">ESTAMOS A MAIS DE</p>
                    <h2>5 ANOS</h2>
                    <p className="anniversary-subtitle">NO MERCADO!</p>

                    <div className="anniversary-highlights">
                        <div className="anniversary-highlight">
                            <ShieldCheck />
                            <span>
                                <strong>EXPERIÊNCIA</strong>
                                <small>QUE FAZ A DIFERENÇA!</small>
                            </span>
                        </div>
                        <div className="anniversary-highlight">
                            <Star />
                            <span>
                                <strong>QUALIDADE</strong>
                                <small>QUE VOCÊ MERECE!</small>
                            </span>
                        </div>
                        <div className="anniversary-highlight">
                            <UsersRound />
                            <span>
                                <strong>COMPROMISSO</strong>
                                <small>COM VOCÊ SEMPRE!</small>
                            </span>
                        </div>
                    </div>

                    <p className="anniversary-thanks">
                        <Play size={13} fill="currentColor" />
                        Obrigado por fazer parte da nossa história!
                    </p>
                </div>

                <div className="anniversary-seal" aria-label="Mais de 2 anos de confiança e qualidade">
                    <div className="anniversary-stars">★★★★★</div>
                    <strong>+5</strong>
                    <span>ANOS</span>
                    <b>DE CONFIANÇA E QUALIDADE!</b>
                </div>
            </section>

            {/* =================================================
                CATÁLOGO
            ================================================= */}

            <section className="catalog section">
                <SectionTitle
                    eyebrow="MILHARES DE TÍTULOS"
                    subtitle="Canais ao vivo, filmes, esportes, desenhos e shows para toda a família"
                >
                    Explore por categoria
                </SectionTitle>

                <div className="category-grid">
                    {categories.map(
                        ({
                            image,
                            title,
                            subtitle,
                            detail,
                            features,
                        }) => (
                            <article
                                className="category-card"
                                key={title}
                                tabIndex={0}
                                onClick={() =>
                                    setActiveCategory({
                                        image,
                                        title,
                                        subtitle,
                                        detail,
                                        features,
                                    })
                                }
                                onKeyDown={(event) => {
                                    if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                    ) {
                                        event.preventDefault();

                                        setActiveCategory({
                                            image,
                                            title,
                                            subtitle,
                                            detail,
                                            features,
                                        });
                                    }
                                }}
                            >
                                <img src={image} alt={title} />

                                <div className="category-card-info">
                                    <strong>{title}</strong>
                                    <p>{detail}</p>
                                </div>

                                <div className="category-card-label">
                                    <h3>{title}</h3>
                                    <p>{subtitle}</p>
                                </div>
                            </article>
                        )
                    )}
                </div>

                {activeCategory && (
                    <div
                        className="category-modal-overlay"
                        onClick={() => setActiveCategory(null)}
                        role="presentation"
                    >
                        <div
                            className="category-modal"
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                            role="dialog"
                            aria-modal="true"
                        >
                            <button
                                className="category-modal-close"
                                onClick={() => setActiveCategory(null)}
                                aria-label="Fechar"
                            >
                                ×
                            </button>

                            <div className="category-modal-visual">
                                <img
                                    src={activeCategory.image}
                                    alt={activeCategory.title}
                                />

                                <div className="category-modal-title-wrap">
                                    <span className="category-modal-icon">
                                        ✦
                                    </span>

                                    <h3>{activeCategory.title}</h3>
                                </div>
                            </div>

                            <div className="category-modal-body">
                                <h4>O que está incluído:</h4>

                                <ul>
                                    {activeCategory.features.map(
                                        (feature) => (
                                            <li key={feature}>
                                                {feature}
                                            </li>
                                        )
                                    )}
                                </ul>

                                <a
                                    className="btn btn-primary category-modal-button"
                                    href={buildWhatsAppLink(
                                        "Olá, vim pelo site e quero ativar o teste grátis do Amigo Flix."
                                    )}
                                >
                                    <Sparkles size={18} />
                                    Ativar Teste Grátis
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* =================================================
                FAMÍLIA
            ================================================= */}

            <section className="family section">
                <SectionTitle subtitle="Milhares de horas de diversão sem complicação">
                    Conteúdo para toda a família
                </SectionTitle>

                <div className="feature-grid">
                    {[
                        [
                            Play,
                            "+ de 45 mil títulos",
                            "Filmes, séries, desenhos, animes e documentários",
                        ],
                        [
                            Zap,
                            "Esportes ao vivo",
                            "Futebol, campeonatos e eventos ao vivo",
                        ],
                        [
                            Smartphone,
                            "Assista onde quiser",
                            "Celular, Smart TV, tablet ou computador",
                        ],
                        [
                            Clock3,
                            "Instalação 100% remota",
                            "Ativação rápida, sem cabos e sem antena. Você só precisa de uma conexão com a internet.",
                        ],
                        [
                            ShieldCheck,
                            "Seguro e confiável",
                            "Privacidade e qualidade que você merece",
                        ],
                        [
                            Gamepad2,
                            "Infantil",
                            "Conteúdo seguro para toda a família",
                        ],
                    ].map(([Icon, title, description]) => (
                        <article key={String(title)}>
                            <Icon />

                            <h3>{String(title)}</h3>
                            <p>{String(description)}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* =================================================
                PLANOS
            ================================================= */}

            <section id="planos" className="pricing section">
                <SectionTitle
                    eyebrow="ATIVAÇÃO RÁPIDA E SEGURA"
                    subtitle=""
                >
                    Por apenas
                </SectionTitle>

                <p className="pix-note">
                    Pagamento via Pix — rápido e prático
                </p>

                <div className="pricing-video-wrap"></div>

                <div className="plan-grid">
                    {plans.map(
                        ({ name, detail, price, period, badge }, i) => (
                            <article
                                className={i === 1 ? "featured" : ""}
                                key={name}
                            >
                                {badge && (
                                    <span className="plan-badge">
                                        {badge}
                                    </span>
                                )}

                                <h3>{name}</h3>

                                <p className="screens">{detail}</p>

                                <div className="price">
                                    <small>R$</small>
                                    {price}
                                </div>

                                <p>
                                    / {period}
                                </p>

                                <ul>
                                    {[
                                        "+45 mil títulos e canais",
                                        "Esportes ao vivo",
                                        "Conteúdo infantil",
                                        "Suporte via WhatsApp",
                                    ].map((item) => (
                                        <li key={item}>
                                            <Check /> {item}
                                        </li>
                                    ))}
                                </ul>

                                <ActionLink
                                    message={`Olá, vim pelo site e quero assinar o ${name} do Amigo Flix.`}
                                >
                                    Assinar agora
                                </ActionLink>
                            </article>
                        )
                    )}
                </div>

                <div className="device-offer">
                    <Smartphone size={21} />

                    <div>
                        <strong>Mais de 2 dispositivos?</strong>
                        <p>Consulte a condição especial de R$ 30,00 por dispositivo/mês.</p>
                    </div>

                    <ActionLink
                        secondary
                        message="Olá, vim pelo site e quero consultar o plano para mais de 2 dispositivos."
                    >
                        Consultar plano
                    </ActionLink>
                </div>

                <div className="pix-box">
                    <Zap />

                    <div>
                        <img
                            src={pix}
                            alt="Pix"
                            className="pix-icon"
                        />

                        <h3>Pagamento via Pix</h3>

                        <p>
                            Rápido e prático: você paga o Pix e a
                            ativação é liberada na hora, direto pelo
                            WhatsApp.
                        </p>
                    </div>
                </div>
            </section>

            {/* =================================================
                TESTE GRÁTIS
            ================================================= */}

            <section className="trial">
                <div className="trial-icon" aria-hidden="true">
                    <Clock3 size={38} />
                </div>

                <h2>
                    Teste grátis por <em>6 horas</em>
                </h2>

                <p>
                    Solicite agora pelo WhatsApp, instale em poucos minutos e
                    veja a qualidade na sua TV.
                </p>

                <div className="trial-actions">
                    <span className="trial-hours">
                        <Clock3 size={16} />
                        Liberação de testes: 8:30 às 22:00
                    </span>

                    <ActionLink
                        message="Olá, vim pelo site e quero solicitar meu teste grátis de 6 horas do Amigo Flix."
                    >
                        <Sparkles size={18} />
                        Solicitar Teste Grátis
                    </ActionLink>
                </div>
            </section>

            {/* =================================================
                DISPOSITIVOS
            ================================================= */}

            <section className="devices section">
                <SectionTitle subtitle="Compatível com as principais marcas e sistemas">
                    Assista em qualquer dispositivo
                </SectionTitle>

                <div className="device-row">
                    {[
                        [Tv, "Smart TV"],
                        [Monitor, "TV Box"],
                        [Smartphone, "Smartphone"],
                        [Tablet, "Tablet"],
                        [Laptop, "Notebook"],
                        [Monitor, "Computador"],
                        [Gamepad2, "Xbox"],
                        [Tv, "Fire TV"],
                    ].map(([Icon, label]) => (
                        <div key={String(label)}>
                            <Icon />
                            <span>{String(label)}</span>
                        </div>
                    ))}
                </div>

                <div className="tv-brand-section">
                    <h2 className="tv-brand-title">
                        Escolha a marca da sua televisão
                    </h2>

                    <p className="tv-brand-subtitle">
                        Veja exemplos de modelos compatíveis com o
                        Amigo Flix
                    </p>

                    <div className="tv-brand-carousel">
                        <button
                            className="carousel-arrow"
                            aria-label="Marca anterior"
                            onClick={() =>
                                scrollBrandCarousel(-1)
                            }
                        >
                            <ChevronLeft />
                        </button>

                        <div
                            ref={brandCarouselRef}
                            className="brand-cards"
                        >
                            {visibleBrands.map((item, index) => {
                                const actualIndex =
                                    (brand + index) % brands.length;

                                return (
                                    <button
                                        ref={(node) => {
                                            brandRefs.current[actualIndex] =
                                                node;
                                        }}
                                        key={`${item.name}-${actualIndex}`}
                                        className={
                                            brand === actualIndex
                                                ? "brand-card active"
                                                : "brand-card"
                                        }
                                        onClick={() =>
                                            focusBrand(actualIndex)
                                        }
                                    >
                                        <div className="brand-card-icon">
                                            <Tv size={28} />
                                        </div>

                                        <div className="brand-card-name">
                                            {item.name}
                                        </div>

                                        <div className="brand-card-os">
                                            {item.os}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            className="carousel-arrow"
                            aria-label="Próxima marca"
                            onClick={() =>
                                scrollBrandCarousel(1)
                            }
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    <div className="models-panel">
                        <div className="models-panel-header">
                            <div>
                                <span className="models-panel-kicker">
                                    MODELOS COMPATÍVEIS
                                </span>

                                <h3>
                                    <span className="panel-brand">
                                        {brands[brand].name}
                                    </span>
                                </h3>
                            </div>

                            <ActionLink
                                secondary
                                message="Olá, vim pelo site e quero verificar se minha TV é compatível com o Amigo Flix."
                            >
                                Verificar minha TV
                            </ActionLink>
                        </div>

                        <div className="model-list">
                            {brands[brand].models.map((model) => (
                                <div
                                    className="model-item"
                                    key={model}
                                >
                                    <Check size={18} />
                                    <span>{model}</span>
                                </div>
                            ))}
                        </div>

                        <p className="models-panel-footer">
                            Instalação pela loja de apps da própria TV,
                            sem aparelho extra.
                        </p>
                    </div>
                </div>
            </section>

            {/* =================================================
                VANTAGENS
            ================================================= */}

            <section className="advantages">
                <h2>
                    VANTAGENS QUE
                    <br />
                    <em>VOCÊ SÓ ENCONTRA AQUI!</em>
                </h2>

                <div>
                    {[
                        "Sem Antena",
                        "Sem Contrato",
                        "Sem Fidelidade",
                        "Sem Multa",
                        "Preço Acessível",
                        "Qualidade de Sinal",
                        "Instalação 100% Remota",
                        "Suporte Garantido",
                    ].map((item) => (
                        <span key={item}>
                            <Check /> {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section className="faq section">
                <SectionTitle subtitle="Não encontrou sua dúvida? Chama no WhatsApp!">
                    Dúvidas frequentes
                </SectionTitle>

                <div className="faq-list">
                    {faqs.map(([question, answer], index) => (
                        <article key={question}>
                            <button
                                onClick={() =>
                                    setOpenFaq(
                                        openFaq === index ? null : index
                                    )
                                }
                            >
                                <span>{question}</span>

                                <ChevronDown
                                    className={
                                        openFaq === index ? "rotate" : ""
                                    }
                                />
                            </button>

                            {openFaq === index && <p>{answer}</p>}
                        </article>
                    ))}
                </div>
            </section>

            {/* =================================================
                DEPOIMENTOS
            ================================================= */}

            <section className="testimonials section">
                <SectionTitle
                    eyebrow="O QUE DIZEM NOSSOS CLIENTES"
                    subtitle="Milhares de famílias já transformaram sua experiência de entretenimento com o Amigo Flix."
                >
                    Depoimentos que inspiram
                </SectionTitle>

                <div className="testimonial-grid">
                    {testimonials.map(([quote, name, city]) => (
                        <article key={name}>
                            <div className="stars">★★★★★</div>

                            <p>“{quote}”</p>

                            <h3>{name}</h3>

                            <small>{city}</small>
                        </article>
                    ))}
                </div>
            </section>

            {/* =================================================
                FOOTER
            ================================================= */}

            <footer>
                <img src={logo} alt="Amigo Flix" />

                <h2>Pronto para assinar?</h2>

                <p>Chame no WhatsApp e ative em minutos.</p>

                <ActionLink
                    message="Olá, vim pelo site e quero saber mais sobre o Amigo Flix."
                >
                    (35) 98817-1523
                </ActionLink>

                <small>
                    © 2026 Amigo Flix. Todos os direitos reservados.
                </small>
                <small>
                    Desenvolvido por Ronald
                </small>
                <small>
                    contato: ronaldxpdeveloper@gmail.com
                </small>
            </footer>

            {/* =================================================
                WHATSAPP FLUTUANTE
            ================================================= */}

            <a
                className="floating"
                aria-label="Falar no WhatsApp"
                href={buildWhatsAppLink(
                    "Olá, vim pelo site e quero falar com o suporte do Amigo Flix."
                )}
            >
                <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                />
            </a>
        </main>
    );
}