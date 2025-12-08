export type RegistorLabelProps = {
  image: string;
  width: number;
  height: number;
  label: string;
  onClick: () => void;
};

export const RegistorLabel = ({
  image,
  width,
  height,
  label,
  onClick,
}: RegistorLabelProps) => {
  return (
    <button
      className="group relative overflow-hidden bg-[var(--color-surface)] border-2 border-[var(--color-surface-light)] hover:border-[var(--color-primary)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      onClick={onClick}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background: 'var(--gradient-primary)' }} />

      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)]" />

      <div className="relative p-6 flex flex-col items-center justify-center gap-3">
        <img
          src={image}
          width={width}
          height={height}
          className="relative z-10 group-hover:brightness-0 group-hover:invert transition-all duration-300"
          alt={label}
        />
        <span
          className="text-[var(--color-text-primary)] text-lg uppercase tracking-widest font-semibold group-hover:text-white transition-colors duration-300"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.2em' }}
        >
          {label}
        </span>
      </div>

      {/* Bottom right corner accent */}
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};
