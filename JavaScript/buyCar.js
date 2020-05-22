const nbMonths = (PriceOld, PriceNew, savingperMonth, percentLossByMonth) => {
  let savings = PriceOld;
  let month = 1;
  for (month; savings < PriceNew; month++) {
    if (!(month % 2)) {
      percentLossByMonth += 0.5;
    }
    const percentLoss = (100 - percentLossByMonth) / 100;
    PriceNew *= percentLoss;
    PriceOld *= percentLoss;
    savings = PriceOld + savingperMonth * month;
  }
  return [month - 1, Math.round(savings - PriceNew)];
};
