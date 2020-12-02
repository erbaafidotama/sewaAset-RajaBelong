<script>
  import CardWrapper from "./components/CardWrapper.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Checkout from "./components/Checkout.svelte";
  import Section from "./components/Section.svelte";

  let nav = "home";

  function navHandler(event) {
    nav = event.detail.option;
  }
</script>

<Navbar on:nav={navHandler} />
<Section />
{#if nav === 'home'}
  <CardWrapper />
{:else}
  <Checkout />
{/if}
