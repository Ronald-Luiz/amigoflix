import { useMemo } from "react";
import Particles, {
    ParticlesProvider,
    useParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
    return (
        <ParticlesProvider init={loadSlim}>
            <ParticleCanvas />
        </ParticlesProvider>
    );
}

function ParticleCanvas() {
    const { loaded } = useParticlesProvider();

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: 0,
            },

            background: {
                color: {
                    value: "transparent",
                },
            },

            fpsLimit: 60,

            particles: {
                number: {
                    value: 65,
                    density: {
                        enable: true,
                        area: 900,
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
                    value: 0.35,
                    random: true,
                    animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0.15,
                    },
                },

                size: {
                    value: {
                        min: 1,
                        max: 3,
                    },
                },

                move: {
                    enable: true,
                    speed: 0.6,
                    direction: "none",
                    random: true,
                    straight: false,

                    outModes: {
                        default: "out",
                    },
                },

                links: {
                    enable: true,
                    distance: 140,
                    color: "#9b6cff",
                    opacity: 0.14,
                    width: 1,
                },
            },

            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },

                    onClick: {
                        enable: true,
                        mode: "push",
                    },

                    resize: {
                        enable: true,
                    },
                },

                modes: {
                    grab: {
                        distance: 180,

                        links: {
                            opacity: 0.3,
                        },
                    },

                    push: {
                        quantity: 3,
                    },
                },
            },

            detectRetina: true,
        }),
        []
    );

    if (!loaded) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
        />
    );
}