
export type RegistorButtonProps = {
    label: string
}

export const RegistorButton = ({label}:RegistorButtonProps) => {
    return (
        <div className="p-6">
            <button
                className="group relative w-full overflow-hidden bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold py-4 px-8 border-2 border-[var(--color-primary-dark)] hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.5rem',
                    letterSpacing: '0.15em',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                }}
            >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                     style={{ background: 'var(--gradient-secondary)' }} />

                <span className="relative z-10 uppercase tracking-widest">
                    {label}
                </span>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--color-accent)] group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            </button>
        </div>
    )
}