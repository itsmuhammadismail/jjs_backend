import mongoose from "mongoose";

const costSheetSchema = mongoose.Schema(
  {
    //Air/Sea Frieght
    cost_dhs_airsea: String,
    invoice_dhs_airsea: String,

    //Shifting

    cost_dhs_shifting: String,
    invoice_dhs_shifting: String,

    //Demurrage

    cost_dhs_demurrage: String,
    invoice_dhs_demurrage: String,

    //transport

    cost_dhs_transport: String,
    invoice_dhs_transport: String,

    //B/L charges/AWB fee

    cost_dhs_blcharges: String,
    invoice_dhs_blcharges: String,

    //export thc/airport handling

    cost_dhs_export: String,
    invoice_dhs_export: String,

    //documentation

    cost_dhs_documentation: String,
    invoice_dhs_documentation: String,

    //IMCO CHARGES

    cost_dhs_imcocharges: String,
    invoice_dhs_imcocharges: String,

    //inspection

    cost_dhs_inspection: String,
    invoice_dhs_inspection: String,

    //agent communication handling

    cost_dhs_agentcom: String,
    invoice_dhs_agentcom: String,

    //gate pass
    cost_dhs_gatepass: String,
    invoice_dhs_gatepass: String,

    //ware housing

    cost_dhs_warehouse: String,
    invoice_dhs_warehouse: String,

    //export deciration

    cost_dhs_deciration: String,
    invoice_dhs_deciration: String,

    //bill of entry
    cost_dhs_billentry: String,
    invoice_dhs_billentry: String,

    //custom duty
    cost_dhs_customduty: String,
    invoice_dhs_customduty: String,

    //custom deposit
    cost_dhs_customdeposit: String,
    invoice_dhs_customdeposit: String,

    //servicecharges
    cost_dhs_servicecharges: String,
    invoice_dhs_servicecharges: String,

    //certification

    cost_dhs_certification: String,
    invoice_dhs_certification: String,

    //house bl charge
    cost_dhs_housecharge: String,
    invoice_dhs_housecharge: String,

    //truck waiting charge
    cost_dhs_truckwaiting: String,
    invoice_dhs_truckwaiting: String,

    //diver gatepass
    cost_dhs_diverpass: String,
    invoice_dhs_diverpass: String,

    //truck gatepass
    cost_dhs_truckpass: String,
    invoice_dhs_truckpass: String,

    //crosstuffing charge
    cost_dhs_crosstuffing: String,
    invoice_dhs_crosstuffing: String,

    //late manifest
    cost_dhs_manifest: String,
    invoice_dhs_manifest: String,

    //cfs charge
    cost_dhs_cfscharge: String,
    invoice_dhs_cfscharge: String,

    //dpc
    cost_dhs_dpc: String,
    invoice_dhs_dpc: String,

    //dpa
    cost_dhs_dpa: String,
    invoice_dhs_dpa: String,

    //deliveryorder
    cost_dhs_deliveryorder: String,
    invoice_dhs_deliveryorder: String,

    //thc
    cost_dhs_thc: String,
    invoice_dhs_thc: String,

    //ispc
    cost_dhs_ispc: String,
    invoice_dhs_ispc: String,

    //priority charge
    cost_dhs_priority: String,
    invoice_dhs_priority: String,

    //seal
    cost_dhs_seal: String,
    invoice_dhs_seal: String,

    //customer seal
    cost_dhs_customerseal: String,
    invoice_dhs_customerseal: String,

    //customer affording
    cost_dhs_affording: String,
    invoice_dhs_affording: String,

    //custom stamp
    cost_dhs_stamp: String,
    invoice_dhs_stamp: String,

    //shipout stamp
    cost_dhs_shipout: String,
    invoice_dhs_shipout: String,

    //final stamp
    cost_dhs_finalstamp: String,
    invoice_dhs_finalstamp: String,

    //manifest amendment
    cost_dhs_amendment: String,
    invoice_dhs_amendment: String,

    //overtime charge
    cost_dhs_overtime: String,
    invoice_dhs_overtime: String,

    //fuel recovery
    cost_dhs_fuel: String,
    invoice_dhs_fuel: String,

    //warehouse storage
    cost_dhs_warehousestorage: String,
    invoice_dhs_warehousestoragw: String,

    //portstorage
    cost_dhs_portstorage: String,
    invoice_dhs_portstorage: String,

    //mcostorage
    cost_dhs_mcostorage: String,
    invoice_dhs_mcostorage: String,

    //imcohandling
    cost_dhs_imcohandling: String,
    invoice_dhs_imcohandling: String,

    //miscelaneous
    cost_dhs_miscelaneous: String,
    invoice_dhs_miscelaneous: String,

    //stickers and tables
    cost_dhs_stickers: String,
    invoice_dhs_stickers: String,

    //lashing
    cost_dhs_lashing: String,
    invoice_dhs_lashing: String,

    //vehicle lashing
    cost_dhs_vehicle: String,
    invoice_dhs_vehicle: String,

    //carge lashing
    cost_dhs_carge: String,
    invoice_dhs_carge: String,

    //warehouse charges
    cost_dhs_warehousecharges: String,
    invoice_dhs_warehousecharge: String,

    //stacking charges
    cost_dhs_stacking: String,
    invoice_dhs_stacking: String,

    //repairing charge
    cost_dhs_repairing: String,

    invoice_dhs_repairing: String,

    //general charge
    cost_dhs_general: String,
    invoice_dhs_general: String,

    //manual deposite
    cost_dhs_manualdeposite: String,
    invoice_dhs_manualdeposite: String,

    //fumigation
    cost_dhs_fumigation: String,
    invoice_dhs_fumigation: String,

    //bl surrenderfee
    cost_dhs_surrenderfee: String,
    invoice_dhs_surrenderfee: String,

    //taxi
    cost_dhs_taxi: String,
    invoice_dhs_taxi: String,

    //bus/metro charge
    cost_dhs_bus: String,
    invoice_dhs_bus: String,

    //container stuffing charge
    cost_dhs_containerstuffing: String,
    invoice_dhs_containerstuffing: String,

    //container offloading charge
    cost_dhs_containeroffloading: String,
    invoice_dhs_containeroffloading: String,

    //damagescharge
    cost_dhs_damagescharge: String,
    invoice_dhs_damagescharge: String,

    //paryialoffloading charge
    cost_dhs_paryialoffloading: String,
    invoice_dhs_paryialoffloading: String,


    //Approve
    approve: {
      type: Boolean,
      default: false,
    },

    //foreign key for user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    //foreign key for jjsfreight
    jjsfreight: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "JJSFreight",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CostSheet", costSheetSchema);
