<script>
  import {
    Chart,
    LineElement,
    LineController,
    CategoryScale,
    PointElement,
    LinearScale,
  } from "chart.js";
  import { onMount } from "svelte";

  const labels = [
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: Array.from({ length: labels.length }, () => {
          return Math.random() * 100;
        }),
        backgroundColor: "rgb(255,255,0)",
        fill: "origin",
        borderColor: "rgb(255,0,0)",
        tension: 0.1,
      },
    ],
  };

  Chart.register(
    LineElement,
    LineController,
    CategoryScale,
    PointElement,
    LinearScale
  );

  onMount(() => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            position: "right",
          },
        },
      },
    });
  });
</script>

<div class="card">
  <div class="flex">
    <canvas class="p-8" id="myChart" width="200" height="40" />

    <div class="flex-shrink-0 p-8 m-auto place-content-center">
      <h1 class="text-2xl font-semibold text-center">$CRO2L0</h1>
      <button class="btn btn-green">BUY</button>
      <button class="btn btn-red">SELL</button>
      <h1 class="text-2xl font-semibold text-center">@2.111</h1>
    </div>
  </div>
</div>

<style lang="postcss">
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
  .btn-green {
    @apply text-white bg-green-500;
  }
  .btn-red {
    @apply text-white bg-red-500;
  }

  .card {
    @apply bg-white rounded-xl shadow-md  m-8;
  }
</style>
