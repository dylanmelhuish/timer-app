import { Flex, Panel } from "./Components";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <div className={styles["app-container"]}>
            <Panel>
                <Flex direction={"row"} justify={"space-between"}>
                    <div>Test</div>
                    <div>Test</div>
                </Flex>
            </Panel>
        </div>
    );
};
