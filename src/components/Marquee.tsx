import { ReactNode } from "react"
interface Props {
    children: ReactNode;
}
function Marquee({ children }: Props) {
    return (
        <>
            <div className="maq-holder">
                <div className="marquee">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Marquee