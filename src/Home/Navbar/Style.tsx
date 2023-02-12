import { css } from "@emotion/css";

export const Nav = {
    Main: css({
        display: "flex",
        padding: "0.5rem 2rem",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#90BEBE",
    }),

    Right: css({
        display: "flex",
        alignItems: "center",
        fontSize: "2rem",
    }),

    Mid: css({
        display: "flex",
    }),

    Left: css({
        display: "flex",
        gap: "1rem",
        alignItems: "center"
    }),

    Logo: css({
        width: "3rem",
    }),

    Box: css({
        backgroundColor: "#042328",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        borderRadius: "1rem"
    }),

    SilverLogo: css({
        width: "3rem"
    }),

    LabelSilver: css({
        color:"#01FAA1",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
    }),

    TextSilver: css({
        color: "white",
    }),

    UserLogo: css({
        width: "5rem",
        height: "5rem"
    })
};
