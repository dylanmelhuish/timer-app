import { TimerType } from "../../../Stores";
import { Panel } from "../../../Components";

type TimerProps = TimerType;

export const Timer = ({ label }: TimerProps) => {
    return <Panel>{label}</Panel>;
};
