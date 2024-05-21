let successMsg=`<img src="check.png" alt=""> Succseefully Submitted`
let ErrorMsg=`<img src="remove.png" alt=""> Error Occured`
let InvalidMsg=`  <img src="warning.png" alt=""> Warning..Invalid Message`
function showToast(message) {
   let toast= document.createElement("div");
   toast.classList.add('toast');
   toast.innerHTML=message;
   let box=document.querySelector(".toastbox");
   box.appendChild(toast);
   if(message.includes("Error")){
    toast.classList.add('error');
   }
   if(message.includes("Invalid")){
    toast.classList.add('invalid');
   }
   setTimeout(()=>{
toast.remove();
   },5000)
}
{/* <img src="check.png" alt="" /> */}