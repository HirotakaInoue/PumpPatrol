export type AddButtonProps = {
  label: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
};

export const AddButton = ({ label, setter }: AddButtonProps) => {
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={() => {
          setter((prev) => prev + 1);
        }}
      >
        {label}
      </button>
    </div>
  );
};
