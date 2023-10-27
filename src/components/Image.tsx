interface Props {
    imageSource: string;
    className?: string;
    id?: string;
    floatPic?: string;
    textOnFloat?: string;
    csx?: {
        m?: number;
        my?: number;
    };
}

function Image({ imageSource, className, id, floatPic, textOnFloat, csx }: Props) {
    return (
        <>
            <div style={csx && { margin: csx.m ? `${csx.m}px` : (csx.my ? `${csx.my}px 0px` : "0px") }} className={className ? className + " img-wrapper" : "img-wrapper"}>
                <div id={id && id} className="imgComp" style={{ background: `url(${String(imageSource)})` }}>

                </div>
                <div data-floatimg-text={textOnFloat ? textOnFloat : "Delicious"} className="floatPic" style={{ background: `url(${floatPic})` }}></div>

            </div>
        </>
    )
}

export default Image