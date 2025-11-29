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
  onClick,
}: RegistorLabelProps) => {
  return (
    <div className="relative flex items-center justify-center p-2">
      <button
        className="relative flex-col items-center justify-center bg-[var(--color-primary)] text-white font-bold text-xl hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-xl border-2 border-transparent rounded-lg transition-all duration-200"
        onClick={onClick}
      >
        <img src={image} width={width} height={height} />
      </button>
    </div>
  );
};
