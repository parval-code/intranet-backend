

export const CalculateDifferenceInDays = (dateHome: string, dateEnd: string): number => {
  const date1 = new Date(dateHome.split('/').reverse().join('-'));
  const date2 = new Date(dateEnd.split('/').reverse().join('-'));

  const difference = date2.getTime() - date1.getTime();
  const differenceInDay = Math.floor(difference / (1000 * 60 * 60 * 24));

  return differenceInDay;
};
