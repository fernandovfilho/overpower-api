(() => {
  try {
    const minPercentAccepted = {
      lines: 80,
      statements: 80,
      functions: 70,
      branches: 60,
    };
    const skipVerificationMessage = '[skip coverage-verifier]';

    const commitMessage = process.env.COMMIT_MESSAGE || '';

    if (commitMessage.includes(skipVerificationMessage)) {
      console.log('Coverage verification SKIPPED');
      return;
    }

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
    console.log({ COMMIT_MESSAGE: process.env.COMMIT_MESSAGE });
    console.log('Coverage OK');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
