import { HTMLAttributes, useMemo } from "react";
import classNames from "classnames";
import styles from "./Flex.module.scss";

type FlexProps = HTMLAttributes<HTMLDivElement> & {
    direction?: "row" | "column";
    center?: boolean;
    justify?: "normal" | "center" | "space-between";
};

export const Flex = ({
    center = false,
    direction = "column",
    justify = "normal",
    children,
    className,
    ...props
}: FlexProps) => {
    const flexClass = useMemo(
        () =>
            classNames(
                className,
                styles["flex-container"],
                styles[direction],
                styles[`justify-${justify}`],
                {
                    [styles["center"]]: center,
                }
            ),
        [center, className, direction, justify]
    );

    return (
        <div {...props} className={flexClass}>
            {children}
        </div>
    );
};
