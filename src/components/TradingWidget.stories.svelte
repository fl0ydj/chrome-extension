<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TradingWidget from "./TradingWidget.svelte";
</script>

<Meta title="Example/TradingWidget" component={TradingWidget} />

<Template let:args>
  <TradingWidget {...args} on:click={args.onClick} />
</Template>

<Story name="Primary" />
