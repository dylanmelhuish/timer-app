import { TimerType } from "../../../Stores";
import { Flex, Panel, ProgressWheel } from "../../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";

type TimerProps = TimerType;

export const Timer = ({ elapsed, length, label }: TimerProps) => {
    return (
        <Panel>
            <Flex justify={"center"}>
                <Flex direction={"row"} justify={"space-between"}>
                    <span>{label}</span>

                    <FontAwesomeIcon icon={faX} />
                </Flex>
                <ProgressWheel progress={elapsed} max={length} />
            </Flex>
        </Panel>
    );
};
