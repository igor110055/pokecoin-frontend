import { Nav } from "./styles";

function LeftNavBar({ children }) {
    return(
        <Nav>
            {children}
        </Nav>
    );
};

export default LeftNavBar;