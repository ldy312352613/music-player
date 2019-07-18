window.onload = function(){
    var oList = document.getElementById("List");
    var oCSS = document.getElementById("css");
    var oBtn = document.getElementById("btns").children;
    var iW = 40;
    var shtml="";
    var scss="";
    var Lilength = oList.clientWidth / iW;
    var iZindex= 0;
    var iNow = 0;
    var aLi;
    var aLi = oList.children;
    for (var i=0;i<Lilength;i++ )
    {
        i>Lilength/2?iZindex--:iZindex++;
        shtml+='<li><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a></li>';
        scss += "#List li:nth-child("+(i+1)+") a{background-position:-"+(iW*i)+"px 0}";
        scss += "#List li:nth-child("+(i+1)+"){z-index:"+iZindex+"}";
    }
    oList.innerHTML = shtml;
    oCSS.innerHTML += scss;
    for (var i=0;i<oBtn.length;i++ )
    {
        oBtn[i].index = i;
        oBtn[i].onclick = function(){
            oBtn[iNow].className = "";
            for (var i=0;i<aLi.length;i++ )
            {
                aLi[i].style.transition = "0.8s "+i*50+"ms";
                aLi[i].style.WebkitTransform="rotateX(-"+(this.index)*90+"deg)";
            }
            
            iNow = this.index;
            oBtn[iNow].className = "active";
        }
    }
}