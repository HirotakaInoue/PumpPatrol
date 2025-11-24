import "/src/assets/css/registorLabel.css"

export type RegistorLabelProps = {
    image : string,
    width : number,
    height: number,
    label: string,
    onClick: () => void
}

export const RegistorLabel = ({image, width, height, label, onClick} : RegistorLabelProps) => {

    return(
    <div className="registoreLabel">
        <button className="registorLabelButton" onClick={onClick}>
            <img src={image} width={width} height={height} />
            {label}
        </button>
    </div>
    )
}
