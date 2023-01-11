export type ListItem<T> = {
  percent: number;
  value: T;
};

const randomizeWithPercentage = <T = unknown>(items: ListItem<T>[]) => {
  const allPercentageSum = items.reduce((acc, item) => acc + item.percent, 0);

  if (allPercentageSum !== 100) {
    throw new Error("All percentages sum must be 100");
  }

  const biggestDecimalLength = items.reduce((acc, item) => {
    const decimal = item.percent.toString().split(".")[1];
    if (!decimal) return acc;
    const decimalLength = Number(decimal.split("").length);
    if (acc < decimalLength) return decimalLength;
    return acc;
  }, 0);

  const decimalGrowth = 10 ** biggestDecimalLength;

  const random = Math.floor(Math.random() * 100 * decimalGrowth);

  let totalPercentPassed = 0;
  const selectedListItem = items.find((item) => {
    totalPercentPassed += item.percent * decimalGrowth;
    if (random < totalPercentPassed) return true;
    return false;
  })!;

  return {
    value: selectedListItem.value,
    selectedListItem,
  };
};

export default randomizeWithPercentage;
