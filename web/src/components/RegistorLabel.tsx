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
        className="relative flex-col items-center justify-center bg-blue-400 text-black font-bold font-xl hover:bg-blue-500 border-2 border-black rounded-md"
        onClick={onClick}
      >
        <img src={image} width={width} height={height} />
      </button>
    </div>
  );
};
