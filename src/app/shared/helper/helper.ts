export const getRandomSubscriptionPlan = (
  numberOfPlansAvailable: number
): number => {
  let min = Math.ceil(1);
  let max = Math.floor(numberOfPlansAvailable);
  const generatdNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(generatdNumber, 'generated number');
  return generatdNumber;
};
