import { MenuBar } from "../components/MenuBar";
import { AddTraining } from "../features/training/components/AddTraining";
import { RegistorButton } from "../components/RegistorButton";
import { createWorkoutSession } from "../features/training/api/create_workout_session";

import { useForm } from "react-hook-form";
import { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const registor_button_props: RegistorButtonProps = {
    label: isSubmitting ? "Saving..." : "Registor Training",
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    // watch,
    // formState: { errors },
  } = useForm<TrainingFormValues>();

  const onSubmit: SubmitHandler<TrainingFormValues> = async (
    data: TrainingFormValues
  ) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    try {
      const response = await createWorkoutSession(data);
      console.log("Workout session created:", response);
      setSubmitMessage("Training saved successfully!");

      // Reset form after successful submission
      reset();

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Failed to create workout session:", error);
      setSubmitError("Failed to save training. Please try again.");

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--color-background)] min-h-screen">
        <MenuBar></MenuBar>
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-10 right-5 w-48 h-48 bg-[var(--color-primary)] opacity-5 blur-3xl" />
          <div className="absolute bottom-10 left-5 w-48 h-48 bg-[var(--color-accent)] opacity-5 blur-3xl" />

          <div className="relative max-w-4xl mx-auto">
            {/* Success message */}
            {submitMessage && (
              <div className="mx-4 mt-4 p-4 bg-green-600/20 border-2 border-green-500 text-green-400">
                <p
                  className="text-center uppercase tracking-wider font-semibold"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.15em' }}
                >
                  {submitMessage}
                </p>
              </div>
            )}

            {/* Error message */}
            {submitError && (
              <div className="mx-4 mt-4 p-4 bg-red-600/20 border-2 border-red-500 text-red-400">
                <p
                  className="text-center uppercase tracking-wider font-semibold"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.15em' }}
                >
                  {submitError}
                </p>
              </div>
            )}

            <AddTraining register={register} setValue={setValue}></AddTraining>
            <RegistorButton {...registor_button_props}></RegistorButton>
          </div>
        </div>
      </form>
    </>
  );
}
