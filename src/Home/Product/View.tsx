import { PropsWithChildren } from "react";
import { ViewProductProps } from "./ViewProductProps";
import { Product, List, ListBox } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const View = (
    props: PropsWithChildren<ViewProductProps>
): JSX.Element => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(
            <div className={isActive ? Product.Box : ListBox.Box}>
                <img
                    className={isActive ? Product.imgBox : ListBox.imgBox}
                    src={`${window.location.origin}/Assets/ayamNetes.png`}
                    alt=""
                />
                <div className={Product.Info}>
                    <h1 className={isActive ? Product.h1 : ListBox.h1}>Product 1</h1>
                    <h1 className={isActive ? Product.Price : ListBox.Price}>IDR 30.000</h1>
                    <p className={isActive ?Product.Desc : ListBox.Desc}>Description: </p>
                    <p className={isActive ? Product.Paraf : ListBox.Paraf}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nihil voluptatum nemo nostrum deleniti nobis repellat fugiat porro doloremque, magni animi. Magnam, obcaecati similique adipisci deserunt non odio inventore eaque.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={Product.MainContent}>
            <label className={Product.Lable}>My Product</label>
            <div className={Product.RouteView}>
                <p className={Product.Paragraph}>Home {">"} Product List</p>
                <FontAwesomeIcon icon={faBars} onClick={handleClick} className={Product.Icon} />
                {/* https://fontawesome.com/icons/bars?s=solid&f=classic */}
            </div>
            <div className={isActive ? Product.Grid : List}>{rows}</div>
        </div>
    );
};
