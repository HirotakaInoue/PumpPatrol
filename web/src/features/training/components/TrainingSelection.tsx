import type { trainingTypes } from "../types/trainingType"

const training_types:trainingTypes = {
    trainings: [
        {id:"1",name:"bench press"},
        {id:"2",name:"squat"},
        {id:"3",name:"dead lift"},
    ]
}

export const TrainingSelection = () => {
    return (
        <select>
            {
                training_types.trainings.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                ))
            }
        </select>
    )
}