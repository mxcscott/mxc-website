(function(){
    function init() {
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
    
        var downloadApkDom = document.getElementById('downloadApk'),
            maskTipDom = document.getElementById('maskTip');


        if(isWeixin){
            downloadApkDom.onclick = function(e){
                window.event ? window.event.returnValue = false : e.preventDefault();
                maskTipDom.style.display = 'block';
            }
    
            maskTipDom.onclick = function(e){
                this.style.display = 'none';
            }
        }
    }

    window.onload = function(){
        init();
    }
})();
