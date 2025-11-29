
export type RegistorButtonProps = {
    label: string
}

export const RegistorButton = ({label}:RegistorButtonProps) => {
    return (
        <div className="p-4">
            <button className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                {label}
            </button>
        </div>
    )
}