<script>
  import dayjs from "dayjs";
  import Datepicker from "../components/datepicker/Index.svelte";
  import CheckoutItem from "./CheckoutItem.svelte";
  import Invoice from "./Invoice.svelte";
  import { cart, getPesan, pesan } from "../stores/stores.js";

  let checkedOut = false;

  let cartItems = [];
  const unsubscribe = cart.subscribe((items) => {
    cartItems = Object.values(items);
  });

  const checkout = () => {
    checkedOut = true;
    // cart.update(n => {
    //   return {};
    // });
  };

  let dateFormat = "#{l}, #{j} / #{F} / #{Y}";

  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  function selectedDate(e) {}
</script>

<style>
  .checkout-container {
    width: 70vw;
    margin: 10vh auto 0 auto;
    display: flex;
    flex-direction: column;
  }

  .empty-message {
    margin: 10px 0;
  }

  button.checkout {
    align-self: flex-start;
    padding: 5px 20px;
    margin: 20px 0;
    background: #20447d;
    color: white;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 1600px) {
    .checkout-container {
      width: 80vw;
    }
  }

  @media screen and (max-width: 1400px) {
    .checkout-container {
      width: 90vw;
    }
  }

  @media screen and (max-width: 454px) {
    button.checkout {
      align-self: stretch;
    }
  }
</style>

<div class="checkout-container">
  <h1>My Cart</h1>
  {#if cartItems.length > 0 && checkedOut === true}
    {#if checkedOut}
      <Invoice />
    {:else}
      <p class="empty-message">Your cart is empty</p>
    {/if}
  {:else if cartItems.length > 0 && checkedOut === false}
    <div class="row">
      {#each cartItems as item (item.name)}
        <div class="col-6">
          <CheckoutItem {item} />
        </div>
      {/each}
    </div>
    <div>
      <h5>Tanggal Pesan:</h5>
      <!-- <Datepicker
        on:dateSelected={selectedDate}
        format={dateFormat}
        start={new Date(2020, 9, 29)}
        end={oneYearFromNow} /> -->
      <input type="date" name="nascimento" bind:value={$pesan.pesan_tanggal} />
    </div>
    <button class="checkout" on:click={checkout}>Checkout</button>
  {/if}
</div>
