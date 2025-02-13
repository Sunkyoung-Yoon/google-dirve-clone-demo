import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearch,
  HeaderIcons,
} from "styles/header/header.style";

import { Avatar } from "@mui/material";

import {
  SearchIcons,
  FormatAlignCenterIcons,
  HelpOutlineIcons,
  SettingsIcons,
  AppsIcons,
} from "components/common/SvgIcons";

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
        <SearchIcons />
        <input type="text" placeholder="Search in Drive" />
        <FormatAlignCenterIcons />
      </HeaderSearch>
      <HeaderIcons>
        <span>
          <HelpOutlineIcons />
          <SettingsIcons />
        </span>
        <span>
          <AppsIcons />
          <Avatar />
        </span>
      </HeaderIcons>
    </HeaderContainer>
  );
};

export default Header;
