let completed = [false,false,false];

function watchAd(step){
window.open("google ads");
  
  setTimeout(()=>{
  completed[step-1] = true;
  document.getElementById("step"+step).classList.add("completed");
  checkUnlock();
},30000);
}

function checkUnlock(){
  if(completed.every(v=>v)){
    let btn = document.getElementById("downloadBtn");
    btn.disabled = false;
    btn.onclick = function(){
      window.location.href="https://t.me/PAIDPUSHFREEFIREFORFREE";
    }
  }
}

setTimeout(()=>{
  completed[step-1] = true;
  document.getElementById("step"+step).classList.add("completed");
  checkUnlock();
},30000);

let completedSteps = 0;

function watchAd(step) {
  // Shortlink / Linkpays URL
  window.open("https://linkpays.in/94VbQ", "_blank");

  completedSteps++;
  document.getElementById("step" + step).style.display = "none";

  if (completedSteps >= 3) {
    document.getElementById("downloadBtn").disabled = false;
  }
}

document.getElementById("downloadBtn").onclick = function () {
  window.location.href = "download.html"; // ya apk link
};