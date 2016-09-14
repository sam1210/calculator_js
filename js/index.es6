jQuery(($) =>{
  let [calculation,addNum,symbol,total,chk]=['','','+',0,1];
  let symbolWork = (e) =>{
    if (chk==0){
      calculation = total + symbol + addNum;
      total = eval(calculation);
      console.log(total);
      addNum = '';
      document.cal.result.value = total;
      symbol = $(e.currentTarget).attr('value');
      chk = 1;
    }
  };
  $('.number').click(e=>{
    addNum += $(e.currentTarget).attr('value');
    document.cal.result.value = addNum;
    console.log(addNum);
    chk = 0;
  });
  $('.symbol').click(symbolWork);
  $('.equel').click(()=>{
      symbol = '+';
  },symbolWork);
  $('.clear').click(()=>{
    total = 0;
    symbol = '';
    addNum = '';
    document.cal.result.value = total;
  });
});

