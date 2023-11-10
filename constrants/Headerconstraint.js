import ICONS from "../components/headericons";
import ROUTES from "../routes/routes";
import headerTheme from "../Theme/HeaderTheme";

const CONSTANTS = {
  navbarPages: [
    {
      text: 'Missions',
      link: ROUTES.MISSIONS,
      icon: ICONS.rocketicon,
    },
    {
      text: 'Leaderboard',
      link: ROUTES.LEADERBOARD,
      icon: ICONS.trophyicon,
    },
    {
      text: 'Rewards',
      link: ROUTES.REWARDS,
      icon: ICONS.rewardsicon,
    }
  ],

  buttons: [
    {
      icon: ICONS.diamond,
      number: '20,000',
      background: headerTheme.palette.diamondsBackground,
      borderColor: headerTheme.palette.diamondsBorder
    },
    {
      icon: ICONS.coinicon,
      number: '11,000',
      background: headerTheme.palette.coinsBackground,
      borderColor: headerTheme.palette.coinsBorder
    }
  ]
}

export default CONSTANTS
