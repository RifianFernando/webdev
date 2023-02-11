import { PropsWithChildren } from "react";
import { NavbarProps } from "./NavbarProps";
import { Nav } from "./Style";
import Search from "../Search/Search";

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
                <Search/>
            </div>
            <div className={Nav.Left}>
                
            </div>
        </div>
    );
};

export default Navbar;
