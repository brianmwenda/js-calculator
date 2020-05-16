const DOMStrings = {
  showmore:'.morerow',
  dispbtnfa:'.fa',
  keyboardactive:'bt',
  makeyr:'yr',
  btn1:'1',
  btn2:'2',
  btn3:'3',
  btn4:'4',
  btn5:'5',
  btn6:'6',
  btn7:'7',
  btn8:'8',
  btn9:'9',
  btn0:'0',
  btndot:'dot',
  btnequal:'equal',
  btnadd:'add',
  btndiv:'div',
  btnmultiply:'mult',
  btnnsubstract:'sub',
  btnmod:'mod',
  btnpower:'pow',
  currentvalue:'curv',
  totalvalue:'ttv',
  deletebtn:'del'
}

let container = document.querySelector(DOMStrings.showmore);
container.style.display ="none";
function displaymorebtns(){
  let sbtn = document.querySelector(DOMStrings.dispbtnfa);
  sbtn.addEventListener('click',()=>{
    container.style.display ="";
    sbtn.style.display = "none";
    document.getElementById('bt').style.display = 'none';
  });
  container.addEventListener('mouseleave',() =>{
    container.style.display = "none";
    sbtn.style.display = "";
    document.getElementById('bt').style.display = '';
  })
}
displaymorebtns();

//date for the footer
let now = new Date().getFullYear();
document.getElementById(DOMStrings.makeyr).innerHTML = now;

//get content module
let GetContent ={
  firstnumber:'',
  currentvalue:'',
  sign:[],
  b1:function(){
    let a = document.getElementById(DOMStrings.btn1).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.currentvalue+a;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b2:function(){
    let b = document.getElementById(DOMStrings.btn2).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.currentvalue+b;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b3:function(){
    let c = document.getElementById(DOMStrings.btn3).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ c;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b4:function(){
    let d = document.getElementById(DOMStrings.btn4).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ d;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b5:function(){
    let e = document.getElementById(DOMStrings.btn5).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ e;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b6:function(){
    let f = document.getElementById(DOMStrings.btn6).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ f;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b7:function(){
    let g = document.getElementById(DOMStrings.btn7).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ g;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b8:function(){
    let h = document.getElementById(DOMStrings.btn8).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ h;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b9:function(){
    let i = document.getElementById(DOMStrings.btn9).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ i;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  b0:function(){
    let j = document.getElementById(DOMStrings.btn0).innerHTML;
    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue+ j;
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },
  bdot:function(){

    document.getElementById(DOMStrings.currentvalue).innerHTML =GetContent.currentvalue + '.';
    GetContent.currentvalue = document.getElementById(DOMStrings.currentvalue).innerHTML;
  },

  add:function(){
    //sum calculations
    GetContent.firstnumber = parseInt(GetContent.currentvalue);
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.firstnumber + '+';
    GetContent.sign.push('+');
    GetContent.currentvalue = '';

  },
  divide:function(){
    //sum calculations
    GetContent.firstnumber = parseInt(GetContent.currentvalue);
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.firstnumber + '/';
    GetContent.sign.push('/');
    GetContent.currentvalue = '';
  },
  multiply:function(){
    //sum calculations
    GetContent.firstnumber = parseInt(GetContent.currentvalue);
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.firstnumber + '*';
    GetContent.sign.push('*');
    GetContent.currentvalue = '';
  },
  substract:function(){
    //sum calculations
    GetContent.firstnumber = parseInt(GetContent.currentvalue);
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.firstnumber + '-';
    GetContent.sign.push('-');
    GetContent.currentvalue = '';
  },
  mod:function(){
    //sum calculations
    GetContent.firstnumber = parseInt(GetContent.currentvalue);
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.firstnumber + '%';
    GetContent.sign.push('%');
    GetContent.currentvalue = '';
  },
  pow:function(){
    //sum calculations
    GetContent.firstnumber = parseInt(GetContent.currentvalue);
    document.getElementById(DOMStrings.currentvalue).innerHTML = GetContent.firstnumber + '^';
    GetContent.sign.push('^');
    GetContent.currentvalue = '';
  },

equal:function(){
  for(let i of GetContent.sign){
    //sum
      if(i == '+'){
        let number1 = GetContent.firstnumber;
        let num2 =parseInt(GetContent.currentvalue) ;
        sum = number1 + num2;

        //total value
        document.getElementById(DOMStrings.totalvalue).innerHTML = sum;
        init();
      }
    //division
    if(i == '/'){
      let number1 = GetContent.firstnumber;
      let num2 =parseInt(GetContent.currentvalue) ;
      sum = number1 / num2;
      sum = Math.abs(sum);
      sum = sum.toFixed(4);
      //total value
      document.getElementById(DOMStrings.totalvalue).innerHTML = sum;
      init();
    }
    //multiplication
    if(i == '*'){
      let number1 = GetContent.firstnumber;
      let num2 =parseInt(GetContent.currentvalue) ;
      sum = number1 * num2;

      //total value
      document.getElementById(DOMStrings.totalvalue).innerHTML = sum;
      init();
    }
    //substraction
    if(i == '-'){
      let number1 = GetContent.firstnumber;
      let num2 =parseInt(GetContent.currentvalue) ;
      sum = (number1 - num2);

      //total value
      document.getElementById(DOMStrings.totalvalue).innerHTML = sum;
      init();
    }
    //modulas
    if(i == '%'){
      let number1 = GetContent.firstnumber;
      let num2 =parseInt(GetContent.currentvalue) ;
      sum = (number1 % num2);

      //total value
      document.getElementById(DOMStrings.totalvalue).innerHTML = sum;
      init();
    }
    //power
    if(i == '^'){
      let number1 = GetContent.firstnumber;
      let num2 =parseInt(GetContent.currentvalue) ;
      sum = (number1 ^ num2);

      //total value
      document.getElementById(DOMStrings.totalvalue).innerHTML = sum;
      init();
    }
    //root

  }
},
}






//display  total to ui
let DisplayUICur = function(){
//display total sum
 GetContent.equal();


}
let DeleteFunction = function(){
  init();
  
}

function eventlisteners(){
document.getElementById(DOMStrings.btn1).addEventListener('click',GetContent.b1);
document.getElementById(DOMStrings.btn2).addEventListener('click',GetContent.b2);
document.getElementById(DOMStrings.btn3).addEventListener('click',GetContent.b3);
document.getElementById(DOMStrings.btn4).addEventListener('click',GetContent.b4);
document.getElementById(DOMStrings.btn5).addEventListener('click',GetContent.b5);
document.getElementById(DOMStrings.btn6).addEventListener('click',GetContent.b6);
document.getElementById(DOMStrings.btn7).addEventListener('click',GetContent.b7);
document.getElementById(DOMStrings.btn8).addEventListener('click',GetContent.b8);
document.getElementById(DOMStrings.btn9).addEventListener('click',GetContent.b9);
document.getElementById(DOMStrings.btn0).addEventListener('click',GetContent.b0);
document.getElementById(DOMStrings.btndot).addEventListener('click',GetContent.bdot);
document.getElementById(DOMStrings.btnadd).addEventListener('click',GetContent.add);
document.getElementById(DOMStrings.btndiv).addEventListener('click',GetContent.divide);
document.getElementById(DOMStrings.btnmultiply).addEventListener('click',GetContent.multiply);
document.getElementById(DOMStrings.btnnsubstract).addEventListener('click',GetContent.substract);
document.getElementById(DOMStrings.btnmod).addEventListener('click',GetContent.mod);
document.getElementById(DOMStrings.btnpower).addEventListener('click',GetContent.pow);
document.getElementById(DOMStrings.btnequal).addEventListener('click',DisplayUICur);
document.getElementById(DOMStrings.deletebtn).addEventListener('click',DeleteFunction);
let act = document.getElementById(DOMStrings.keyboardactive);
act.addEventListener('click',() =>{
  keyboardlisteners();
  act.style.display ='none';
  document.getElementById('btk').style.display = 'none';
});
}

//computer keybord application
function keyboardlisteners(){
  document.addEventListener('keypress',()=>{
    if(event.which == 49){

      GetContent.b1();
      event.which = '';
    }
    if(event.which == 50){
      GetContent.b2();
      event.which = '';
    }
    if(event.which == 51){
      GetContent.b3();
      event.which = '';
    }
    if(event.which == 52){
      GetContent.b4();
      event.which = '';
    }
    if(event.which == 53){
      GetContent.b5();
      event.which = '';
    }
    if(event.which == 54){
      GetContent.b6();
      event.which = '';
    }
    if(event.which == 55){
      GetContent.b7();
      event.which = '';
    }
    if(event.which == 56){
      GetContent.b8();
      event.which = '';
    }
    if(event.which == 57){
      GetContent.b9();
      event.which = '';
    }
    if(event.which == 48){
      GetContent.b0();
      event.which = '';
    }
    if(event.which == 46){
      GetContent.bdot();
      event.which = '';
    }
    if(event.which == 43){
      GetContent.add();
      event.which = '';
    }
    if(event.which == 47){
      GetContent.divide();
      event.which = '';
    }
    if(event.which == 42){
      GetContent.multiply();
      event.which = '';
    }
    if(event.which == 45){
      GetContent.substract();
      event.which = '';
    }
    if(event.which == 37){
      GetContent.mod();
      event.which = '';
    }
    if(event.which == 61){
      DisplayUICur();
      event.which = '';
    }

  })

}

function init(){
  GetContent.firstnumber = '',
  GetContent.currentvalue = '',
  GetContent.sign = [];
  document.getElementById(DOMStrings.currentvalue).innerHTML = 0;
  setTimeout(()=>{
    document.getElementById(DOMStrings.totalvalue).innerHTML = 0;
  },5000),
  eventlisteners();

}
init();
