import { useCallback, useEffect, useState } from "react";
import { Timer, TimerStore } from "../../Stores";
import { Flex, Panel } from "../../Components";

export const Timers = () => {
    const [timers, setTimers] = useState<Timer[]>([]);

    const handleAdd = useCallback(() => {
        const timer = TimerStore.add({
            elapsed: 0,
            isPaused: false,
            isRunning: true,
            length: 60,
            originalLength: 60,
            addedAt: Date.now(),
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
                <Panel key={timer.key}>{timer.key}</Panel>
            ))}
            <Panel onClick={handleAdd}>Add</Panel>
        </Flex>
    );
};
