import styled from "styled-components";
import Img from "../media/Img";
import FacebookIcon from "../media/icons/FacebookIcon";
import InstagramIcon from "../media/icons/InstagramIcon";
import LinkedinIcon from "../media/icons/LinkedinIcon";
import TwitterIcon from "../media/icons/TwitterIcon";
import Svg from "../media/Svg";
import MenuIcon from "../media/icons/MenuIcon";
import NavOptions from "./NavOptions";
import useVisibility from "../../hooks/useVisibility";

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

const LiveButton = styled.li`
  display: block;
  text-align: center;
  font-weight: bold;
  background-color: #ccdc29;
  padding: 0.8em 1.8em;
  line-height: 1;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
  }
`;

const IconsContainers = styled.a`
  margin: auto;
  display: flex;
  cursor: pointer;
`;

const Email = styled.div`
  position: absolute;
  right: 50px;
  color: #ccdc29;
  font-weight: bold;
  line-height: 1;
`;

const OptionsButton = styled.button`
  margin: auto 50px auto auto;
  cursor: pointer;
  display: none;
  background-color: #ccdc29;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 10px;
  line-height: 1;

  & svg {
    margin: calc(50% - 32px / 2);
  }
`;

const Navbar = () => {
  const { show, toggleVisibility } = useVisibility(false);

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
        <NavOptions show={show}>
          <li>Sobre Joco</li>
          <li>Podcast</li>
          <li>Servicios</li>
          <li>Eventos</li>
          <li>Blog</li>
          <li>Contactos</li>
          <LiveButton>LIVE</LiveButton>
        </NavOptions>
        <OptionsButton
          className="mobile-change show-item"
          onClick={() => {
            toggleVisibility();
          }}
        >
          <MenuIcon />
        </OptionsButton>
      </Bar>
    </>
  );
};

export default Navbar;
