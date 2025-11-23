export type RegistorLabelProps = {
    image : string,
    width : number,
    height: number,
    label: string
}


export const RegistorLabel = ({image, width, height, label} : RegistorLabelProps) => {

    return(
        <div>
            <button>
                <img src={image} width={width} height={height} />
                {label}
            </button>
        </div>
    )

}
