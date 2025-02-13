// ***** config ***** //
if(typeof config == "undefined") config = {};
(function(_app){
	var line = [
		{name:"极速线路 1",url:"https://www.esbline.net/forum/feedback/95541"},
		{name:"极速线路 2",url:"https://www.esbline.net/forum/feedback/95541"},
		{name:"极速线路 3",url:"https://www.esbline.net/forum/feedback/95541"},
		{name:"极速线路 4",url:"https://www.esbline.net/forum/feedback/95541"},
		{name:"极速线路 5",url:"https://www.esbline.net/forum/feedback/95541"},
		{name:"极速线路 6",url:"https://www.esbline.net/forum/feedback/95541"},
	];
	var css = {
		fast:"line-fast",
	}
	_app.get_line = function(){	
		return line;
	} 
	_app.get_class = function(){	
		return css;
	}
}(config));
// ***** config end ***** //

// ***** ping ***** //
$.ping = function(url,obj,_callBack){
    var requestTime;    
    function appendHttpPrefix(url){
        var strReg="^((https|http)?://){1}";
        var re=new RegExp(strReg); 
        return re.test(url)?url:"http://"+url;
    }    
	$.ajax({
		url: appendHttpPrefix(url),
		type: "GET",
		dataType: "jsonp",
		timeout: 10000,
	 	cache: false,
		beforeSend: function(){
			requestTime = new Date().getTime();
		}, 
		complete: function(jqXHR, textStatus){
			var responseTime = new Date().getTime();
			var ackTime = responseTime - requestTime;         
			var status;
			if(textStatus == "parsererror"){
				status = "success";
			}else{
				status = textStatus;
			}   
			_callBack({ 
				url: url,
				ackTime: ackTime,
				status: status,
				obj: obj,
			});
		  } 
	}); 
};
 // ***** ping end ***** //

 // ***** detect connection end ***** //
if(typeof line == "undefined") line = {};
(function(_app){
	var globalVal = {
		pingTime :{},
		line :{},
		class :{},
	};	
	_app.init = function(){		
		globalVal.line = config.get_line();
		globalVal.class = config.get_class();
		_app.layoutLine(globalVal.line);
		_app.setButton();
		_app.detection_list();
	} 
	_app.setButton = function(){	
        $("[data-input=lineText]").keydown(function(ev){
            var ev=ev||window.event;
            if(ev.keyCode==13) {
				_app.detection();
            }
        });
		$("[data-btn=detection]").bind("click",function(){
		    _app.detection();
		});
		$("[data-btn=refresh]").bind("click",function(){
		    _app.detection_list();
		});
	}
	_app.layoutLine = function(setting){	
		var dom ,url ,name ,promoteId ,href ,clone;
		var dom = $("[data-clone=ping]");
		for(var i in setting){
			clone=dom.clone();
			name = setting[i]["name"];
			url = setting[i]["url"];
			promoteId = setting[i]["promoteId"];
			href = url;
			if( typeof(promoteId)!="undefined" ) href += ("?"+promoteId);
			$("[data-output=name]",clone).html(name);
			$("[data-link=href]",clone).html(url);
			$("[data-link=href]",clone).attr("href",href);
			$("[data-act=open]",clone).attr("href",href);
			clone.removeAttr("data-clone");
			clone.attr("data-act","ping");
			clone.attr("data-url",url);
			clone.attr("data-cls",i);
			clone.show();
			dom.before( clone );
		}
	}
	_app.detection_list = function(){	
		$("[data-act=ping]").each(function(){
			var obj =$(this);
			var url = obj.data("url");
			if(url != ""){
				var time = $.ping(url ,obj , 
					function(_result){  
						var dom = _result.obj;
						var time = _app.calculateTime(_result);
						dom.find("[data-sec=seconds]").html(time);
						var key = dom.data("cls");
						globalVal.pingTime[key] = time;
						var len = Object.keys(globalVal.class).length 
						if(len>0) _app.do_replace_class();
					}
				);
			}
		});
	}
	_app.calculateTime = function(_result){		
		var status = _result.status;
		var time = _result.ackTime;
		if(status == "timeout") time = "x";
		if(time !="x"){
			time = (time/1000);
			var size = Math.pow(10, 2);
			var time = Math.round(time * size) / size;
		}
		return time;
	}
	_app.do_replace_class = function(){
		var fastCls , slowCls;
		fastCls = globalVal.class.fast;
		slowCls = globalVal.class.slow;
		if( fastCls=="" || slowCls=="") return ;
		var pingTime = globalVal.pingTime;
		var minIdx = false;
		for(var i in pingTime){
			if(pingTime[i] == "x") continue;
			if( minIdx ===  false) minIdx = i;
			if(pingTime[minIdx] > pingTime[i])  minIdx = i;
		}
		
		for(var index in pingTime){
			var cls = $("[data-cls="+index+"]");
			if( typeof(fastCls)!="undefined" && fastCls!="" ){
	  			cls.removeClass(fastCls);
	  			if(index == minIdx){
	  				cls.addClass(fastCls);
	  			}
  			}
  			if( typeof(slowCls)!="undefined" && slowCls!="" ){
  				if(pingTime[index]=="x") cls.addClass(slowCls);
  			}
		}
	}
	_app.detection = function(){
		var url = $("[data-input=lineText]").val();
		if( !_app.is_url( url ) ){
			return alert("请输入正确网址格式");
		}
		$("[data-input=sec]").html("--");
		$.ping(url,$("[data-input=sec]"),
		    function(_result){
				var dom = _result.obj;
				var time = _app.calculateTime(_result);
				dom.html(time);
		    }
		);  
	}
	_app.is_url=function(_val){
		return /^((http|https|ftp):\/\/)?(\w(\:\w)?@)?([0-9a-z_-]+\.)*?([a-z0-9-]+\.[a-z]{2,6}(\.[a-z]{2})?(\:[0-9]{2,6})?)((\/[^?#<>\/\\*":]*)+(\?[^#]*)?(#.*)?)?$/i.test(_val);
	};

}(line));   
 $(document).ready(function() {
     line.init();
 });
 // ***** detect connection end ***** //


$(function() {
    // ***** slide toggle ***** //
    $('.toggle').click(function(){
        var $this = $(this),
            $nav = $('.nav');

        if($(this).hasClass('active')){
            $this.removeClass('active'),
            $nav.slideUp();
        }else{
            $this.addClass('active'),
            $nav.slideDown();
        }
    });
    // ***** slide toggle end ***** //

    // ***** back-top ***** //
    $("#back-top").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	 });
	$('#back-top a').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
		return false;
	});
	// ***** back-top end ***** //

	// ***** open line ***** //
	$(".openline").click(function(){
		$("#Line").slideToggle("slow");
		$(".xs1").toggle();
		$(".xs2").toggle();
	});
	// ***** open line end ***** //

    // ***** game-box ***** //
    $("#close-game-box").click(function() {
      $("#game-box").hide();
    });
    // ***** game-box end ***** //

    // ***** offer-across ***** //
    $("#offer-across-a").click(function() {
        ga('event', 'click', {event_category:'esball365', event_action:'list', event_label:'Play'});
        window.open('https://www.esbline.net/forum/feedback/95541');
    });    
    // ***** offer-across end ***** //

});
