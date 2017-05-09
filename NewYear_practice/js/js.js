window.onload=function(){
    var page1=document.getElementById('page1');
    var page2=document.getElementById('page2');
    var page3=document.getElementById('page3');
    
	var music=document.getElementById('music');
	var audio=document.getElementsByTagName('audio')[0];
		
	stop=function(event){
		music.setAttribute('class','');
	}
	autoPlay=function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute('class','play');
		}else{
			audio.pause();
			this.setAttribute('class','');
		}
	}
//	音乐结束,碟片停止旋转
    audio.addEventListener("ended",stop,false);
//  点击碟片,实现音乐播放暂停效果
	music.addEventListener("touchstart",autoPlay,false);
	
//	点击屏幕,开始翻页效果
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		//第三页在第二页的下面,translate上移100%,使出现在当前页
		
		setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn')
		},5500)
		
	},false)
	
}
	


