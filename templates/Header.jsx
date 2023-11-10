import React from 'react';
import { AppBar, Grid, Link, Box, Typography, Icon } from '@mui/material';
import Image from 'next/image';
import headerStyles from '../styles/Header/headerstyle';
import ROUTES from '../routes/routes';
import CONSTANTS from '../constrants/Headerconstraint'
import ICONS from '../components/headericons'
import { usePathname } from 'next/navigation'

// SideButton component
const SideButton = ({ icon, number, background, borderColor }) => {
  return (
    <Grid container item sx={{ ...headerStyles.sideButton, backgroundColor: { background }, borderColor: { borderColor } }}>
      <Grid item> <Image src={icon} alt="Icon"/></Grid>
      <Grid item>{number}</Grid>
    </Grid>
  );
};

// NavBarLink component
const NavBarLink = ({ text, link, icon }) => {
  const pathname = usePathname();
  return (
    <Box sx={{ ...headerStyles.navbarItem }}>
      <Box>{icon}</Box>
      <Box id='text' sx={pathname == link ? { ...headerStyles.linkTextWrapActive } : { ...headerStyles.linkTextWrap }}>
        <Link href={link} sx={{ 'textDecoration': 'none' }}>
          <Typography id='linkText' sx={{ ...headerStyles.navBarText }}>{text}</Typography>
        </Link>
        <Box id='linkTextLine'></Box>
      </Box>
    </Box>
  );
};

// Avatar component
const Avatar = () => {
  return (
    <Box sx={{ position: 'static', marginRight: '40px' }}>
    <Box sx={{ position: 'absolute', top: '18px' }}>
      <Image src={ICONS.avataricon} alt="avatar" style={{borderRadius:'45px'}} />
    </Box>
    <Box sx={{ position: 'absolute', zIndex: '5', right: '40px', top: '48px'}}>
      <Image src={ICONS.statusOnlineicon} alt='statusOnline' style={{borderRadius:'45px'}}/>
    </Box>
  </Box>
  );
};

// Header component
const Header = () => {
  return (
    <AppBar sx={{ ...headerStyles.appbarStyles }}>
      <Grid sx={{ ...headerStyles.appbarGridContainer }}>
        <Grid item>
          <Link href={ROUTES.HOME}>
            <Image src={ICONS.RadicalXLogo} alt='homeLogo' />
          </Link>
        </Grid>
        <Grid sx={{ ...headerStyles.navBarStyles }}>
          {CONSTANTS.navbarPages.map(el =>
            <NavBarLink {...el} />
          )}
        </Grid>
        <Grid sx={{ ...headerStyles.sideBar }}>
          {CONSTANTS.buttons.map((el, index) => (
            <SideButton
              key={index}
              icon={el.icon}
              number={el.number}
              background={el.background}
              borderColor={el.borderColor}
            />
          ))}
          <Avatar />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;