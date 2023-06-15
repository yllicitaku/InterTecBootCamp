// //DOM
// var btn1 = document.getElementById('btn1');
// var timeLeft = document.getElementById('tl');
// var endTime = document.getElementById('endTime');
// var inputValue = (<HTMLInputElement>document.getElementById('btn1')).value;
// console.log(inputValue);
// var btn2 = document.getElementById('btn2');
// var inputValue2 = (<HTMLInputElement>document.getElementById('btn2')).value;
// var input = document.getElementById("inputM");
// function setT(numH?:any, minutes?:any, sec?:any, date = new Date()) {
//     console.log(date);
//     date.setTime(date.getTime() + numH * 60 * 60 * 1000);
//     date.setTime(date.getTime() + minutes * 60 * 1000);
//     date.setTime(date.getTime() + sec * 1000);
//     return `${date.getHours()} h - ${date.getMinutes()}m`;
// }
// btn1?.addEventListener('click',(e)=>{
//     e.preventDefault();
//     var x = parseInt(inputValue);
//     var d = new Date();
//     endTime!.innerHTML=`END TIME - ${setT(null,null,x,d)}`;
//     setInterval(()=>{
//         timeLeft!.innerHTML = `${x.toString()} second`;
//         if(x==0){
//             timeLeft!.innerHTML = `DONE!`;
//             endTime!.innerHTML=`DONE!`;
//             return;
//         }
//             x--;
//     },1000)
// })
// btn2?.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let x = parseInt(inputValue2);
//     let minutes:number = x/60-1;
//     let seconds:number = 59;
//     var d = new Date();
//     endTime!.innerHTML=`END TIME - ${setT(null,null,x,d)}`;
//     setInterval(()=>{
//         timeLeft!.innerHTML = `${minutes.toString()} m - ${seconds.toString()} s`;
//         if(x==0){
//             timeLeft!.innerHTML = `DONE!`;
//             endTime!.innerHTML=`DONE!`;
//             return;
//         }else{
//             x--;
//             seconds--;
//             if(seconds<0){
//                 minutes--;
//                 seconds=59;
//             }
//         }
//     },1000 )
// })
// input?.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     const target = event.target as HTMLInputElement;
//     let x = parseInt(target.value)*60;
//     let minutes:number = x/60-1;
//     let seconds:number = 59;
//     var d = new Date();
//     endTime!.innerHTML=`END TIME - ${setT(null,null,x,d)}`;
//   setInterval(()=>{
//     timeLeft!.innerHTML = `${minutes.toString()} m - ${seconds.toString()} s`;
//     if(x==0){
//         timeLeft!.innerHTML = `DONE!`;
//         endTime!.innerHTML=`DONE!`;
//         return;
//     }else{
//         x--;
//         seconds--;
//         if(seconds<0){
//             minutes--;
//             seconds=59;
//         }
//     }
//     },1000 )
//     event.preventDefault();
//   }
// });
var person = /** @class */ (function () {
    //
    function person(args) {
        var _this = this;
        this.getEmri = function () {
            console.log(_this.name);
        };
        Object.assign(this, args);
        //    this.name = args.name;
        //    this.age = args.age;
        //    this.salaray = args.salaray;
    }
    person.count = 0;
    return person;
}());
var p1 = new person({ name: 'Valmir', salary: 120 });
var p2 = new person({ name: 'ASD', salary: 120 });
p1.getEmri();
p2.getEmri();
