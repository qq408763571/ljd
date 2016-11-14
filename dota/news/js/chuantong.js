function chuantong(speed,intervalTime,width) {
	//全局变量
	var nowimg = 0;		//信号量，当前显示的图片序号

	//得到图片的总数量
	var imageAmount = $("#news_s ul").length;

	//克隆第一张图片，然后追加到最后一张去
	//clone()就是克隆，但是光克隆没有用，一定要把克隆的元素追加到原有的HTML中。
	//《锋利的jQuery》第62页~72页。稍微看看。
	$("#news_s:first").clone().appendTo(".bd");

	//得到所有元素，给变量名之前加$，是个约定。一眼就能知道，这个变量存放着jQuery元素。
	var $imagesList = $("#news_s");

	//上按钮的事件
	$(".v-top").click(topBtnFunc);	//有名函数，不要加圆括号！！

	//我们把右按钮要做的事情，单独提炼出一个函数。起名字。
	//这么做的原因，是为了定时器的调用。
	function topBtnFunc(){
		if(!$imagesList.is(":animated")){
			//分类讨论，现在到底到没到最后一张
			if(nowimg < imageAmount - 1){
				nowimg ++;
				//普通运动，拉到第nowimg这张图片上
				normalAnimate();	//调用函数，普通运动
			}else{
				nowimg = 0;
				//往第5张（假0）身上拉，然后瞬间切换到0。
				$imagesList.animate({"bottom" : imageAmount * - width} , speed ,"easieEaseInQuint", function(){
					//回调函数
					$(this).css("height" , 0);	//css是瞬间的
				});
			}

		}
	}

	//下按钮
	$(".v-bottom").click(function(){
		if(!$imagesList.is(":animated")){
			//分类，判断现在是不是到头了
			if(nowimg > 0){
				nowimg --;
				normalAnimate();	//调用函数，普通运动
			}else{
				nowimg = imageAmount - 1;
				//到头了，让假0替换真0
				$imagesList.css("bottom" , imageAmount * -height);
				normalAnimate();	//调用函数，普通运动
			}

		}
	});



	//普通运动，让火车往信号上拉
	function normalAnimate(){
		$imagesList.animate({"bottom" : nowimg * -height} , speed ,"easieEaseInQuint");
	}



	//定时器的业务
	var timer = setInterval(topBtnFunc,intervalTime);

	//鼠标进入，停止
	$(".bd").mouseenter(function(){
		clearInterval(timer);
	});

	//鼠标离开，继续
	$(".bd").mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(topBtnFunc,intervalTime);
	});

}