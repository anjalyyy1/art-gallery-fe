import { Link } from 'react-router-dom';
import {
  AppLogo,
  HeaderWrapper,
  Container,
  NavOptions,
  NavWrapper,
  NavItem,
} from './styles';

const navOptions = [
  {
    key: 'about',
    label: 'About',
    link: '/about',
  },
  {
    key: 'services',
    label: 'Services',
    link: '/service',
  },
  {
    key: 'contact',
    label: 'Contact',
    link: '/contact',
  },
];

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <AppLogo>
          <Link to="art-gallery">Art Gallery</Link>
        </AppLogo>
        <NavWrapper>
          <NavOptions>
            {navOptions.map((eachLink, index) => {
              return (
                <NavItem key={index}>
                  <Link to={eachLink.link}>{eachLink.label}</Link>
                </NavItem>
              );
            })}
          </NavOptions>
        </NavWrapper>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
