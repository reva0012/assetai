const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        Company: req.body.Company,
        Fleet: req.body.Fleet,
        VesselIMO: req.body.VesselIMO,
        VesselName: req.body.VesselName,
        Equipment: req.body.Equipment,
        Parameter: req.body.Parameter,
        Count: req.body.Count,
        TotalDuration: req.body.TotalDuration,
        LongestDuration: req.body.LongestDuration,
        LongestDurationStartTime: req.body.LongestDurationStartTime,
        AlertType: req.body.AlertType,
        Status: req.body.Status,
        AOTRemarks: req.body.AOTRemarks,
        MarkAlert: req.body.MarkAlert,
        RootCause: req.body.RootCause,
        ActionTaken : req.body.ActionTaken,
        UseCase : req.body.UseCase,
        CostAvoidance: req.body.CostAvoidance,
        RemarksforCostAvoidance: req.body.RemarksforCostAvoidance,
        RoleofSMARTShip: req.body.RoleofSMARTShip,
        PotentialSeverity: req.body.PotentialSeverity,
        PotentialConsequence: req.body.PotentialConsequence,
        Screenshot: req.body.Screenshot,
        Month: req.body.Month,
        CurrentTSI: req.body.CurrentTSI,
        EmailID: req.body.EmailID
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        Company: req.body.Company,
        Fleet: req.body.Fleet,
        VesselIMO: req.body.VesselIMO,
        VesselName: req.body.VesselName,
        Equipment: req.body.Equipment,
        Parameter: req.body.Parameter,
        Count: req.body.Count,
        TotalDuration: req.body.TotalDuration,
        LongestDuration: req.body.LongestDuration,
        LongestDurationStartTime: req.body.LongestDurationStartTime,
        AlertType: req.body.AlertType,
        Status: req.body.Status,
        AOTRemarks: req.body.AOTRemarks,
        MarkAlert: req.body.MarkAlert,
        RootCause: req.body.RootCause,
        ActionTaken : req.body.ActionTaken,
        UseCase : req.body.UseCase,
        CostAvoidance: req.body.CostAvoidance,
        RemarksforCostAvoidance: req.body.RemarksforCostAvoidance,
        RoleofSMARTShip: req.body.RoleofSMARTShip,
        PotentialSeverity: req.body.PotentialSeverity,
        PotentialConsequence: req.body.PotentialConsequence,
        Screenshot: req.body.Screenshot,
        Month: req.body.Month,
        CurrentTSI: req.body.CurrentTSI,
        EmailID: req.body.EmailID
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in deleting :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
