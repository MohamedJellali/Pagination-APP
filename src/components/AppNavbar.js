import React from "react";
import { Navbar, NavbarBrand} from "reactstrap";
import "./AppNavbar.css";
const AppNavbar = () => {

  return (
    <div>
      <Navbar
        className="bar"
        dark
      >
        <NavbarBrand
          tag={() => (
              <img
                width="200px"
                height="70px"
                className="img-responsive"
                src="https://www.datahorizon.eu/datahorizon/img/datahorizon-logo-white-2.png"
                alt="logo"
              />
          )}
        />
      </Navbar>
    </div>
  );
};

export default AppNavbar;
