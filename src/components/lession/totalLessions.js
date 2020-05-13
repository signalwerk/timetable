export const TotalLessions = (data, filter) => {
  return data.reduce((sum, item) => {
    let newSum = sum;
    newSum += 4 * ((item.FR && item.FR.morning.lession) === filter || 0);
    newSum += 4 * ((item.FR && item.FR.afternoon.lession) === filter || 0);
    newSum += 4 * ((item.SA && item.SA.morning.lession) === filter || 0);
    newSum += 4 * ((item.SA && item.SA.afternoon.lession) === filter || 0);
    newSum += 40 * ((item.week && item.week.lession) === filter || 0);
    return newSum;
  }, 0);
};
