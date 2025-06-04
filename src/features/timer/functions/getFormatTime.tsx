import getMinutes from "./getMinutes";
import getSeconds from "./getSeconds";

const getFormatTime = (remainingTime: number): string => {
  return `${String(getMinutes(remainingTime)).padStart(2, '0')}:${String(getSeconds(remainingTime)).padStart(2, '0')}`
}

export default getFormatTime;