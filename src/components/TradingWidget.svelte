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

  const labels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
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
    });
  });
</script>

<button class="btn btn-green">BUY</button>
<button class="btn btn-red">SELL</button>
<canvas id="myChart" width="400" height="50" />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
  .btn-green {
    @apply text-white bg-green-500;
  }
  .btn-red {
    @apply text-white bg-red-500;
  }
</style>
