(() => {
  try {
    const minPercentAccepted = {
      lines: 80,
      statements: 80,
      functions: 70,
      branches: 60,
    };

    const coverageResume = require('./coverage/coverage-summary.json');

    for (param of Object.keys(coverageResume.total)) {
      const paramPct = coverageResume.total[param].pct;
      const minAccepted = minPercentAccepted[param];
      if (paramPct && paramPct < minAccepted) {
        throw new Error(
          `Test param "${param}" cannot be less than ${minAccepted}%, current is: ${paramPct}%`,
        );
      }
    }
    console.log('Coverage OK');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
