export type AddButtonProps = {
  label: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
};

export const AddrButton = ({ label, setter }: AddButtonProps) => {
  return (
    <div>
      <button
        onClick={() => {
          setter((prev) => prev + 1);
        }}
      >
        {label}
      </button>
    </div>
  );
};
