import PropTypes from "prop-types";
// import { style } from "./style";
import "./Button.scss";
import { BUTTON_THEMES } from "../../utils/Constants";
// import styled from "styled-components";
import classNames from "classnames";
// import { reduce } from "lodash";
// import styles from "./Button.module.css";

function Button({
    disabled = false,
    theme = BUTTON_THEMES.dark,
    onClick = () => {},
    children,
}) {
    const onInnerClick = (event) => {
        console.log("button clicked!", event);
        onClick(event);
    };

    // let buttonClass = `CommonButton CommonButton--${theme}`;

    if (disabled) {
        // buttonClass += " CommonButton--disabled";
    }

    // const buttonStyle = { backgroundColor: "red", coor: "white" };

    // const StyledButton = styled.button`
    //     background-color: ${theme === BUTTON_THEMES.light ? "white" : "black"};
    //     color: white;
    // `;

    return (
        <button
            // <StyledButton
            onClick={onInnerClick}
            // className={styles.button}
            // style={style.button(theme, disabled)}
            className={classNames("CommonButton", `CommonButton--${theme}`, {
                "CommonButton--disabled": disabled,
            })}
        >
            {children}
            {/* </StyledButton> */}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
};

export default Button;
