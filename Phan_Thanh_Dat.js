const labels = ['1980年', '1990年',  '2000年', '2010年', '2020年']

const data = {
  labels: labels,
  datasets: [
    {
      label: '東京都',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [11618281, 11855563, 12064101, 12159388, 14047594],
      tension: 0.4,
      order: 1,
    },
    {
      label: '大分県',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [1228913, 1236942, 1221140, 1196529, 1123852],
      tension: 0.4,
    },
    {
      label: '沖縄県',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      data: [1106559, 1222398, 1318220, 1392818, 1467490],
      tension: 0.4,
    },
    {
      label: '新潟県',
      backgroundColor: 'gray',
      borderColor: 'gray',
      data: [2451357, 2474583, 2475733, 2374450, 2201272],
      tension: 0.4,
    },
    {
      label: '三重県',
      backgroundColor: 'black',
      borderColor: 'black',
      data: [1686936, 1792514, 1857339, 1854729, 1770254],
      tension: 0.4,
    },
    {
      label: '長野県',
      backgroundColor: 'violet',
      borderColor: 'violet',
      data: [2083934, 2156627, 2215168, 2152449, 2048011],
      tension: 0.4,
    },
    {
      label: '青森県',
      backgroundColor: 'pink',
      borderColor: 'pink',
      data: [1523907, 1482873, 1475728, 1373339, 1237984],
      tension: 0.4,
    },
  ],
}
const config = {
  type: 'line', 
  data: data,
}

const canvas = document.getElementById('canvas') 
const chart = new Chart(canvas, config)