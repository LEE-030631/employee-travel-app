const map=L.map('map').setView([24.4472,118.0816],11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);
[['鼓浪嶼',24.4472,118.0816],['中山路',24.4578,118.0875],['五通碼頭',24.5644,118.1968]]
.forEach(p=>L.marker([p[1],p[2]]).addTo(map).bindPopup(p[0]));
document.getElementById('startBtn').onclick=()=>alert('歡迎開始廈門員旅！');
