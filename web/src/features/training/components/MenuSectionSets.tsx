import { TrainingSet } from "./TrainingSet";

type MenuSectionSetsProps = {
  count: number;
};

export const MenuSectionSets = ({ count }: MenuSectionSetsProps) => {
  return (
    <>
      {Array.from({ length: count }, (_, idx) => (
        <TrainingSet key={idx} />
      ))}
    </>
  );
};
