export type Timer = {
    key: string;
    originalLength: number;
    length: number;
    elapsed: number;
    isRunning: boolean;
    isPaused: boolean;
    addedAt: number;
};

export type TimerKeyless = Omit<Timer, "key">;
