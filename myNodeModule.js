exports.prependDateTime = function(array) {
  var today = new Date();
  var month = today.getMonth() + 1;
  var date = today.getDate();

  return array.map(function(str) {
    return month + "/" + date + " " + str;
  });
}
