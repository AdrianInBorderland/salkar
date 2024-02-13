$(document).ready(function() {
	
	function resizedR(parentsize, childsize){
		childsize.style.width = parentsize.offsetWidth;
		childsize.style.height = parentsize.offsetHeight;
		childsize.style.borderRight = parentsize.offsetWidth + 'px solid rgba(0, 0, 0, 0.35)';
		childsize.style.borderTop = parentsize.offsetHeight + 'px solid transparent';
	}
	function resizedL(parentsize, childsize){
		childsize.style.width = parentsize.offsetWidth;
		childsize.style.height = parentsize.offsetHeight;
		childsize.style.borderRight = parentsize.offsetWidth + 'px solid transparent';
		childsize.style.borderTop = parentsize.offsetHeight + 'px solid rgba(0, 0, 0, 0.35)';
	}
	window.onload = function(){
		var content = document.querySelector('.prlw');
		var triangleR = document.querySelector('.prlw-r');
		var triangleL = document.querySelector('.prlw-l');
		resizedR(content,triangleR);
		resizedL(content,triangleL);
		window.onresize = function(e){
			resizedR(content,triangleR);
			resizedL(content,triangleL);
		}
	}
	$(window).load(function(){
		$('.prlw-r').animate({
			bottom: "-=10%",
			right: "-=10%"
		}, 700);
		$('.prlw-l').animate({
			top: "-=10%",
			left: "-=10%"
		}, 700);
		setTimeout(function(){
			$('.prlc-lb div').animate({
				width: "100%"
			}, 2000);
		}, 400);
		setTimeout(function(){
			$('.prlw-r').animate({
				bottom: "-=100%",
				right: "-=100%"
			}, 700);
			$('.prlw-l').animate({
				top: "-=100%",
				left: "-=100%"
			}, 700);
			$('.prlc').animate({
				opacity: "0"
			}, 300);			
		}, 2000);
		setTimeout(function(){
			$('.prlp').animate({
				top: "-=100%",
				opacity: 0
			}, 700, function() {
				$('.prlp').remove();
			});
			aO( '.aoi', 'animate__bounceIn' );
			$('.aoi').removeClass('aoinv');
		}, 2300);
	});	
	if (s_s == 1) {
		sp = "assets/a/";
		ion.sound({		
			sounds: [
				{
					name: "b1",
					path: sp,
					volume: 1
				},
				{
					name: "b2",
					path: sp,
					volume: 1
				},
				{
					name: "a1",
					path: sp,
					volume: 1
				},
				{
					name: "a2",
					path: sp,
					volume: 1
				},
				{
					name: "c2",
					path: sp,
					volume: 1
				},
				{
					name: "s1",
					path: sp,
					volume: 1
				},
				{
					name: "s2",
					path: sp,
					volume: 1
				},
				{
					name: "c1",
					path: sp,				
					volume: 1,
					loop: true
				}
			],
			path: sp,
			preload: true,
			multiplay: true
		});
	}
	if($('#header-particles').length){
		particlesJS.load('header-particles', 'assets/js/particlesjs-config.json');
	}
	var jsp, jsp_i, peu;	
	jsp = "";	
	function fixplatformBox($platform_parent_class) {
        resetplatformBoxes();
        if ($platform_parent_class.hasClass('p-s-i-1')) {
            jsp = 'Windows PC';
            jsp_i = '<i class="fab fa-windows"></i>';
        }
        if ($platform_parent_class.hasClass('p-s-i-2')) {
            jsp = 'Xbox';
			jsp_i = '<i class="fab fa-xbox"></i>';
        }
		if ($platform_parent_class.hasClass('p-s-i-3')) {
            jsp = 'Playstation';
			jsp_i = '<i class="fab fa-playstation"></i>';
        }
		if ($platform_parent_class.hasClass('p-s-i-4')) {
            jsp = 'Android';
			jsp_i = '<i class="fab fa-android"></i>';
        }
		if ($platform_parent_class.hasClass('p-s-i-5')) {
            jsp = 'iOS';
			jsp_i = '<i class="fab fa-apple"></i>';
        }
        $platform_parent_class.addClass('active');
    }	
    function resetplatformBoxes() {
        var $platform_list = $('.p-s-i-1, .p-s-i-2, .p-s-i-3, .p-s-i-4, .p-s-i-5');	
        if ($platform_list.hasClass('active')) {
            $platform_list.removeClass('active');
        }
    }
	$('.p-s-i').click(function() {		
		if (!$(this).hasClass("active")) {
			if (s_s == 1) {
				ion.sound.play("b1");
			}
			aO( this, 'animate__headShake' );
		}	
		fixplatformBox($(this));
    });
	$c_s_m = ".prcs-m";
	$(document).on("click","#p-b-a",function() {
		if (s_s == 1) {
			ion.sound.play("b2");
		}
		if($('#u-i').val() == '') {
			aO( $('.s-e-w-u'), 'animate__flipInX' );
			$('.s-e-w-u').fadeIn(function() {					
				setTimeout(function(){
					$('.s-e-w-u').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animate__animated animate__flipOutX');
						$(this).hide();
					});
				}, 1200);
			});
		}
		if(jsp == '') {
			aO( $('.s-e-w-p'), 'animate__flipInX' );
			$('.s-e-w-p').fadeIn(function() {					
				setTimeout(function(){
					$('.s-e-w-p').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animate__animated animate__flipOutX');
						$(this).hide();
					});
				}, 1200);
			});
		}
		if(jsp != '' && $('#u-i').val() != '') {
			peu = $('#u-i').val();
			rfs();
		}
	});	
	$('#u-i').on('keypress', function (e) {
         if(e.which === 13){
            $(this).attr("disabled", "disabled");
			if (s_s == 1) {
				ion.sound.play("b2");
			}
			if($('#u-i').val() == '') {
				aO( $('.s-e-w-u'), 'animate__flipInX' );
				$('.s-e-w-u').fadeIn(function() {			
					setTimeout(function(){
						$('.s-e-w-u').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animate__animated animate__flipOutX');
							$(this).hide();
						});
					}, 1200);
				});
				$('#u-i').removeAttr("disabled");
			}
			if(jsp == '') {
				aO( $('.s-e-w-p'), 'animate__flipInX' );
				$('.s-e-w-p').fadeIn(function() {					
					setTimeout(function(){
						$('.s-e-w-p').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animate__animated animate__flipOutX');
							$(this).hide();
						});
					}, 1200);
				});
				$('#u-i').removeAttr("disabled");
			}
			if(jsp != '' && $('#u-i').val() != '') {
				peu = $('#u-i').val();
				rfs();
			}
         }
   });
	function rfs() {
		gS( "rpas", function(src) {
			ceh = $('.b-s-c-w').height();			
			$( ".b-s-c-w" ).addClass('animate__animated animate__bounceOut');
			setTimeout(function(){			
				$( '.b-s-c-w' ).hide();
				$( '.a-s-c-w' ).html(src).hide().fadeIn();	
				$('.a-s-c-w').height(ceh);	
				$( '#s-f-p-t-u-v' ).html(peu);
				$( '#s-f-p-t-p-v' ).html(jsp_i);				
				if (s_s == 1) {
					setTimeout(function(){
						ion.sound.play("a1");	
					}, 200);
				}					
				function random_delay(delay_arr) {
					return delay_arr[Math.floor(Math.random()*delay_arr.length)];	 
				}
				var delay_arr = [2000, 2500, 3000, 3500, 4000];
				setTimeout(function(){
					$('.s-f-p-a-w').fadeOut(function() {
						$(this).remove();
						const element = document.querySelector('.caSsi');
						element.classList.add('animate__animated', 'animate__bounceOut');
						element.addEventListener('animationend', () => {							
							$( '.s-f-p-t-l div' ).removeClass('animate__animated animate__pulse animate__infinite');
							$( '.s-f-p-t-l div' ).addClass('animate__animated animate__bounceIn caSs-ts');
							$( '.s-f-p-t-l div' ).html(s1sts2);
							$( '.caSs' ).html('<svg class="caSs-cm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="caSs-cm-ci" cx="26" cy="26" r="25" fill="none"/><path class="caSs-cm-ch" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>');
							if (s_s == 1) {
								ion.sound.play("s1");							
							}
							setTimeout(function(){	
								rf();
							}, 1500);
						});
					});
				}, 3000);
			}, 600);	
		});	
	}
	function rf() {
		$.ajax({
			url: 'assets/rbparr/grd.php',
			type: "GET",
			datatype: "json",
			success: function (data) {
				var roX = JSON.parse(data);
				gS( "rpar", function(src) {
					$( '.c-w-u' ).removeClass('animate__animated animate__bounceIn');
					if (s_s == 1) {
						ion.sound.play("s2");
					}
					const element = document.querySelector('.c-w-u');
					element.classList.add('animate__animated', 'animate__flipOutY');
					element.addEventListener('animationend', () => {
						if (s_s == 1) {
							ion.sound.play("a2");	
						}
						$( '.m-s .container' ).html(src).hide().fadeIn();
						$([document.documentElement, document.body]).animate({
							scrollTop: $(".c-w-r").offset().top
						}, 2000);
						aO( '.c-w-r', 'animate__bounceIn' );						
						$( '.c-i-t-v' ).html(roX['s2_i_t']);
						$( '.r-i-s-r-h-w span' ).html(roX['s2_rb_t']);						
						$( '#p-b-r span' ).html(roX['s2_bt']);						
						$( '.r-s-i-1 img' ).attr("src",roX['ri1']);
						$( '.r-s-i-1 .r-s-i-v' ).html(roX['r1']);
						$( '.r-s-i-1 .r-s-i-l' ).html(roX['rl1']);
						$( '.r-s-i-2 img' ).attr("src",roX['ri2']);
						$( '.r-s-i-2 .r-s-i-v' ).html(roX['r2']);
						$( '.r-s-i-2 .r-s-i-l' ).html(roX['rl2']);
						$( '.r-s-i-3 img' ).attr("src",roX['ri3']);
						$( '.r-s-i-3 .r-s-i-v' ).html(roX['r3']);
						$( '.r-s-i-3 .r-s-i-l' ).html(roX['rl3']);
						$( '.r-s-i-4 img' ).attr("src",roX['ri4']);
						$( '.r-s-i-4 .r-s-i-v' ).html(roX['r4']);
						$( '.r-s-i-4 .r-s-i-l' ).html(roX['rl4']);
						aO( '.r-s-i', 'animate__bounceIn' );
						jsra = roX['r1'];
						jsri = roX['ri1'];
						jsrl = roX['rl1'];
						$(".r-i-s-r-w-i").attr("src",jsri);
						$( '.r-i-s-r-m-v' ).html(jsra);
						$( '.r-i-s-r-m-l' ).html(jsrl);
						function fRs($rs_p_c) {
							rPb();
							if ($rs_p_c.hasClass('r-s-i-1')) {
								jsra = roX['r1'];
								jsri = roX['ri1'];;
								jsrl = roX['rl1'];
							}
							if ($rs_p_c.hasClass('r-s-i-2')) {
								jsra = roX['r2'];
								jsri = roX['ri2'];
								jsrl = roX['rl2'];
							}
							if ($rs_p_c.hasClass('r-s-i-3')) {
								jsra = roX['r3'];
								jsri = roX['ri3'];
								jsrl = roX['rl3'];
							}
							if ($rs_p_c.hasClass('r-s-i-4')) {
								jsra = roX['r4'];
								jsri = roX['ri4'];
								jsrl = roX['rl4'];
							}
							$rs_p_c.addClass('active');
						}	
						function rPb() {
							var $rs_l = $('.r-s-i-1, .r-s-i-2, .r-s-i-3, .r-s-i-4');	
							if ($rs_l.hasClass('active')) {
								$rs_l.removeClass('active');
							}
						}
						$('.r-s-i').click(function() {
							$( '.r-s-i' ).removeClass('animation-delay-200  animation-delay-400  animation-delay-600  animation-delay-800');
							if (!$(this).hasClass("active")) {
								if (s_s == 1) {
									ion.sound.play("b1");
								}
								aO( this, 'animate__headShake' );	
								aO( '.r-i-s-r-m-v', 'animate__flipInX' );	
							}
							fRs($(this));
							$('.r-i-s-r-m-v').text(jsra);
							$('.r-i-s-r-m-l').text(jsrl);
							$(".r-i-s-r-w-i").attr("src",jsri);
						});
						$(document).on("click","#p-b-r",function() {
							if (s_s == 1) {
								ion.sound.play("b2");
							}							
							$('.acpeou').addClass('animate__animated animate__flipOutY');
							if (s_s == 1) {
								setTimeout(function(){
									ion.sound.play("s2");	
								}, 150);
							}
							rsf();
						});
					});
				});	
			}
        });	
	}
	function rsf() {		
		setTimeout(function(){
			$.ajax({
				url: 'assets/rbparr/gpd.php',
				type: "GET",
				datatype: "json",
				success: function (data) {
					var poX = JSON.parse(data);					
					$psm_1 = poX['ps1'];
					$psm_2 = poX['ps2'];
					$psm_3 = poX['ps3'];
					$psm_4 = poX['ps4'];
					$psm_5 = poX['ps5'];					
					gS( "rpap", function(src) {
						if (s_s == 1) {
							ion.sound.play("a2");	
						}
						$( '.m-s .container' ).html(src);
						$(".c-w-p-g-i-i-t-i").attr("src",jsri);
						$('.c-w-p-g-i-i-b-l').text(jsrl);
						function pBC(percent, $element, duration) {
							var pBCWidth = percent * $element.width() / 100;
							$element.find('div').animate({ width: pBCWidth }, duration).html(percent + "%&nbsp;");
						}
						pBC(0, $('#pBC'), 1);
						$psm_1 = $psm_1.replace(/\[selected_amount\]/g, jsra);
						$psm_2 = $psm_2.replace(/\[selected_amount\]/g, jsra);
						$psm_3 = $psm_3.replace(/\[selected_amount\]/g, jsra);
						$psm_4 = $psm_4.replace(/\[selected_amount\]/g, jsra);
						$psm_5 = $psm_5.replace(/\[selected_amount\]/g, jsra);
						$psm_1 = $psm_1.replace(/\[resource_name\]/g, jsrl);
						$psm_2 = $psm_2.replace(/\[resource_name\]/g, jsrl);
						$psm_3 = $psm_3.replace(/\[resource_name\]/g, jsrl);
						$psm_4 = $psm_4.replace(/\[resource_name\]/g, jsrl);
						$psm_5 = $psm_5.replace(/\[resource_name\]/g, jsrl);
						$psm_1 = $psm_1.replace(/\[username\]/g, peu);
						$psm_2 = $psm_2.replace(/\[username\]/g, peu);
						$psm_3 = $psm_3.replace(/\[username\]/g, peu);
						$psm_4 = $psm_4.replace(/\[username\]/g, peu);
						$psm_5 = $psm_5.replace(/\[username\]/g, peu);
						$psm_1 = $psm_1.replace(/\[platform\]/g, jsp);
						$psm_2 = $psm_2.replace(/\[platform\]/g, jsp);
						$psm_3 = $psm_3.replace(/\[platform\]/g, jsp);
						$psm_4 = $psm_4.replace(/\[platform\]/g, jsp);
						$psm_5 = $psm_5.replace(/\[platform\]/g, jsp);
						sT(0, $psm_1, 0, 1, 0);
						sT(1500, $psm_2, 0, 20, 0);
						sT(3500, $psm_3, 1, 40, 0);
						sT(11000, $psm_4, 0, 80, 0);
						sT(13000, $psm_5, 0, 90, 0);
						sT(15000, '<span class="material-icons-two-tone fa-spin">rotate_right</span>', 0, 90, 1);
					});					
				}
			});
		}, 810);
	}
	function pBC(percent, $element, duration) {
		var pBCWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: pBCWidth }, duration).html(percent + "%&nbsp;");
	}
	function sT(tD, cms, gn, lb, sls) {
		setTimeout(function() {	
			$($c_s_m).html(cms);			
			aO( $($c_s_m), 'animate__bounceIn' );			
			if (gn === 1) {
				$( ".c-w-p" ).removeClass('animate__animated animate__bounceIn animation-delay-100');
				gih = $('.c-w-p-g-i').height();
				gihn = (gih / 2) + 20;				
				$( ".c-w-p" ).animate({
					top: "-="+gihn
				}, 800);				
				$( ".c-w-p-g-i" ).animate({
					bottom: "-="+gihn,
					opacity: "1"
				}, 800, function() {
					aO( $('.cwPBw'), 'animate__bounceIn' );
					function cwPB(percent, $element, duration) {
						var cwPBWidth = percent * $element.width() / 100;
						$element.find('div').animate({ width: cwPBWidth }, duration).html(percent + "%&nbsp;");
					}
					cwPB(0, $('#cwPB'), 1);
					cwPB(100, $('#cwPB'), 3500);
					if (s_s == 1) {
						ion.sound.play("c1");
					}
					$('#c-w-p-g-i-i-b-v').countTo({
						from: 0,
						to: jsra,
						speed: 2500,
						refreshInterval: 10,
						onComplete: function (value) {
							if (s_s == 1) {
								ion.sound.stop("c1");								
							}							
							$( ".c-w-p-g-i-i-t img" ).fadeOut(300, function() {
								$('.c-w-p-g-i-i-t').html('<svg class="caSs-cm caSs-cm-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="caSs-cm-ci" cx="26" cy="26" r="25" fill="none"/><path class="caSs-cm-ch" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>');
								aO( $('.c-w-p-g-i'), 'animate__jello' );
								if (s_s == 1) {
									ion.sound.play("s1");							
								}
								setTimeout(function(){									
									$('.c-w-p-g-i-i-c-w').html('<span class="material-icons-two-tone mitt-r">check_circle</span>');
									$( ".c-w-p-g-i-i-c-w" ).addClass('c-w-p-g-i-i-c-w-s');									
									aO( $('.cwPBw'), 'animate__headShake' );
									$( ".cwPBw" ).addClass('cwPBws');
								}, 250);
								setTimeout(function(){
									$( ".c-w-p-g-i" ).fadeOut(function() {
										$( ".c-w-p-g-i-c" ).remove();
										$( ".c-w-p" ).animate({
											top: "+="+gihn
										}, 600);
									});
								}, 2000);
							});							
						}
					});	
				});                
            }
			if (sls === 1) {
				$( ".c-w-p" ).removeClass('animate__animated animate__bounceIn animation-delay-100');
				$.ajax({
					url: 'assets/rbparr/gpl.php',
					type: "GET",
					datatype: "json",
					success: function (data) {
						var poL = JSON.parse(data);
						$lsv1 = poL['lst'];
						$lsv2 = poL['lsp'];
						$lsv1 = $lsv1.replace(/\[selected_amount\]/g, jsra);
						$lsv2 = $lsv2.replace(/\[selected_amount\]/g, '<span class="lsv2s">'+jsra+'</span>');
						$lsv1 = $lsv1.replace(/\[resource_name\]/g, jsrl);
						$lsv2 = $lsv2.replace(/\[resource_name\]/g, '<span class="lsv2s">'+jsrl+'</span>');
						$lsv1 = $lsv1.replace(/\[username\]/g, peu);
						$lsv2 = $lsv2.replace(/\[username\]/g, '<span class="lsv2s">'+peu+'</span>');
						$lsv1 = $lsv1.replace(/\[platform\]/g, jsp);
						$lsv2 = $lsv2.replace(/\[platform\]/g, '<span class="lsv2s">'+jsp+'</span>');
						gS( "rpal", function(src) {
							if (s_s == 1) {
								ion.sound.play("s2");
							}
							$( ".c-w-p" ).addClass('animate__animated animate__flipOutY');
							setTimeout(function(){	
								if (s_s == 1) {
									ion.sound.play("c2");
								}
								$( '.m-s .container' ).html(src);
								$(".c-w-l-r-o-w .c-w-p-g-i-i-t-i").attr("src",jsri);
								$( '.c-w-l-t-v' ).html($lsv1);
								$( '.c-w-l-p-v' ).html($lsv2);
								$( '.c-w-l-r-o-w #c-w-p-g-i-i-b-v ' ).html(jsra);
								$( '.c-w-l-r-o-w .c-w-p-g-i-i-b-l ' ).html(jsrl);
								function cwPB(percent, $element, duration) {
									var cwPBWidth = percent * $element.width() / 100;
									$element.find('div').animate({ width: cwPBWidth }, duration).html(percent + "%&nbsp;");
								}
								cwPB(100, $('#cwPB'), 1);
								aO( $('.c-w-l-t-v'), 'animate__bounceIn' );
								aO( $('.c-w-l-p-v'), 'animate__bounceIn' );
								aO( $('.c-w-l-r-o-w'), 'animate__bounceIn' );
								aO( $('.p-b-l-s-w'), 'animate__bounceIn' );
								$(document).on("click","#l-s-v-b",function() {
									if (s_s == 1) {
										ion.sound.play("b2");
									}
									$('#l-s-v-b').html('<i class="fas fa-circle-notch fa-spin"></i>');
								});								
							}, 600);
						});
					}
				});
            }
			pBC(lb, $('#pBC'), 500);
		}, tD );
	}
	function aO(el, anim, onDone) {
		var $el = $(el);
		$el.addClass( 'animate__animated ' + anim );
		$el.one( 'animationend', function() {
			$(this).removeClass( 'animate__animated ' + anim );
			onDone && onDone();
		});
	}
	function gS(step, onStep) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'assets/rbparr/' + step + '.php');
        xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                onStep && onStep(xhr.responseText)
            }
        });
        xhr.send()
		console.clear();
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    }
});