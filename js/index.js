$(document).ready(function() {
	var name = document.getElementById('name');
		var headerP = name.getElementsByTagName('p');
		var headerNav = document.getElementById('nav');
		var headerNavLi = headerNav.getElementsByTagName('li');
		//var sectionImgState=false;
		(function() {
			headerNameFun(name, headerP);
			headerNavFun(headerNavLi);
			photo();
			section_text();
		})()
		/*****************header********************/
		function headerNameFun(name, headerP) {
			name.addEventListener('mouseover', function() {
				headerP[0].innerHTML = '羊羊';
				headerP[1].innerHTML = '前端开发工程师';
			})
			name.addEventListener('mouseout', function() {
				headerP[0].innerHTML = '刘洁';
				headerP[1].innerHTML = '个人简历';
			})
		}

		function headerNavFun(objs) {
			var oDivs = headerNav.getElementsByTagName('div');
			var timer;
			var timer1;

			function NavClearWidth() {
				for(var i = 0; i < oDivs.length; i++) {
					oDivs[i].style.width = '0px';
				}
			}
			for(var i = 0; i < objs.length; i++) {
				(function(index) {
					objs[index].addEventListener('mouseover', function() {
						this.style.color = 'black';
						var thisDiv = this.getElementsByTagName('div')[0];
						var changeWidth = 0;
						NavClearWidth();
						timer = setInterval(function() {
							if(changeWidth == 92) {
								clearInterval(timer);
							}
							changeWidth = changeWidth + 1;
							thisDiv.style.width = changeWidth + "px";
						}, 5)
					})
					objs[index].addEventListener('mouseout', function() {
						this.style.color = '#666';
						var thisDiv = this.getElementsByTagName('div')[0];
						if(timer) {
							clearInterval(timer);
						}
						var changeWidth2 = parseInt(getStyle(thisDiv, 'width'));
						timer1 = setInterval(function() {
							if(changeWidth2 == 0) {
								clearInterval(timer1);
								NavClearWidth();
							}
							changeWidth2 = changeWidth2 - 1;
							thisDiv.style.width = changeWidth2 + "px";
						}, 5)
						NavClearWidth();
					})
				})(i)
			}
		}
		/*****************section********************/
		function photo() {
			var state = false;
			var timer;
			var spaceTimer;
			var photo = document.getElementById('photo');
			var img = photo.getElementsByTagName('img')[0];

			function photoin() {
				if(timer) {
					clearTimeout(timer);
				}
				photo.setAttribute('class', 'section-banner-imgin');
				timer = setTimeout(function() {
					img.src = 'img/photos2.jpg';
				}, 250);
			}
			function photoout() {
				if(timer) {
					clearTimeout(timer);
				}
				photo.setAttribute('class', 'section-banner-imgout');
				timer = setTimeout(function() {
					img.src = 'img/photob1.jpg';
				}, 250);
			}
			photo.addEventListener("webkitAnimationEnd", function() {
				$(this).mouseover(function() {
					photoin();
				}).mouseout(function() {
					photoout();
				});
			});
		}
		
		function section_text() {
			var secName = document.getElementById('section-name');
			var secAge = document.getElementById('section-age');
			var secJob = document.getElementById('section-job');
			var secEmail = document.getElementById('section-email');
			var textName = ['我', '叫', '刘', '洁'];
			var textAge = ['2', '4', '岁'];
			var textJob = ['前', '端', '开', '发'];
			var textEmail = ['3', '6', '4', '3', '7', '9', '7', '1', '3', '@', 'q', 'q', '.', 'c', 'o', 'm'];
			setTimeout(function() {
				addText(secName, textName, function() {
					addText(secAge, textAge, function() {
						addText(secJob, textJob, function() {
							addText(secEmail, textEmail);
						})
					});
				})
			}, 2000);
			function addText(obj, arr, fn) {
				var i = 0;
				var timer = null;
				timer = setInterval(function() {
					if(i > arr.length - 1) {
						clearInterval(timer);
						i = 0;
						if(fn) {
							fn()
						};
					} else {
						obj.innerHTML += arr[i];
						i++;
					}
				}, 200);
			}
		}
	
	
	
	$.fn.fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
		afterLoad: function(anchorLink, index) {
			if(index == 2) {
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('div').fadeIn(2000);
			}
			if(index == 3) {
				$('.section3').find('p').delay(500).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4) {
				$('.section4').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction) {
				if(index == '1') {
					$('.section2').find('div').fadeIn(2000);
				}
				if(index == '2') {
					$('.section2').find('p').delay(500).animate({
						left: '-120%'
					}, 1500, 'easeOutExpo');
					$('.section2').find('div').fadeOut(2000);
				}
				if(index == '3') {
					$('.section3').find('p').delay(500).animate({
						right: '120%'
					}, 1500, 'easeOutExpo');
				}
				if(index == '4') {
					$('.section4').find('p').fadeOut(2000);
				}
			}
	});
});

		
/*******************组件********************/
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function hover(obj, over, out) {
	obj.addEventListener('mouseover', over, false)
}