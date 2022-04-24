import { Header } from './styles';

function TopNavBar({ children }) {
    return (
        <Header>
            {children}
        </Header>
    );
};

export default TopNavBar;