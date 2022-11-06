import React, { useState } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar() {
  const [dataChart, setDataChart] = useState({
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'minggu'],
    datasets: [
      {
        label: 'data 1',
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ['rgba(31, 208, 236, 1)'],
      },
    ],
  });
  useEffect(() => {
    setDataChart({
      labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'minggu'],
      datasets: [
        {
          label: 'Jumlah Waktu',
          data: [6, 3, 12, 2, 1, 4, 2],
          backgroundColor: ['rgba(31, 208, 236, 1)'],
        },
      ],
    });
  }, []);
  return (
    <div>
      <Bar
        data={dataChart}
        options={{
          responsive: true,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: '#000',
            },
            title: {
              display: true,
              text: 'Aktivitas',
              fontSize: 25,
              position: 'top',
            },
          },
        }}
      />
    </div>
  );
}
