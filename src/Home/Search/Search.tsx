import { PropsWithChildren, useState } from "react";
import SearchIcon from "./searchicon";
import { Style, FocusSearch } from "./Style";
import { SearchProps } from "./SearchProps";

const Search = (props: PropsWithChildren<SearchProps>): JSX.Element => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(true);
    };
    const handleBlur = () => {
        setIsActive(false);
    };

    return (
        <div className={isActive ? FocusSearch : Style.SearchBox}>
            <i>
                <SearchIcon className={Style.Svg} src="./searchicon" />
            </i>
            <input
                onFocus={handleClick}
                onBlur={handleBlur}
                className={Style.Search}
                placeholder="Search Product"
            />
            <button className={Style.Btn}>Search</button>
        </div>
    );
};

export default Search;
