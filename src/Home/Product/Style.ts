
import { css } from "@emotion/css";


const Black = "black";

export const Product = {
    MainContent: css({
        display: "flex",
        padding: "4rem",
        flexDirection: "column"
    }),

    Lable: css({
        backgroundColor: "#DD995A",
        color: Black,
        border: `${'4px solid'} ${Black}`,
        padding: '0.5rem 1.5rem',
        fontWeight: "bold",
        fontSize: "1.5rem",
        borderRadius: "1rem",
        boxShadow: "1px",
        width: "160px"
    }),

    Icon: css({
        cursor: "pointer",
        width: "2rem",
        height: "2rem"
    }),

    RouteView: css({
        display: "flex",
        marginTop: "1rem",
        justifyContent:"space-between",
        alignItems: "center"
    }),

    Paragraph: css({
        fontWeight: "bold",
        fontSize: "1.2rem",
        color: "#5F6263"
    }),

    Grid: css({
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center"
    }),

    Box: css({
        backgroundColor: "white",
        color: Black,
        border: "2px solid #5F6263",
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "1rem",
    }),
    
    imgBox: css({
        display: "flex",
        width: "12rem",
        height:"100%"
    }),

    Info: css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "start"
    }),

    h1: css({
        fontWeight: "bold",
        fontSize: "1.5rem"
    }),

    Price: css({
        fontWeight: "bold",
        fontSize: "1rem"
    }),
    Desc: css({
        marginBottom: "0"
    }),

    Paraf: css({
        margin: "0"
    })
}

export const List = css([
    Product.Grid,
    { 
        flexDirection: "row",
        flexWrap: "wrap"
    },
]);

export const ListBox = {
    Box: css({
        backgroundColor: "white",
        color: Black,
        border: "2px solid #5F6263",
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
        margin: 0,
        width: "20%"
    }),
    
    h1: css({
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginBottom: "0"
    }),

    Price: css({
        fontWeight: "bold",
        fontSize: "1rem",
        marginBottom: "0.5rem",
        marginTop: "0.5rem"
    }),
    Desc: css({
        margin: "0"
    }),

    imgBox: css({
        display: "flex",
        width: "12rem",
        height:"100%"
    }),

    Paraf: css({
        margin: "0"
    })
}
