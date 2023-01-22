interface HabitProps {
    completedLevel: number;
}

export function Habbit(props: HabitProps) {
    return (
        <div className="bg-violet-900 w-10 h-10 text-white m-2 flex justify-center items-center">
            <p>{props.completedLevel}</p>
        </div>
    );
}
