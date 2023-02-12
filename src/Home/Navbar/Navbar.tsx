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
                <img
                    className={Nav.Logo}
                    src={window.location.origin + "/Assets/egg-full.png"}
                    alt="Logo"
                />
                <p>Storeegg</p>
            </div>
            <div className={Nav.Mid}>
                <Search />
            </div>
            <div className={Nav.Left}>
                <div className={Nav.Box}>
                    <img
                        className={Nav.SilverLogo}
                        id="silver-coin-nav"
                        src={`${window.location.origin}/Assets/silver-coin.png`}
                        alt="Silver-Coin"
                    />
                    <label
                        className={Nav.LabelSilver}
                        htmlFor="silver-coin-nav"
                    >
                        30200 <p className={Nav.TextSilver}>Coin</p>
                    </label>
                </div>
                <img
                    className={Nav.UserLogo}
                    src={`${window.location.origin}/Assets/Group.png`}
                    alt="Logo-User"
                />
            </div>
        </div>
    );
};

export default Navbar;
