module.exports = function createDreamTeam(members) {
  if (members == undefined || members == '' || Array.isArray(members) != true) {
    return false;
  }

  let title = '';

  for (let item of members) {
    if (typeof item === 'string') {
      title += item.trim().charAt(0).toUpperCase();
    }
  }
  return title.split('').sort().join('');
};