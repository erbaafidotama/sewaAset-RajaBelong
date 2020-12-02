<script>
  import { loged } from "./stores/stores.js";

  import CardWrapper from "./components/CardWrapper.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Checkout from "./components/Checkout.svelte";
  import Section from "./components/Section.svelte";
  import Login from "./components/Login.svelte";

  let nav = "home";

  function navHandler(event) {
    nav = event.detail.option;
  }
  let login = false;
  // const unsubscribe = loged.subscribe((items) => {
  //   login = Object.values(items);
  // });
  // console.log(login);

  function log() {
    login = true;
    console.log(login);
  }
</script>

<style>
  #logreg-forms {
    width: 412px;
    margin: 10vh auto;
    background-color: #f3f3f3;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  #logreg-forms .form-signin {
    width: 100%;
    max-width: 410px;
    padding: 15px;
    margin: auto;
  }
  #logreg-forms .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  #logreg-forms .form-control:focus {
    z-index: 2;
  }
  #logreg-forms .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  #logreg-forms .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  #logreg-forms button[type="submit"] {
    margin-top: 10px;
  }

  .logo-login {
    width: 180px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  /* Mobile */

  @media screen and (max-width: 500px) {
    #logreg-forms {
      width: 300px;
    }
  }
</style>

<!-- <Navbar on:nav={navHandler} />
<Section />
{#if nav === 'home'}
  <CardWrapper />
{:else}
  <Checkout />
{/if} -->

<!-- <Login /> -->

{#if login === false}
  <body>
    <div id="logreg-forms">
      <div class="form-signin">
        <img src="img/rejang-lebong.png" class="logo-login" alt="" />
        <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
          Login
        </h1>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus="" />
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required="" />
        <hr />
        <button class="btn btn-success btn-block" on:click={log}><i
            class="fas fa-sign-in-alt" />
          Login</button>
      </div>
    </div>
  </body>
{:else}
  <Navbar on:nav={navHandler} />
  <Section />
  {#if nav === 'home'}
    <CardWrapper />
  {:else}
    <Checkout />
  {/if}
{/if}
