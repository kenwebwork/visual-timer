const getSeconds = (remainingTime: number): number => {
  return remainingTime % 60;
}

export default getSeconds;