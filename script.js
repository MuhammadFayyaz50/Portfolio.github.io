 $(document).ready(function(){
 	$(window).scroll(function(){
 		if (this.scrollY > 30) {
 			$(".navbar").addClass("sticky");	
 		}else{
 			$(".navbar").removeClass("sticky");
 		}
 	});
 	//toggle navbar/menu-btn //
 	$(".menu-btn").click(function(){
 		$(".navbar .menu").toggleClass(".active");
 		$(".menu-btn i").toggleClass(".active");
 	});

 });
