/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

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
class person {
    //
    constructor(args) {
        this.getEmri = () => {
            console.log(this.name);
        };
        Object.assign(this, args);
        //    this.name = args.name;
        //    this.age = args.age;
        //    this.salaray = args.salaray;
    }
}
person.count = 0;
const p1 = new person({ name: 'Valmir', salary: 120 });
const p2 = new person({ name: 'ASD', salary: 120 });
p1.getEmri();
p2.getEmri();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUIsTUFBTSxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQSxvQ0FBb0Msb0JBQW9CLE1BQU0sb0JBQW9CO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQSxnQ0FBZ0Msb0JBQW9CLE1BQU0sb0JBQW9CO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JELHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vLyAvL0RPTVxyXG4vLyB2YXIgYnRuMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4xJyk7XHJcbi8vIHZhciB0aW1lTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bCcpO1xyXG4vLyB2YXIgZW5kVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRUaW1lJyk7XHJcbi8vIHZhciBpbnB1dFZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4xJykpLnZhbHVlO1xyXG4vLyBjb25zb2xlLmxvZyhpbnB1dFZhbHVlKTtcclxuLy8gdmFyIGJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuMicpO1xyXG4vLyB2YXIgaW5wdXRWYWx1ZTIgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bjInKSkudmFsdWU7XHJcbi8vIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRNXCIpO1xyXG4vLyBmdW5jdGlvbiBzZXRUKG51bUg/OmFueSwgbWludXRlcz86YW55LCBzZWM/OmFueSwgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGUpO1xyXG4vLyAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgbnVtSCAqIDYwICogNjAgKiAxMDAwKTtcclxuLy8gICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIG1pbnV0ZXMgKiA2MCAqIDEwMDApO1xyXG4vLyAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgc2VjICogMTAwMCk7XHJcbi8vICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRIb3VycygpfSBoIC0gJHtkYXRlLmdldE1pbnV0ZXMoKX1tYDtcclxuLy8gfVxyXG4vLyBidG4xPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB2YXIgeCA9IHBhcnNlSW50KGlucHV0VmFsdWUpO1xyXG4vLyAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4vLyAgICAgZW5kVGltZSEuaW5uZXJIVE1MPWBFTkQgVElNRSAtICR7c2V0VChudWxsLG51bGwseCxkKX1gO1xyXG4vLyAgICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuLy8gICAgICAgICB0aW1lTGVmdCEuaW5uZXJIVE1MID0gYCR7eC50b1N0cmluZygpfSBzZWNvbmRgO1xyXG4vLyAgICAgICAgIGlmKHg9PTApe1xyXG4vLyAgICAgICAgICAgICB0aW1lTGVmdCEuaW5uZXJIVE1MID0gYERPTkUhYDtcclxuLy8gICAgICAgICAgICAgZW5kVGltZSEuaW5uZXJIVE1MPWBET05FIWA7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHgtLTtcclxuLy8gICAgIH0sMTAwMClcclxuLy8gfSlcclxuLy8gYnRuMj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGxldCB4ID0gcGFyc2VJbnQoaW5wdXRWYWx1ZTIpO1xyXG4vLyAgICAgbGV0IG1pbnV0ZXM6bnVtYmVyID0geC82MC0xO1xyXG4vLyAgICAgbGV0IHNlY29uZHM6bnVtYmVyID0gNTk7XHJcbi8vICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbi8vICAgICBlbmRUaW1lIS5pbm5lckhUTUw9YEVORCBUSU1FIC0gJHtzZXRUKG51bGwsbnVsbCx4LGQpfWA7XHJcbi8vICAgICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4vLyAgICAgICAgIHRpbWVMZWZ0IS5pbm5lckhUTUwgPSBgJHttaW51dGVzLnRvU3RyaW5nKCl9IG0gLSAke3NlY29uZHMudG9TdHJpbmcoKX0gc2A7XHJcbi8vICAgICAgICAgaWYoeD09MCl7XHJcbi8vICAgICAgICAgICAgIHRpbWVMZWZ0IS5pbm5lckhUTUwgPSBgRE9ORSFgO1xyXG4vLyAgICAgICAgICAgICBlbmRUaW1lIS5pbm5lckhUTUw9YERPTkUhYDtcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICB4LS07XHJcbi8vICAgICAgICAgICAgIHNlY29uZHMtLTtcclxuLy8gICAgICAgICAgICAgaWYoc2Vjb25kczwwKXtcclxuLy8gICAgICAgICAgICAgICAgIG1pbnV0ZXMtLTtcclxuLy8gICAgICAgICAgICAgICAgIHNlY29uZHM9NTk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LDEwMDAgKVxyXG4vLyB9KVxyXG4vLyBpbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbi8vICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuLy8gICAgIGxldCB4ID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKSo2MDtcclxuLy8gICAgIGxldCBtaW51dGVzOm51bWJlciA9IHgvNjAtMTtcclxuLy8gICAgIGxldCBzZWNvbmRzOm51bWJlciA9IDU5O1xyXG4vLyAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4vLyAgICAgZW5kVGltZSEuaW5uZXJIVE1MPWBFTkQgVElNRSAtICR7c2V0VChudWxsLG51bGwseCxkKX1gO1xyXG4vLyAgIHNldEludGVydmFsKCgpPT57XHJcbi8vICAgICB0aW1lTGVmdCEuaW5uZXJIVE1MID0gYCR7bWludXRlcy50b1N0cmluZygpfSBtIC0gJHtzZWNvbmRzLnRvU3RyaW5nKCl9IHNgO1xyXG4vLyAgICAgaWYoeD09MCl7XHJcbi8vICAgICAgICAgdGltZUxlZnQhLmlubmVySFRNTCA9IGBET05FIWA7XHJcbi8vICAgICAgICAgZW5kVGltZSEuaW5uZXJIVE1MPWBET05FIWA7XHJcbi8vICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgeC0tO1xyXG4vLyAgICAgICAgIHNlY29uZHMtLTtcclxuLy8gICAgICAgICBpZihzZWNvbmRzPDApe1xyXG4vLyAgICAgICAgICAgICBtaW51dGVzLS07XHJcbi8vICAgICAgICAgICAgIHNlY29uZHM9NTk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgfSwxMDAwIClcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuY2xhc3MgcGVyc29uIHtcclxuICAgIC8vXHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbXJpID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBhcmdzKTtcclxuICAgICAgICAvLyAgICB0aGlzLm5hbWUgPSBhcmdzLm5hbWU7XHJcbiAgICAgICAgLy8gICAgdGhpcy5hZ2UgPSBhcmdzLmFnZTtcclxuICAgICAgICAvLyAgICB0aGlzLnNhbGFyYXkgPSBhcmdzLnNhbGFyYXk7XHJcbiAgICB9XHJcbn1cclxucGVyc29uLmNvdW50ID0gMDtcclxuY29uc3QgcDEgPSBuZXcgcGVyc29uKHsgbmFtZTogJ1ZhbG1pcicsIHNhbGFyeTogMTIwIH0pO1xyXG5jb25zdCBwMiA9IG5ldyBwZXJzb24oeyBuYW1lOiAnQVNEJywgc2FsYXJ5OiAxMjAgfSk7XHJcbnAxLmdldEVtcmkoKTtcclxucDIuZ2V0RW1yaSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=