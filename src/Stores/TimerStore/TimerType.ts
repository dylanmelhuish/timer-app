export type TimerType = {
    id: string;
    originalLength: number;
    length: number;
    elapsed: number;
    isRunning: boolean;
    isPaused: boolean;
    addedAt: number;
    label: string;
};

export type TimerTypeKeyless = Omit<TimerType, "id">;
