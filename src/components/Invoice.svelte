<script>
  import { onMount } from "svelte";
  import dayjs from "dayjs";

  import { cart, pesan } from "../stores/stores.js";
  import CheckoutItem from "./CheckoutItem.svelte";
  function generateInvoice() {
    const element = document.getElementById("invoice");
    html2pdf().from(element).save();
  }
  let cartItems = [];
  let totalAmount;
  const unsubscribe = cart.subscribe((items) => {
    cartItems = Object.values(items);
  });
  //

  for (let i = 0; i < cartItems.length; i++) {
    const total_amount = {
      total_amount: cartItems[i].count * cartItems[i].price,
    };
    // cartItems[i].total_amount;
    Object.assign(cartItems[i], total_amount);
  }

  Array.prototype.sum = function (prop) {
    var total = 0;
    for (var i = 0, _len = this.length; i < _len; i++) {
      total += this[i][prop];
    }
    return total;
  };
  const all_total_amount = new Intl.NumberFormat(["ban", "id"]).format(
    cartItems.sum("total_amount")
  );

  const thatDate = dayjs($pesan.pesan_tanggal).format("dddd[,] DD/MM/YYYY");
</script>

<style>
  .invoice {
    margin-bottom: 15px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background: lightblue;
    padding: 0 17px;
  }
  .border {
    border: 1px solid #e5e5e5;
  }

  .box-rek {
    border: 2px solid red;
    padding: 10px;
    border-radius: 25px;
    font-size: 1em;
  }
</style>

<div class="row">
  {#each cartItems as item (item.name)}
    <div class="col-6">
      <CheckoutItem {item} />
    </div>
  {/each}
</div>
<body>
  <div class="container" id="invoice">
    <div class="row">
      <div class="col-md-1" />
      <div class="col-md-10 border">
        <div class="row">
          <div class="col-md-12 invoice text-center text-primary">
            <h2>Invoice</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-right">
            <p><strong>Invoice No: </strong> 12345</p>
            <p><strong>Date:</strong> 15/Jan/2020</p>
            <p>Rejang Lebong</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 well invoice-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Rent Amount</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {#each cartItems as item (item.name)}
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>
                      Rp
                      {new Intl.NumberFormat([
                        'ban',
                        'id',
                      ]).format(item.count * item.price)}
                    </td>
                  </tr>
                {/each}
                <tr>
                  <td>&nbsp;</td>
                  <td><strong>Total</strong></td>
                  <td><strong>Rp {all_total_amount}</strong></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td><strong>Tanggal Sewa</strong></td>
                  <td><strong>{thatDate}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box-rek">Mohon Transfer ke No.Rek: <b>010202xxxx</b> a.n. <b>Pemda Rejang Lebong</b></div>
        <br />
        <br />
        <div class="row">
          <div class="col-md-11 text-right mt-2 mb-2">Signature</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row ">
      <div class="col-md-12 text-center mb-4">
        <button
          class="btn btn-warning"
          id="downloadPdf"
          on:click={generateInvoice}>
          Generate Invoice
        </button>
      </div>
    </div>
  </div>
</body>
