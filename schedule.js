
import {travelData} from "./travel-data.js";

export function renderSchedule(containerId="scheduleList"){
  const el=document.getElementById(containerId);
  if(!el) return;
  const items=travelData.days[travelData.currentDay];
  el.innerHTML=items.map(i=>`
    <div class="schedule-item">
      <span>${i.time}</span>
      <strong>${i.title}</strong>
      <span>${i.status}</span>
    </div>`).join("");
}
