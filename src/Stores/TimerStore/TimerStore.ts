import { TimerType, TimerTypeKeyless } from "./TimerType.ts";

export class TimerStore {
    private static baseKey = "timer";

    public static add = (timer: TimerTypeKeyless): TimerType => {
        const id = crypto.randomUUID();
        localStorage.setItem(`${this.baseKey}-${id}`, JSON.stringify({ id: id, ...timer }));

        return { id, ...timer };
    };

    public static getAll = (): TimerType[] => {
        const keys = Object.keys(localStorage).filter(key => key.startsWith(this.baseKey));

        return (
            keys
                .map(key => {
                    const timer = localStorage.getItem(key);
                    if (!timer) {
                        return undefined;
                    }
                    return JSON.parse(timer) as TimerType;
                })
                .filter(timer => !!timer) as TimerType[]
        ).sort((a, b) => b.addedAt - a.addedAt);
    };
}
