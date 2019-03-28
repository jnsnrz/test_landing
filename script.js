document.addEventListener("DOMContentLoaded", init);

function init(){

// tabs switching
var tabLinks = document.getElementsByClassName("tab_link");
var tabs = document.getElementsByClassName("tab");

for (var i = 0; i < tabLinks.length; i++) {
	tabLinks[i].addEventListener("click", getTabId);

	function getTabId() {
		var elem = this.href.split("#");
		
		changeActive(this);
		hideTabs();
		showTab(elem[1]);
	}

}

function changeActive(link){

	for (var i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = "tab_link";
	}	

	link.className = "tab_link active";
}


function hideTabs(){
	for (var i = 0; i < tabs.length; i++){
		tabs[i].className = "tab";
	}
}

function showTab(id){
	var tab = document.getElementById(id);
	tab.className = "tab selected";
}

//slider

var slider = document.getElementById('slider'),
	sliderSection = document.getElementById('sliderSection'),
	moved_width = 485,
	max_width = -(slider.offsetWidth + moved_width),
	ms_press = false;
	start_x = 0,
	drag_x = null,
	end_x = 0;

var dragEnd = (e) => {
		e.preventDefault();
		if(ms_press) {
			slider.classList.remove('no-transition');
			var shift = start_x - slider.offsetLeft,
				temp = shift % moved_width;

			var result = slider.offsetLeft + temp;
			if (result > 0) {
				result = 0;
			} else if (result < max_width) {
				result = max_width
			}
			slider.style.left = result + "px";
			ms_press = false;
			start_x = 0,
			drag_x = null,
			end_x = 0;
		}
	},
	dragMove = (e) => {
		e.preventDefault();
		if (ms_press) {
			if(!drag_x) {
			drag_x = e.pageX;
		}
		var diff = drag_x - e.pageX;
		slider.style.left = (slider.offsetLeft - diff) + "px";
		drag_x = e.pageX;
		}
	},
	dragStart = (e) => {
		e.preventDefault();
		slider.classList.add('no-transition');
		start_x = slider.offsetLeft;
		ms_press = true;
	}


sliderSection.addEventListener('mousedown', dragStart);
sliderSection.addEventListener('touchstart', dragStart);
sliderSection.addEventListener('mousemove', dragMove);
sliderSection.addEventListener('touchmove', dragMove);
sliderSection.addEventListener('mouseup', dragEnd);
sliderSection.addEventListener('mouseleave', dragEnd);
sliderSection.addEventListener('touchend', dragEnd);
}
