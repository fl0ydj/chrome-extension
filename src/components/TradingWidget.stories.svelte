<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TradingWidget from "./TradingWidget.svelte";
</script>

<Meta
  title="Example/TradingWidget"
  component={TradingWidget}
  argTypes={{
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <TradingWidget {...args} on:click={args.onClick} />
</Template>

<Story
  name="Primary"
  args={{
    primary: true,
    label: "TradingWidget",
  }}
/>
