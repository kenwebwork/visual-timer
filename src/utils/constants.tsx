export const APP_NAME: string = 'Visual Timer';
export const APP_URL: string = 'https://visualtimeraaaaa';

export const EMAIL_ADSRESS: string = 'support@hoge.com';
export const X_ACCOUNT: string = 'https://xacount';

interface pages {
  title: string;
  url: string
}
export const PAGES: pages[] = [
  { title: 'Top', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
  { title: 'Privacy', url: '/privacy-policy' },
]

interface settingOptions {
  value: number;
  label: string;
}
export const TIME_OPTIONS: settingOptions[] = [
  { value: 5, label: '5 min'},
  { value: 10, label: '10 min'},
  { value: 15, label: '15 min'},
  { value: 20, label: '20 min'},
  { value: 25, label: '25 min'},
  { value: 30, label: '30 min'},
  { value: 45, label: '45 min'},
  { value: 60, label: '60 min'},
];