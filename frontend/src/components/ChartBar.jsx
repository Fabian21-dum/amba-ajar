import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { GlobalContext } from '../contexts/GlobalContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar() {
  const { state } = useContext(GlobalContext);
  const { barData } = state;

  const [dataChart, setDataChart] = useState({
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'minggu'],
    datasets: [
      {
        label: 'data 1',
        data: barData,
        backgroundColor: ['rgba(31, 208, 236, 1)'],
      },
    ],
  });
  useEffect(() => {
    setDataChart({
      labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'minggu'],
      datasets: [
        {
          label: 'Jumlah Waktu (Menit)',
          data: barData,
          backgroundColor: ['rgba(31, 208, 236, 1)'],
        },
      ],
    });
  }, [barData]);
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
