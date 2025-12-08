export type AddButtonProps = {
  label: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
};

export const AddButton = ({ label, setter }: AddButtonProps) => {
  return (
    <div className="p-4">
      <button
        className="group relative w-full overflow-hidden bg-[var(--color-surface)] hover:bg-[var(--color-surface-light)] text-[var(--color-text-primary)] font-semibold py-3 px-6 border-2 border-[var(--color-surface-light)] hover:border-[var(--color-accent)] transition-all duration-300"
        onClick={() => {
          setter((prev) => prev + 1);
        }}
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.2rem',
          letterSpacing: '0.1em'
        }}
      >
        {/* Accent line */}
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />

        <span className="uppercase tracking-wider flex items-center justify-center gap-2">
          <span className="text-[var(--color-accent)] text-2xl leading-none">+</span>
          {label}
        </span>
      </button>
    </div>
  );
};
