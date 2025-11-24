
export type RegistorButtonProps = {
    label: string
}

export const RegistorButton = ({label}:RegistorButtonProps) => {
    return (
        <div>
            <button>
                {label}
            </button>
        </div>
    )
}