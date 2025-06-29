export const APP_NAME: string = 'Boost-Timer';
export const APP_URL: string = 'https://b-timer.com';

// export const EMAIL_ADSRESS: string = 'support@hoge.com';
export const X_ACCOUNT: string = 'https://x.com/boost_timer';
export const THREADS_ACCOUNT: string = 'https://www.threads.net/@b_timer_';
export const MEDIUM_ACCOUNT: string = 'https://medium.com/@Ken_b-timer';

interface pages {
  title: string;
  url: string
}
export const PAGES: pages[] = [
  { title: 'Top', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'How to use', url: '/howtouse' },
  { title: 'Focus tips', url: '/focus-tips' },
  { title: 'Contact', url: '/contact' },
  { title: 'Privacy Policy', url: '/privacy-policy' },
]
