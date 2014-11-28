var OFFSET = 30;
var MIN_TIME = 6;
var TIMER = 100;

var banner = document.getElementById("bn");
var mark = document.getElementById("mk");
var html = document.documentElement;

var b_rect = banner.getBoundingClientRect();
var w_rect = {height: html.clientHeight, width: html.clientWidth};

var time = 0;
var cycle;
var flag = false;
var flag_started = false;

function tick()
{
	time++;
	if (!flag && time > MIN_TIME)
	{
		flag = true;
		clearInterval(cycle);
		mark.style.background = "rgb(0, 255, 0)";
	}
}

window.onscroll = function(event) 
{
	if (flag)
		return;
	//console.clear();
	b_rect = banner.getBoundingClientRect();
	w_rect = {height: html.clientHeight, width: html.clientWidth};

	var state = b_rect.top >= -OFFSET && b_rect.left >= -OFFSET && b_rect.bottom <= w_rect.height + OFFSET && b_rect.right <= w_rect.width + OFFSET;

	if (!flag_started && state)
	{
		flag_started = true;
		cycle = setInterval(tick, TIMER);
		console.log(1);
	}
	if (flag_started && !state)
	{
		console.log(0);
		time = 0;
		flag_started = false;
		clearInterval(cycle);
	}
}
