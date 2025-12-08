import { MenuBar } from "../components/MenuBar";
import { AddTraining } from "../features/training/components/AddTraining";
import { RegistorButton } from "../components/RegistorButton";

import { useForm } from "react-hook-form";

import type { RegistorButtonProps } from "../components/RegistorButton";
import type { SubmitHandler } from "react-hook-form";

export type TrainingFormValues = {
  trainingSetNumber: number;
  trainingSets: Array<TrainingSets>;
};

export type TrainingSets = {
  trainingType: string; // uuid
  trainingTypeName: string;
  trainingNumber: number;
  trainingSet: Array<TrainingSet>;
};

export type TrainingSet = {
  trainingWeight: number;
  trainingReps: number;
};

export function RegistorTrainingPage() {
  const registor_button_props: RegistorButtonProps = {
    label: "Registor Training",
  };

  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    // formState: { errors },
  } = useForm<TrainingFormValues>();

  const onSubmit: SubmitHandler<TrainingFormValues> = (
    data: TrainingFormValues
  ) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--color-background)] min-h-screen">
        <MenuBar></MenuBar>
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-10 right-5 w-48 h-48 bg-[var(--color-primary)] opacity-5 blur-3xl" />
          <div className="absolute bottom-10 left-5 w-48 h-48 bg-[var(--color-accent)] opacity-5 blur-3xl" />

          <div className="relative max-w-4xl mx-auto">
            <AddTraining register={register} setValue={setValue}></AddTraining>
            <RegistorButton {...registor_button_props}></RegistorButton>
          </div>
        </div>
      </form>
    </>
  );
}
