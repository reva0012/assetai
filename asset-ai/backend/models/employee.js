const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id: {type: String},
    Company: { type: String},
    Fleet: { type: String},
    VesselIMO: { type: String},
    VesselName: { type: String},
    Equipment: { type: String},
    Parameter: { type: String},
    Count: { type: String},
    TotalDuration: { type: String},
    LongestDuration: { type: String},
    LongestDurationStartTime: { type: String},
    AlertType: { type: String},
    Status: { type: String},
    AOTRemarks: { type: String},
    MarkAlert: { type: String},
    RootCause: { type: String},
    ActionTaken : { type: String},
    UseCase : { type: String},
    CostAvoidance: { type: String},
    RemarksforCostAvoidance: { type: String},
    RoleofSMARTShip: { type: String},
    PotentialSeverity: { type: String},
    PotentialConsequence: { type: String},
    Screenshot: { type: String},
    Month: { type: String},
    CurrentTSI: { type: String},
    EmailID: { type: String}
});

module.exports = { Employee };
