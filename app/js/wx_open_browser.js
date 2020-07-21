(function(){
    function init() {
        var ua = navigator.userAgent,
        isWeixin = !!/MicroMessenger/i.test(ua);
    
        var downloadApkDom = document.getElementById('downloadApk'),
            maskTipDom = document.getElementById('maskTip');


        if(!isWeixin){
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