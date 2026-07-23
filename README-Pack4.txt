
Pack4 更新內容

1. mobile.css
   - 手機版 RWD
2. animation.css
   - FadeUp 動畫
3. bottom-sheet.js
   - 景點 Bottom Sheet
   - 點擊景點顯示資訊
   - 可關閉

HTML 請加入：

<div id="bottomSheet" class="bottom-sheet">
  <button id="closeSheet">關閉</button>
  <h2 id="sheetTitle"></h2>
  <p id="sheetDesc"></p>
</div>

景點元素加入：
data-place="鼓浪嶼"
