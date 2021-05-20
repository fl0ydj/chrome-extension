<script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts/highstock";
  import Exporting from "highcharts/modules/exporting";

  Exporting(Highcharts);

  const data = Array.from({ length: 50 }, () => {
    return Math.random() * 100;
  });

  onMount(() => {
    Highcharts.stockChart("myChart", {
      chart: {
        height: 400,
      },
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
      rangeSelector: {
        selected: 1,
      },
      series: [
        {
          name: "AAPL Stock Price",
          data: data,
          type: "area",
          threshold: null,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              chart: {
                height: 300,
              },
              subtitle: {
                text: null,
              },
              navigator: {
                enabled: false,
              },
            },
          },
        ],
      },
    });
  });
</script>

<div class="card">
  <div class="flex-grow h-full" id="myChart" />

  <div class="flex flex-col flex-shrink-0 ml-8 justify-evenly">
    <div>
      <h1 class="text-2xl font-semibold text-center">$CRO2L0</h1>
      <button class="btn btn-green">BUY</button>
      <button class="btn btn-red">SELL</button>
      <h1 class="text-2xl font-semibold text-center">@2.111</h1>
    </div>
    <div>
      <h1>CAP: 3000</h1>
      <br />
      <h1>VOL: 3000</h1>
      <br />
      <h1>SUP: 3000</h1>
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
    @apply p-8 bg-white rounded-xl shadow-md  m-8 flex;
  }
</style>
