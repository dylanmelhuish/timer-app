import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Panel.module.scss";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
    layer?: number;
};

export const Panel = ({ children, layer = 1, className, ...props }: PanelProps) => {
    return (
        <div
            {...props}
            className={classNames(className, styles["panel-container"], styles[`layer-${layer}`])}
        >
            {children}
        </div>
    );
};
