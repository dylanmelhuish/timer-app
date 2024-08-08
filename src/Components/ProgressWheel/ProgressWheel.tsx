import { HTMLAttributes } from "react";

type ProgressWheelProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    progress: number;
    max: number;
};

export const ProgressWheel = ({ progress, max, ...props }: ProgressWheelProps) => {
    return (
        <div {...props}>
            {progress}/{max}
        </div>
    );
};
