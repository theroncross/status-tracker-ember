import Ember from 'ember';

export function statusBarSummary([start_date, end_date, processed, total]/*, hash*/) {
  const summaryLabel = (() => {
    if(!start_date) return 'not started';
    if(start_date && end_date && total !== processed) return 'Halted: ';
    if(start_date && !end_date && total !== processed) return 'Time Remaining: ';
    if(start_date && end_date && total === processed) return 'Completed: ';
  })();

  return summaryLabel;
}

export default Ember.Helper.helper(statusBarSummary);
