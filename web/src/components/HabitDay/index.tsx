interface HabitDayProps {
    completedLevel?: number;
}

export function HabitDay({ completedLevel = 0 }: HabitDayProps) {
    return (
        <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg">
            {completedLevel}
        </div>
    );
}
