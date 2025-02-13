import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearch,
  HeaderIcons,
} from "styles/header.style";

import SearchIcon from "@mui/icons-material/Search";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
          alt="Google Drive"
        />
        <span>Drive</span>
      </HeaderLogo>
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search in Drive" />
        <FormatAlignCenterIcon />
      </HeaderSearch>
      <HeaderIcons>
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <span>
          <AppsIcon />
          <Avatar />
        </span>
      </HeaderIcons>
    </HeaderContainer>
  );
};

export default Header;
