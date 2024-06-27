let swiperInstance;
const showButton = document.querySelector('.showButton--show');
const hideButton = document.querySelector('.showButton--hide');

        function initSwiper() {
            
            swiperInstance = new Swiper('.swiper', {
                direction: 'horizontal',
                slidesOffsetBefore: 16,  
                loop: true,
                spaceBetween: 16,
                slidesPerView: 'auto',
                pagination: {
                el: '.swiper-pagination',
                clickable: ' true' ,
                }
            });
        }

        function destroySwiper() {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = undefined;
            }
        }
        function addHidden768() {
            const brandsSlides = document.querySelectorAll('.brands-list__item');
            
            for (let i = 6; i < brandsSlides.length; i++) {
                brandsSlides[i].classList.add("hidden");
            }
        }

        function addHidden1120() {
            const brandsSlides = document.querySelectorAll('.brands-list__item');
            for (let i = 8; i < brandsSlides.length; i++) {
                brandsSlides[i].classList.add("hidden");
            }
        }


        function removeHidden() {
            const brandsSlides = document.querySelectorAll('.brands-list__item');
            for (let i = 6; i < brandsSlides.length; i++) { 
                brandsSlides[i].classList.remove("hidden");
            }
        }
        
        
        function showAllClick() {
            removeHidden();
            showButton.classList.add("showButton--hidden");
            hideButton.classList.remove("showButton--hidden");
        }

        function hideAllClick() {
            checkScreenWidthHidden();
            showButton.classList.remove("showButton--hidden");
            hideButton.classList.add("showButton--hidden");
        }
        

        function checkScreenWidthSwiper() {
            if (window.innerWidth <= 767) {
                showButton.classList.add("showButton--hidden");
                
                if (!swiperInstance) {
                    initSwiper();
                }
            } else {
                showButton.classList.remove("showButton--hidden");
                if (swiperInstance) {
                    destroySwiper();
                }
            }
        }

        function checkScreenWidthHidden() {
            if (window.innerWidth > 768 && window.innerWidth < 1120) {
                addHidden768();
            } else {
                removeHidden();
                addHidden1120();
            }
        }
        
        // Initial check
        checkScreenWidthSwiper();
        checkScreenWidthHidden();
        
        

        // Check on resize
        window.addEventListener('resize', checkScreenWidthSwiper);
        window.addEventListener('resize', checkScreenWidthHidden);
        showButton.addEventListener('click', showAllClick);
        hideButton.addEventListener('click', hideAllClick);

        

// const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: 'horizontal',
//     slidesOffsetBefore: 16,  
//     loop: true,
//     spaceBetween: 16,
//     slidesPerView: 'auto',
//     pagination: {
//     el: '.swiper-pagination',
//     clickable: ' true' ,
//     }
//   });

 
