import { useMemo } from "react";
import Particles, {
    ParticlesProvider,
    useParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({ reducedMotion = false }) {
    return (
        <ParticlesProvider init={loadSlim}>
            <ParticleCanvas reducedMotion={reducedMotion} />
        </ParticlesProvider>
    );
}

function ParticleCanvas({ reducedMotion }) {
    const { loaded } = useParticlesProvider();

    const options = useMemo(
        () => {
            const isReduced = !!reducedMotion;

            return {
                fullScreen: {
                    enable: true,
                    zIndex: 0,
                },

                background: {
                    color: {
                        value: "transparent",
                    },
                },

                fpsLimit: isReduced ? 24 : 60,

                particles: {
                    number: {
                        value: isReduced ? 18 : 65,
                        density: {
                            enable: true,
                            area: isReduced ? 1400 : 900,
                        },
                    },

                    color: {
                        value: [
                            "#ffffff",
                            "#b56cff",
                            "#7c3aed",
                            "#38bdf8",
                        ],
                    },

                    opacity: {
                        value: isReduced ? 0.18 : 0.35,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 0.4,
                            minimumValue: 0.12,
                        },
                    },

                    size: {
                        value: {
                            min: 1,
                            max: isReduced ? 2 : 3,
                        },
                    },

                    move: {
                        enable: true,
                        speed: isReduced ? 0.2 : 0.6,
                        direction: "none",
                        random: true,
                        straight: false,

                        outModes: {
                            default: "out",
                        },
                    },

                    links: {
                        enable: !isReduced,
                        distance: isReduced ? 80 : 140,
                        color: "#9b6cff",
                        opacity: isReduced ? 0.08 : 0.14,
                        width: 1,
                    },
                },

                interactivity: {
                    events: {
                        onHover: {
                            enable: !isReduced,
                            mode: "grab",
                        },

                        onClick: {
                            enable: !isReduced,
                            mode: "push",
                        },

                        resize: {
                            enable: true,
                        },
                    },

                    modes: {
                        grab: {
                            distance: 160,

                            links: {
                                opacity: 0.25,
                            },
                        },

                        push: {
                            quantity: 2,
                        },
                    },
                },

                detectRetina: true,
            };
        },
        [reducedMotion]
    );

    if (!loaded || reducedMotion) {
        return null;
    }

    return <Particles id="tsparticles" options={options} />;
}