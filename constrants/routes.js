export const ROUTES = {
    HOME: '/',
    LEADERBOARDS: '/leaderboards',
    REWARDS: '/rewards',
  };
  
  export const PAGES = [
    {
      name: 'Quests',
      link: ROUTES.HOME,
      icon: <HomeIcon />,
      id: 'page_1',
    },
    {
      name: 'Leaderboard',
      link: ROUTES.LEADERBOARDS,
      icon: <LeaderboardIcon />,
      id: 'page_2',
    },
    {
      name: 'Rewards',
      link: ROUTES.REWARDS,
      icon: <RewardsIcon />,
      id: 'page_3',
    },
  ];