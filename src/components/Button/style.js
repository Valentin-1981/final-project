import { BUTTON_THEMES } from "../../utils/Constants";

export const style = {
    button: (theme, disabled) => {
        const temp = {
            background: theme === BUTTON_THEMES.light ? "white" : "black",
        };

        if (disabled) {
            temp.pointerEvents = "none";
        }

        return temp;
    },
};
