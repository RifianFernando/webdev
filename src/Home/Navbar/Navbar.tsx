import { PropsWithChildren } from "react";
import { NavbarProps } from "./NavbarProps";
import { Nav } from "./NavbarCss";
// import { css } from "@emotion/css";

const Navbar = (props: PropsWithChildren<NavbarProps>): JSX.Element => {
    // const {
    //     ...rest
    // } = props;

    console.log();
    return (
        <div className={Nav.Main}>
            <div className={Nav.Right}>
                <img className={Nav.Logo}
                    src={window.location.origin + "/Assets/egg-full.png"}
                    alt="Logo"
                />
                <p>Storeegg</p>
            </div>
            <div className={Nav.Mid}>
                <input name="search-nav"/>
            </div>
            <div className={Nav.Left}>
                
            </div>
        </div>
    );
};

export default Navbar;
