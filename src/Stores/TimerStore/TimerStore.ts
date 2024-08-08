import { Timer, TimerKeyless } from "./Timer.ts";

export class TimerStore {
    private static baseKey = "timer";

    public static add = (timer: TimerKeyless): Timer => {
        const key = crypto.randomUUID();
        localStorage.setItem(`${this.baseKey}-${key}`, JSON.stringify({ key: key, ...timer }));

        return { key, ...timer };
    };

    public static getAll = (): Timer[] => {
        const keys = Object.keys(localStorage).filter(key => key.startsWith(this.baseKey));

        return (
            keys
                .map(key => {
                    const timer = localStorage.getItem(key);
                    if (!timer) {
                        return undefined;
                    }
                    return JSON.parse(timer) as Timer;
                })
                .filter(timer => !!timer) as Timer[]
        ).sort((a, b) => b.addedAt - a.addedAt);
    };
}
