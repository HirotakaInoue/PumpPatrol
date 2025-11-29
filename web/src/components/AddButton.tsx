export type AddButtonProps = {
  label: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
};

export const AddButton = ({ label, setter }: AddButtonProps) => {
  return (
    <div>
      <button
        className="bg-gray-600 text-black underline hover:text-blue-500"
        onClick={() => {
          setter((prev) => prev + 1);
        }}
      >
        {label}
      </button>
    </div>
  );
};
