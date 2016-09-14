'use strict';

jQuery(function ($) {
  var calculation = '';
  var addNum = '';
  var symbol = '+';
  var total = 0;
  var chk = 1;

  var symbolWork = function symbolWork(e) {
    if (chk == 0) {
      calculation = total + symbol + addNum;
      total = eval(calculation);
      console.log(total);
      addNum = '';
      document.cal.result.value = total;
      symbol = $(e.currentTarget).attr('value');
      chk = 1;
    }
  };
  $('.number').click(function (e) {
    addNum += $(e.currentTarget).attr('value');
    document.cal.result.value = addNum;
    console.log(addNum);
    chk = 0;
  });
  $('.symbol').click(symbolWork);
  $('.equel').click(function () {
    symbol = '+';
  }, symbolWork);
  $('.clear').click(function () {
    total = 0;
    symbol = '';
    addNum = '';
    document.cal.result.value = total;
  });
});