const jjsFreightPdf = (data) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>A simple, clean, and responsive HTML invoice template</title>

    <style>
      .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        line-height: 24px;
        font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
        color: #555;
      }

      .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
      }

      .invoice-box table td {
        padding: 5px;
        vertical-align: top;
      }

      .invoice-box table tr td:nth-child(2) {
        text-align: right;
      }

      .invoice-box table tr.top table td {
        padding-bottom: 20px;
      }

      .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
      }

      .invoice-box table tr.information table td {
        padding-bottom: 40px;
      }

      .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
      }

      .invoice-box table tr.details td {
        padding-bottom: 20px;
      }

      .invoice-box table tr.item td {
        border-bottom: 1px solid #eee;
      }

      .invoice-box table tr.item.last td {
        border-bottom: none;
      }

      .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
      }

      @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
          width: 100%;
          display: block;
          text-align: center;
        }

        .invoice-box table tr.information table td {
          width: 100%;
          display: block;
          text-align: center;
        }
      }

      /** RTL **/
      .invoice-box.rtl {
        direction: rtl;
        font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
          sans-serif;
      }

      .invoice-box.rtl table {
        text-align: right;
      }

      .invoice-box.rtl table tr td:nth-child(2) {
        text-align: left;
      }
    </style>
  </head>

  <body>
    <div class="invoice-box">
      <table cellpadding="0" cellspacing="0">
        <tr class="top">
          <td colspan="2">
            <table>
              <tr>
                <td class="title">
                  <img src="logo.png" style="width: 100%; max-width: 120px" />
                </td>

                <td>Job #: ${data.job_no}<br /></td>
              </tr>
            </table>
          </td>
        </tr>

        <tr class="heading">
          <td></td>

          <td></td>
        </tr>

        <tr class="item">
          <td>Receipt Date</td>
          <td>${data.receipt_date}</td>
        </tr>
        <tr class="item">
          <td>Bill of loading</td>
          <td>${data.bill_of_loading}</td>
        </tr>
        <tr class="item">
          <td>Invoice No</td>
          <td>${data.invoice_no.join(" , ")}</td>
        </tr>
        <tr class="item">
          <td>Sales Person</td>
          <td>${data.sales_person}</td>
        </tr>
        <tr class="item">
          <td>Customer Name</td>
          <td>${data.customer.customer_name}</td>
        </tr>
        <tr class="item">
          <td>Contact Person</td>
          <td>${data.customer.contact_person}</td>
        </tr>
        <tr class="item">
          <td>Tel</td>
          <td>${data.customer.tel}</td>
        </tr>
        <tr class="item">
          <td>Mob</td>
          <td>${data.customer.mob}</td>
        </tr>
        <tr class="item">
          <td>Email</td>
          <td>${data.customer.email}</td>
        </tr>
        <tr class="item">
          <td>Shipping Fee</td>
          <td>${data.shipping.shipping_fee}</td>
        </tr>
        <tr class="item">
          <td>ETS</td>
          <td>${data.shipping.ets}</td>
        </tr>
        <tr class="item">
          <td>ETA</td>
          <td>${data.shipping.eta}</td>
        </tr>
        <tr class="item">
          <td>POL</td>
          <td>${data.shipping.pol}</td>
        </tr>
        <tr class="item">
          <td>PODS</td>
          <td>${data.shipping.pods}</td>
        </tr>
        <tr class="item">
          <td>Volume</td>
          <td>${data.shipping.volume}</td>
        </tr>
        <tr class="item">
          <td>Transporter</td>
          <td>${data.vanning.transporter}</td>
        </tr>
        <tr class="item">
          <td>Location</td>
          <td>${data.vanning.location}</td>
        </tr>
        <tr class="item">
          <td>Contact</td>
          <td>${data.vanning.contact}</td>
        </tr>
        <tr class="item">
          <td>Tel</td>
          <td>${data.vanning.tel}</td>
        </tr>
        <tr class="item">
          <td>Costed</td>
          <td>${data.customerpayment.costed}</td>
        </tr>
        <tr class="item">
          <td>Invoiced</td>
          <td>${data.customerpayment.invoiced}</td>
        </tr>
        <tr class="item">
          <td>Container Detail</td>
          <td>${data.container.container_detail}</td>
        </tr>
        <tr class="item">
          <td>ED No</td>
          <td>${data.container.ed_no}</td>
        </tr>
        <tr class="item">
          <td>Declaration</td>
          <td>${data.container.declaration}</td>
        </tr>
        <tr class="item">
          <td>Amount</td>
          <td>${data.container.amount}</td>
        </tr>
        <tr class="item">
          <td>Done by</td>
          <td>${data.checklist.done_by}</td>
        </tr>
        <tr class="item">
          <td>Certificate</td>
          <td>${data.checklist.certificate}</td>
        </tr>
        <tr class="item">
          <td>Weightment</td>
          <td>${data.checklist.weightment}</td>
        </tr>
        <tr class="item">
          <td>Invoice type</td>
          <td>${data.checklist.invoice_type}</td>
        </tr>
        <tr class="item">
          <td>Invoice amount</td>
          <td>${data.checklist.invoice_amount}</td>
        </tr>
        <tr class="item">
          <td>Bill of Loading</td>
          <td>${data.checklist.bill_of_loading}</td>
        </tr>
        <tr class="item">
          <td>Packing list</td>
          <td>${data.checklist.packing_list}</td>
        </tr>
        <tr class="item">
          <td>Certificate of origin</td>
          <td>${data.checklist.certificate_of_origin}</td>
        </tr>
        <tr class="item">
          <td>Sg</td>
          <td>${data.checklist.sg}</td>
        </tr>
        <tr class="item">
          <td>Cash</td>
          <td>${data.checklist.cash}</td>
        </tr>
        <tr class="item">
          <td>Ep</td>
          <td>${data.checklist.ep}</td>
        </tr>
        <tr class="item">
          <td>Police Paper</td>
          <td>${data.checklist.police_paper}</td>
        </tr>
        <tr class="item">
          <td>Exit Paper</td>
          <td>${data.checklist.exit_paper}</td>
        </tr>
        <tr class="item last">
          <td>Paid to</td>
          <td>${data.truck}</td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;

module.exports =  jjsFreightPdf;
