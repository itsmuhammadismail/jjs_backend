const invoiePdf = (data) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>A simple, clean, and responsive HTML invoice DHS template</title>

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

                <td>Job #: ${data.jjsfreight.job_no}<br /></td>
              </tr>
            </table>
          </td>
        </tr>

        <tr class="heading">
          <td></td>

          <td></td>
        </tr>

        <tr class="item">
          <td>Cost DHS Airsea</td>
          <td>${data.cost_dhs_airsea}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Airsea</td>
          <td>${data.invoice_dhs_airsea}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Shifting</td>
          <td>${data.cost_dhs_shifting}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Shifting</td>
          <td>${data.invoice_dhs_shifting}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Demurrage</td>
          <td>${data.cost_dhs_demurrage}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Demurrage</td>
          <td>${data.invoice_dhs_demurrage}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Transport</td>
          <td>${data.cost_dhs_transport}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Transport</td>
          <td>${data.invoice_dhs_transport}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS B/L Charges / AWB fee</td>
          <td>${data.cost_dhs_blcharges}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS B/L Charges / AWB fee</td>
          <td>${data.invoice_dhs_blcharges}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Export THC / Airport handling</td>
          <td>${data.cost_dhs_export}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Export THC / Airport handling</td>
          <td>${data.invoice_dhs_export}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Documentation</td>
          <td>${data.cost_dhs_documentation}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Documentation</td>
          <td>${data.invoice_dhs_documentation}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS IMCO Charges</td>
          <td>${data.cost_dhs_imcocharges}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS IMCO Charges</td>
          <td>${data.invoice_dhs_imcocharges}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Inspection</td>
          <td>${data.cost_dhs_inspection}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Inspection</td>
          <td>${data.invoice_dhs_inspection}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Agent Communication Handling</td>
          <td>${data.cost_dhs_agentcom}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Agent Communication Handling</td>
          <td>${data.invoice_dhs_agentcom}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Gate Pass</td>
          <td>${data.cost_dhs_gatepass}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Gate Pass</td>
          <td>${data.invoice_dhs_gatepass}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Warehousing</td>
          <td>${data.cost_dhs_warehouse}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Warehousing</td>
          <td>${data.invoice_dhs_warehouse}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Export Deciration</td>
          <td>${data.cost_dhs_deciration}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Export Deciration</td>
          <td>${data.invoice_dhs_deciration}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Bill of Entry</td>
          <td>${data.cost_dhs_billentry}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Bill of Entry</td>
          <td>${data.invoice_dhs_billentry}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Custom Duty</td>
          <td>${data.cost_dhs_customduty}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Custom Duty</td>
          <td>${data.invoice_dhs_customduty}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Custom Deposit</td>
          <td>${data.cost_dhs_customdeposit}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Custom Deposit</td>
          <td>${data.invoice_dhs_customdeposit}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Service Charges</td>
          <td>${data.cost_dhs_servicecharges}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Service Charges</td>
          <td>${data.invoice_dhs_servicecharges}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Certification</td>
          <td>${data.cost_dhs_certification}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Certification</td>
          <td>${data.invoice_dhs_certification}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS House BL Charge</td>
          <td>${data.cost_dhs_housecharge}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS House BL Charge</td>
          <td>${data.invoice_dhs_housecharge}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Truck Waiting Charge</td>
          <td>${data.cost_dhs_truckwaiting}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Truck Waiting Charge</td>
          <td>${data.invoice_dhs_truckwaiting}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Driver Gate Pass</td>
          <td>${data.cost_dhs_diverpass}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Driver Gate Pass</td>
          <td>${data.invoice_dhs_diverpass}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Truck Gate Pass</td>
          <td>${data.cost_dhs_truckpass}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Truck Gate Pass</td>
          <td>${data.invoice_dhs_truckpass}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Crosstuffing charge</td>
          <td>${data.cost_dhs_crosstuffing}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Crosstuffing charge</td>
          <td>${data.invoice_dhs_crosstuffing}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Late Manifest</td>
          <td>${data.cost_dhs_manifest}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Late Manifest</td>
          <td>${data.invoice_dhs_manifest}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS CFS Charge</td>
          <td>${data.cost_dhs_cfscharge}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS CFS Charge</td>
          <td>${data.invoice_dhs_cfscharge}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS DPS</td>
          <td>${data.cost_dhs_dpc}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS DPS</td>
          <td>${data.invoice_dhs_dpc}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS DPA</td>
          <td>${data.cost_dhs_dpa}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS DPA</td>
          <td>${data.invoice_dhs_dpa}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Delivery Order</td>
          <td>${data.cost_dhs_deliveryorder}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Delivery Order</td>
          <td>${data.invoice_dhs_deliveryorder}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS THC</td>
          <td>${data.cost_dhs_thc}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS THC</td>
          <td>${data.invoice_dhs_thc}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS ISPC</td>
          <td>${data.cost_dhs_ispc}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS ISPC</td>
          <td>${data.invoice_dhs_ispc}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Priority Charge</td>
          <td>${data.cost_dhs_priority}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Priority Charge</td>
          <td>${data.invoice_dhs_priority}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Seal</td>
          <td>${data.cost_dhs_seal}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Seal</td>
          <td>${data.invoice_dhs_seal}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Customer Seal</td>
          <td>${data.cost_dhs_customerseal}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Customer Seal</td>
          <td>${data.invoice_dhs_customerseal}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Customer Affording</td>
          <td>${data.cost_dhs_affording}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Customer Affording</td>
          <td>${data.invoice_dhs_affording}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Customer Stamp</td>
          <td>${data.cost_dhs_stamp}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Customer Stamp</td>
          <td>${data.invoice_dhs_stamp}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Shipout Stamp</td>
          <td>${data.cost_dhs_shipout}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Shipout Stamp</td>
          <td>${data.invoice_dhs_shipout}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Final Stamp</td>
          <td>${data.cost_dhs_finalstamp}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Final Stamp</td>
          <td>${data.invoice_dhs_finalstamp}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Manifest amendment</td>
          <td>${data.cost_dhs_amendment}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Manifest amendment</td>
          <td>${data.invoice_dhs_amendment}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Overtime charge</td>
          <td>${data.cost_dhs_overtime}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Overtime charge</td>
          <td>${data.invoice_dhs_overtime}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Fuel Recovery</td>
          <td>${data.cost_dhs_fuel}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Fuel Recovery</td>
          <td>${data.invoice_dhs_fuel}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Warehouse Storage</td>
          <td>${data.cost_dhs_warehousestorage}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Warehouse Storage</td>
          <td>${data.invoice_dhs_warehousestoragw}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Port Storage</td>
          <td>${data.cost_dhs_portstorage}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Port Storage</td>
          <td>${data.invoice_dhs_portstorage}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS MCO Storage</td>
          <td>${data.cost_dhs_mcostorage}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS MCO Storage</td>
          <td>${data.invoice_dhs_mcostorage}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS IMCO Handling</td>
          <td>${data.cost_dhs_imcohandling}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS IMCO Handling</td>
          <td>${data.invoice_dhs_imcohandling}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Miscelaneous</td>
          <td>${data.cost_dhs_miscelaneous}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Miscelaneous</td>
          <td>${data.invoice_dhs_miscelaneous}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Stickers and tables</td>
          <td>${data.cost_dhs_stickers}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Stickers and tables</td>
          <td>${data.invoice_dhs_stickers}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Lashing</td>
          <td>${data.cost_dhs_lashing}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Lashing</td>
          <td>${data.invoice_dhs_lashing}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Vehicle Lashing</td>
          <td>${data.cost_dhs_vehicle}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Vehicle Lashing</td>
          <td>${data.invoice_dhs_vehicle}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Carge Lashing</td>
          <td>${data.cost_dhs_carge}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Carge Lashing</td>
          <td>${data.invoice_dhs_carge}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Warehouse Charges</td>
          <td>${data.cost_dhs_warehousecharges}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Warehouse Charges</td>
          <td>${data.invoice_dhs_warehousecharge}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Stacking Charges</td>
          <td>${data.cost_dhs_stacking}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Stacking Charges</td>
          <td>${data.invoice_dhs_stacking}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Repairing Charges</td>
          <td>${data.cost_dhs_repairing}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Repairing Charges</td>
          <td>${data.invoice_dhs_repairing}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS General Charges</td>
          <td>${data.cost_dhs_general}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS General Charges</td>
          <td>${data.invoice_dhs_general}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Manual Deposit</td>
          <td>${data.cost_dhs_manualdeposite}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Manual Deposit</td>
          <td>${data.invoice_dhs_manualdeposite}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Other</td>
          <td>${data.cost_dhs_others}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Other</td>
          <td>${data.invoice_dhs_others}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Fumigation</td>
          <td>${data.cost_dhs_fumigation}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Fumigation</td>
          <td>${data.invoice_dhs_fumigation}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS BL Surrender Fee</td>
          <td>${data.cost_dhs_surrenderfee}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS BL Surrender Fee</td>
          <td>${data.invoice_dhs_surrenderfee}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Taxi</td>
          <td>${data.cost_dhs_taxi}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Taxi</td>
          <td>${data.invoice_dhs_taxi}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Bus/Metro Charge</td>
          <td>${data.cost_dhs_bus}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Bus/Metro Charge</td>
          <td>${data.invoice_dhs_bus}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Container Stuffing Charge</td>
          <td>${data.cost_dhs_containerstuffing}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Container Stuffing Charge</td>
          <td>${data.invoice_dhs_containerstuffing}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Offloading Charge</td>
          <td>${data.cost_dhs_containeroffloading}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Offloading Charge</td>
          <td>${data.invoice_dhs_containeroffloading}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Damages Charge</td>
          <td>${data.cost_dhs_damagescharge}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Damages Charge</td>
          <td>${data.invoice_dhs_damagescharge}</td>
        </tr>

        <tr class="item">
          <td>Cost DHS Paryial offloading Carge</td>
          <td>${data.cost_dhs_paryialoffloading}</td>
        </tr>
        <tr class="item">
          <td>Invoice DHS Paryial offloading Carge</td>
          <td>${data.invoice_dhs_paryialoffloading}</td>
        </tr>

      </table>
    </div>
  </body>
</html>
`;

module.exports = invoiePdf;
