(function(){
    // Chọn nút thông qua class js-cd-top giống như trong HTML của bạn
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, 
		offsetOpacity = 1200, 
		scrolling = false;

	if( backTop ) {
		// 1. Lắng nghe sự kiện cuộn chuột để thêm/bớt class ẩn hiện
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		// 2. Lắng nghe sự kiện CLICK để cuộn mượt lên đỉnh bằng tính năng mặc định của trình duyệt
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Cuộn mượt mà không cần hàm Util.scrollTo phức tạp
            });
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		
        // Điều khiển class hiển thị nút khi cuộn quá 300px
        if (windowTop > offset) {
            backTop.classList.add('cd-top--is-visible');
        } else {
            backTop.classList.remove('cd-top--is-visible', 'cd-top--fade-out');
        }

        // Điều khiển class làm mờ nút khi cuộn quá 1200px
        if (windowTop > offsetOpacity) {
            backTop.classList.add('cd-top--fade-out');
        }
        
		scrolling = false;
	}
})();