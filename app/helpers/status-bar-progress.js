import Ember from 'ember';

export function statusBarProgress([processed, total]/*, hash*/) {
  const byteNotation = bytes => {
    const conversions = {
      TB: 1099511627776,
      GB: 1073741824,
      MB: 1048576,
      kB: 1024,
      b: 1,
    };
    const units = ['b', 'kB', 'MB', 'GB', 'TB'];
    let str;
    for(let i = 0; i < units.length; i++) {
      const value = bytes / conversions[units[i]];
      if(value < 1024) {
        str = `${Math.round(value * 100) / 100} ${units[i]}`;
        break;
      }
    };
    return str || null;
  }

  const processedInBN = processed ? byteNotation(processed): '0 b';
  const totalInBN = byteNotation(total);

  return `${processedInBN}/${totalInBN}`
}

export default Ember.Helper.helper(statusBarProgress);
