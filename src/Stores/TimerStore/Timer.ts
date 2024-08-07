export type Timer = {
    key: string;
    originalLength: number;
    length: number;
    elapsed: number;
    isRunning: boolean;
    isPaused: boolean;
};

export type TimerKeyless = Omit<Timer, "key">;
