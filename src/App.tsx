import styles from "./App.module.scss";
import { Timers } from "./Pages";
import { Flex } from "./Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";

export const App = () => {
    return (
        <Flex direction={"column"} className={styles["app-container"]}>
            <Flex direction={"row"} justify={"space-between"}>
                <div>Timer</div>
                <div>
                    <FontAwesomeIcon icon={faCog} />
                </div>
            </Flex>
            <Timers />
        </Flex>
    );
};
