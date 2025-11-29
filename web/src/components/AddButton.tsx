export type AddButtonProps = {
  label: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
};

export const AddButton = ({ label, setter }: AddButtonProps) => {
  return (
    <div className="p-2">
      <button
        className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/80 text-white font-medium py-2 px-4 rounded-md transition-all duration-200"
        onClick={() => {
          setter((prev) => prev + 1);
        }}
      >
        {label}
      </button>
    </div>
  );
};
