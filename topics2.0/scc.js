document.getElementById("info-button").addEventListener("click", function () {
    // 創建模態視窗容器
    const modal = document.createElement("div");
    modal.id = "carousel-modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
  
    // 插入圖片輪播 HTML 結構
    modal.innerHTML = `
      <div class="modal-content">
        <div class="carousel">
          <div class="slides">
            <div class="slide">
              <img src="01.png" alt="Slide 1">
            </div>
            <div class="slide">
              <img src="02.png" alt="Slide 2">
            </div>
            <div class="slide">
              <img src="03.png" alt="Slide 3">
            </div>
          </div>
          <div class="indicators">
            <span class="indicator active" onclick="goToSlide(0)"></span>
            <span class="indicator" onclick="goToSlide(1)"></span>
            <span class="indicator" onclick="goToSlide(2)"></span>
          </div>
          <div class="prev-next-container">
            <button class="prev-btn" onclick="prevSlide()">&lt;</button>
            <button class="next-btn" onclick="nextSlide()">&gt;</button>
          </div>
          <button class="close-btn" onclick="closeCarousel()">X</button>
        </div>
      </div>`;
  
    // 將模態視窗添加到 DOM
    document.body.appendChild(modal);
  
    // 定義關閉模態視窗的函數
    window.closeCarousel = function () {
      document.body.removeChild(modal);
    };
  
    // 初始化輪播
    const slides = document.querySelectorAll(".slide");
    const slideContainer = document.querySelector(".slides");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;
  
    slideContainer.style.width = `${slides.length * 100}%`;
  
    window.goToSlide = function (index) {
      currentIndex = index;
      const offset = -index * slides[0].offsetWidth;
      slideContainer.style.transform = `translateX(${offset}px)`;
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === currentIndex);
      });
    };
  
    window.nextSlide = function () {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    };
  
    window.prevSlide = function () {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(prevIndex);
    };
  
    // 自動播放（可選）
    const autoPlay = setInterval(nextSlide, 5000);
  
    // 清理自動播放計時器
    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("close-btn")) {
        clearInterval(autoPlay);
      }
    });
  });
  