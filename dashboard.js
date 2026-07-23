
import {travelData} from "./travel-data.js";

export function renderDashboard(){
  const items=travelData.days[travelData.currentDay];
  const total=items.length;
  const completed=items.filter(i=>i.status==="done").length;
  const current=items.find(i=>i.status==="current");
  const next=items.find(i=>i.status==="next");

  const pct=Math.round(completed/Math.max(total,1)*100);

  const map={
    currentPlace: current?.title ?? "-",
    nextPlace: next?.title ?? "今日完成",
    progress: pct+"%"
  };

  Object.entries(map).forEach(([id,val])=>{
    const el=document.getElementById(id);
    if(el) el.textContent=val;
  });

  const bar=document.getElementById("progressBar");
  if(bar) bar.style.width=pct+"%";
}
