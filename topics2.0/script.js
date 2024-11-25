document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("user-icon");
  const userMenu = document.getElementById("user-menu");
  const userAvatar = document.getElementById("user-avatar");

  // 隨機圖片列表
  const avatarImages = [
    "avatar1.png", // 替換為你的檔案名稱
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
    "avatar6.png",
    "avatar7.png",
    "avatar8.png",
    "avatar9.png",
    "avatar10.png",
  ];

  // 隨機選取一個頭像
  const randomAvatar = avatarImages[Math.floor(Math.random() * avatarImages.length)];
  userAvatar.src = `images/${randomAvatar}`; // 假設圖片存放在 images 資料夾

  // 點擊頭像顯示或隱藏選單
  userIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // 防止冒泡影響全局點擊事件
    userMenu.classList.toggle("hidden"); // 使用 CSS class 控制顯示
  });

  // 點擊其他區域時隱藏選單
  document.addEventListener("click", () => {
    userMenu.classList.add("hidden");
  });

  // 防止點擊選單時關閉選單
  userMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    
  });
});
