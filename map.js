
let map;
let markers=[];

export function initMap(){
  map=L.map('map').setView([24.4472,118.0816],11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
  }).addTo(map);

  const places=[
    {name:'鼓浪嶼',lat:24.4472,lng:118.0816},
    {name:'中山路',lat:24.4578,lng:118.0875},
    {name:'五通碼頭',lat:24.5644,lng:118.1968}
  ];

  const bounds=[];
  places.forEach((p,i)=>{
    const m=L.marker([p.lat,p.lng]).addTo(map).bindPopup(p.name);
    m.on('click',()=>map.flyTo([p.lat,p.lng],16));
    markers.push(m);
    bounds.push([p.lat,p.lng]);
  });
  map.fitBounds(bounds);
}
