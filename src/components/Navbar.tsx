import styled from "styled-components";
import Img from "./media/Img";
import FacebookIcon from "./media/icons/FacebookIcon";
import InstagramIcon from "./media/icons/InstagramIcon";
import LinkedinIcon from "./media/icons/LinkedinIcon";
import TwitterIcon from "./media/icons/TwitterIcon";
import Svg from "./media/Svg";
import MenuIcon from "./media/icons/MenuIcon";

const Bar = styled.nav`
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  position: sticky;
  top: 0px;
  z-index: 4;
  justify-content: space-between;
`;

const TopBar = styled.div`
  height: 40px;
  width: 100%;
  background-color: #4c28ce;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  width: 100px;
  margin: auto auto auto 40px;
`;

const NavOptions = styled.div`
  margin: auto 40px auto auto;
  display: flex;
  flex-direction: row;

  & div {
    margin: auto 0.8em;
    line-height: 1;
    font-size: 1em;
  }
`;

const LiveButton = styled.div`
  font-weight: bold;
  background-color: #ccdc29;
  padding: 0.8em 1.8em;
  line-height: 1;
  border-radius: 8px;

  &:hover {
  }
`;

const IconsContainers = styled.div`
  margin: auto;
  display: flex;
`;

const Email = styled.div`
  position: absolute;
  right: 50px;
  color: #ccdc29;
  font-weight: bold;
  line-height: 1;
`;

const OptionsButton = styled.div`
  margin: auto 50px auto auto;
  display: none;
  background-color: #ccdc29;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  line-height: 1;

  & svg {
    margin: calc(50% - 32px / 2);
  }
`;

const Navbar = () => {
  return (
    <>
      <TopBar>
        <IconsContainers className="mobile-change align left">
          <Svg>
            <LinkedinIcon />
          </Svg>
          <Svg>
            <TwitterIcon />
          </Svg>
          <Svg>
            <FacebookIcon />
          </Svg>
          <Svg>
            <InstagramIcon />
          </Svg>
        </IconsContainers>
        <Email className="mobile-change align right">
          contacto@jocogonzalez.com
        </Email>
      </TopBar>
      <Bar>
        <Logo>
          <Img src="./logo-dark-joco.png" />
        </Logo>
        <NavOptions className="mobile-change hide-item">
          <div>Sobre Joco</div>
          <div>Podcast</div>
          <div>Servicios</div>
          <div>Eventos</div>
          <div>Blog</div>
          <div>Contactos</div>
          <LiveButton>LIVE</LiveButton>
        </NavOptions>
        <OptionsButton className="mobile-change show-item">
          <MenuIcon />
        </OptionsButton>
      </Bar>
    </>
  );
};

export default Navbar;
