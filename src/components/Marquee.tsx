import { CSSProperties, ReactNode, useEffect, useState } from "react"
interface Props {
    children: ReactNode;
    config?: {
        speed?: number;
        direction?: "reverse" | "normal";
    };
    customStyle?: CSSProperties

}
function Marquee({ children, config, customStyle }: Props) {

    const [maqConfig, setMaqConfig] = useState({} as CSSProperties)
    useEffect(() => {
        if (config) {
            if (config.speed && config.direction) {
                setMaqConfig({ animationDuration: `${config.speed}ms`, animationDirection: config.direction })
            }
            else {
                if (config.speed) {
                    setMaqConfig({ animationDuration: `${config.speed}ms` })
                } else if (config.direction) {
                    setMaqConfig({ animationDirection: config.direction })
                }
            }
        }
    }, [config])
    return (
        <>
            <div className="maq-holder">
                <div className="marquee" style={{ ...maqConfig, ...customStyle }}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Marquee