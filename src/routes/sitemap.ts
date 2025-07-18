import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'ri:dashboard-fill',
    active: true,
  },
  {
    id: 'employes',
    subheader: 'Employes',
    path: '/employes',
    icon: 'ic:baseline-show-chart',
  },
  {
    id: 'reunions',
    subheader: 'Réunions',
    path: 'reunions',
    icon: 'material-symbols:local-library-outline',
  },
  {
    id: 'authentication',
    subheader: 'Authentication',
    icon: 'ic:round-security',
    active: true,
    items: [
      {
        name: 'Sign In',
        pathName: 'signin',
        path: paths.signin,
      },
      {
        name: 'Sign Up',
        pathName: 'signup',
        path: paths.signup,
      },
    ],
  },
  {
    id: 'demandes',
    subheader: 'Demandes',
    path: '#!',
    icon: 'ic:outline-calendar-today',
  },
  {
    id: 'pointage',
    subheader: 'Pointage',
    path: '#!',
    icon: 'material-symbols:account-balance-wallet-outline',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'ic:outline-settings',
  },
];

export default sitemap;
