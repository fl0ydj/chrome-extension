import TradingWidget from "../components/TradingWidget.svelte";

console.log("content script working");

setTimeout(() => {
  const target = document.getElementById("meta-contents");
  const anchor = target.lastChild as Element;

  new TradingWidget({
    target,
    anchor,
  });
}, 600);

export {};
