const video = document.getElementById('video');
        const canvas = document.getElementById('gestureCanvas');
        const ctx = canvas.getContext('2d');
        
        // 設定視頻流
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
            } catch (error) {
                console.error("無法訪問攝像頭:", error);
            }
        }

        // 啟動攝像頭
        startCamera();

        // 定時更新手勢資料
        function detectGestures() {
            // 這裡是你的後端邏輯調用，例如使用 AJAX 獲取手勢資料
            fetch('your_php_backend.php', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'get_gesture_data',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                // 在Canvas上繪製手勢
                ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空之前的圖形
                drawGestureData(data); // 根據手勢資料繪製
            })
            .catch(error => console.error("獲取手勢資料失敗:", error));
        }

        // 根據後端返回的手勢資料繪製
        function drawGestureData(data) {
            if (data) {
                // 範例：根據手勢繪製圖形，這裡需要根據你傳回的資料來進行繪製
                // 例如繪製紅色圓形，代表識別到的手勢
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(data.x, data.y, 10, 0, Math.PI * 2, false);
                ctx.fill();
            }
        }

        // 設定定時器來檢測手勢
        setInterval(detectGestures, 100);