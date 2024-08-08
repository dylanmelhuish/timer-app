import { useCallback, useEffect, useState } from "react";
import { TimerStore, TimerType } from "../../Stores";
import { Flex, Panel } from "../../Components";
import { Timer } from "./Timer";

export const Timers = () => {
    const [timers, setTimers] = useState<TimerType[]>([]);

    const handleAdd = useCallback(() => {
        const timer = TimerStore.add({
            elapsed: 0,
            isPaused: false,
            isRunning: true,
            length: 60,
            originalLength: 60,
            addedAt: Date.now(),
            label: "New Timer",
        });

        setTimers(p => [timer, ...p]);
    }, []);

    useEffect(() => {
        const stored = TimerStore.getAll();

        setTimers(stored);
    }, []);

    return (
        <Flex direction={"column"}>
            {timers.map(timer => (
                <Timer key={timer.id} {...timer} />
            ))}
            <Panel onClick={handleAdd}>Add</Panel>
        </Flex>
    );
};
