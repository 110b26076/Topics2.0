<?php
session_start();
if(isset($_SESSION["user_id"])){
    echo "使用者". $_SESSION["user_id"];
}
?>
<?php
$host = "127.0.0.1";
$port = 5000;

// 創建 WebSocket 客戶端
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_connect($socket, $host, $port);

// 發送手勢數據
$request = json_encode(array("gesture_type" => "switch_app"));
socket_write($socket, $request, strlen($request));

// 接收後端回應
$response = socket_read($socket, 1024);
echo $response;

// 關閉連接
socket_close($socket);
?>

<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>基於電腦視覺之手勢控制電腦與家電系統</title>
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="win.css">
</head>
<body>
  <!-- 導覽列 -->
  <header id="navbar">
    <div class="nav-content">
      <span class="nav-title">基於電腦視覺之手勢控制電腦與家電系統</span>
      <div class="nav-links" id="nav-links">
        <a href="index.php">首頁</a>
        <a href="seach.php">歷史紀錄</a>
      </div>
      <!-- 用戶圖標 -->
      <div class="user-icon" id="user-icon">
        <img id="user-avatar" alt="User Avatar" />
      </div>
    </div>
  </header>
  <!-- 用戶選單 -->
  <div id="user-menu" class="user-menu hidden">
    <ul>
      <li><a href="ir_operation.php">設定</a></li>
      <li><a href="login.php">登出</a></li>
    </ul>
  </div>

  <!-- 右下角按鈕 -->
  <button id="info-button">ⓘ</button>

  <div id="videoContainer">
        <video id="video" width="640" height="480" autoplay></video>
        <!-- 用於繪製手勢識別圖像的Canvas -->
        <canvas id="gestureCanvas" width="640" height="480"></canvas>
    </div>

  <script src="script.js"></script>
  <script src="scc.js"></script>
  <script src="canvas.js"></script>
</body>
</html>
