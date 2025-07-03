export const INIT_MIN: number = 25;
export const BREAK_MIN: number = 5;

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