var hlis = document.getElementsByClassName("hiddenlist");
var i;

for(i=0; i<hlis.length;i++)
{
  hlis[i].addEventListener("click",function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
       panel.style.minHeight = null;
      panel.style.maxHeight = null;
      
    } else {
     var ab = panel.scrollHeight ;
      var cal = ab+20;
      panel.style.minHeight  = cal + "px";
      panel.style.maxHeight  = "200px";
    } 
    
    
  });
}