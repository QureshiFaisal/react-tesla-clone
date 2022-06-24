import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <img src="/images/logo.svg" alt="tesla-logo" />
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="/" key={index}>
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>

        <CustomMenu onClick={() => setOpenMenu(true)} />
      </RightMenu>
      {openMenu && (
        <BurgerNav>
          {openMenu && (
            <CloseWrapper>
              <CustomClose onClick={() => setOpenMenu(false)} />
            </CloseWrapper>
          )}
          {cars &&
            cars.map((car, index) => (
              <li>
                <a href="#" key={index}>
                  {car}
                </a>
              </li>
            ))}

          {/* <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#"></a>Cybertruck
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li> */}
        </BurgerNav>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display:flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s;
  li{
    padding 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
