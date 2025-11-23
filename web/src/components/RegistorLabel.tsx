import "/src/assets/css/registorLabel.css"

export type RegistorLabelProps = {
    image : string,
    width : number,
    height: number,
    label: string
}

export const RegistorLabel = ({image, width, height, label} : RegistorLabelProps) => {

    return(
    <div className="registoreLabel">
        <button className="registorLabelButton">
            <img src={image} width={width} height={height} />
            {label}
        </button>
    </div>
    )
}
