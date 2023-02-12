import { css } from "@emotion/css";

export const Style = {
    SearchBox: css({
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.276)",
        alignItems: "stretch",
        borderRadius: "50px",
        backgroundColor: "#fff",
        overflow: "hidden",
        maxWidth: "100rem",
        boxShadow: "2px 1px 5px 1px rgba(0, 0, 0, 0.273)",
    }),

    Search: css({
        border: "none",
        width: "350px",
        fontSize: "15px",
        padding: "0.5rem",
        "&:focus-within": {
            outline: "none",
        },
    }),
    Svg: css({
        width: "2rem",
        margin: "10px",
        color: "rgba(0, 0, 0, 0.564)",
    }),

    Btn: css({
        border: "none",
        cursor: "pointer",
        color: "#fff",
        backgroundColor: "#DD995A",
        padding: "0px 10px",
    }),
};

export const FocusSearch = css([
    Style.SearchBox,
    { border: "1px solid #1dbf73" },
]);
