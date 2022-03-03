"use strict";
exports.__esModule = true;
var doctor_1 = require("@hospital-sdk/doctor");
var patient_1 = require("@hospital-sdk/patient");
var scheduler_1 = require("@hospital-sdk/scheduler");
console.log(new doctor_1.Doctor());
console.log(new scheduler_1.Scheduler());
console.log(new patient_1.Patient());
