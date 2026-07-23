
export function initBottomSheet(){
  const sheet=document.getElementById("bottomSheet");
  if(!sheet) return;

  document.querySelectorAll("[data-place]").forEach(item=>{
    item.addEventListener("click",()=>{
      sheet.classList.add("show");
      document.getElementById("sheetTitle").textContent=item.dataset.place;
      document.getElementById("sheetDesc").textContent="景點介紹將於後續版本串接。";
    });
  });

  document.getElementById("closeSheet")?.addEventListener("click",()=>{
    sheet.classList.remove("show");
  });
}
