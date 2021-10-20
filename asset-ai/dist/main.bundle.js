webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-employee>\n    \n</app-employee>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_employee_component__ = __webpack_require__("../../../../../src/app/employee/employee.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__employee_employee_component__["a" /* EmployeeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col 12\">\n    <div class=\"card\" *ngIf=\"open.current\">\n      <div class=\"card-content white-text\">\n        <div class=\"row\">\n          <div class=\"col s5\">\n            <form #employeeForm=\"ngForm\">\n              <input type = \"hidden\"  name=\"_id\" #_id=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee._id\">\n              \n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Company\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Company\" readonly>\n                  <label > Company: </label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Fleet\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Fleet\" readonly>\n                  <label> Fleet:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"VesselIMO\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.VesselIMO\" readonly>\n                  <label> Vessel IMO:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"VesselName\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.VesselName\"readonly>\n                  <label> Vessel Name:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Equipment\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Equipment\"readonly>\n                  <label> Equipment:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Parameter\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Parameter\"readonly>\n                  <label> Parameter:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Count\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Count\"readonly>\n                  <label> Count:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"TotalDuration\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.TotalDuration\"readonly>\n                  <label> Total Duration:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"LongestDuration\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.LongestDuration\"readonly>\n                  <label> Longest Duration:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"LongestDurationStartTime\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.LongestDurationStartTime\"readonly>\n                  <label> Longest Duration Start Time:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"AlertType\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.AlertType\"readonly>\n                  <label> Alert Type:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Status\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Status\"readonly >\n                  <label> Status:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"AOTRemarks\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.AOTRemarks\" readonly>\n                  <label> AOT Remarks:</label>\n                </div>\n              </div>\n              \n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"MarkAlert\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.MarkAlert\">\n                  <label> Mark Alert:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"RootCause\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.RootCause\">\n                  <label> Root Cause:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"ActionTaken\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.ActionTaken\" >\n                  <label> Action Taken:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"UseCase\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.UseCase\">\n                  <label> Use Case:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"CostAvoidance\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.CostAvoidance\">\n                  <label> Cost Avoidance:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"RemarksforCostAvoidance\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.RemarksforCostAvoidance\" >\n                  <label> Remarks for Cost Avoidance:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"RoleofSMARTShip\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.RoleofSMARTShip\" >\n                  <label> Role of SMARTShip:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"PotentialSeverity\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.PotentialSeverity\" >\n                  <label> Potential Severity:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"PotentialConsequence\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.PotentialConsequence\" >\n                  <label> Potential Consequence:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"Month\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.Month\"readonly >\n                  <label> Month:</label>\n                </div>\n              </div>\n\n               <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"CurrentTSI\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.CurrentTSI\" readonly>\n                  <label> Current TSI:</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type = \"text\"  name=\"EmailID\" #name=\"ngModel\" [(ngModel)]= \"employeeService.selectedEmployee.EmailID\"readonly >\n                  <label> TSI's Email ID:</label>\n                </div>\n              </div>\n              \n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <button class= \"btn btn-custom right\" type=\"button\" (click)=\"onSubmit(employeeForm)\">Save</button>\n                  <button class= \"btn btn-custom right\" type=\"button\" (click)=\"resetForm(employeeForm)\">Reset</button>\n                </div>\n              </div>\n              </form>\n          </div>\n        </div>\n        </div>\n        </div>\n</div>\n          <div class=\"data\">\n            <table class = \"responsive-table highlight\">\n              <thead>\n                <tr>\n                  <th> </th>\n                  <th> Company\t</th>\n                  <th> Fleet\t</th>\n                  <th> Vessel IMO\t</th>\n                  <th> Vessel Name\t</th>\n                  <th> Equipment\t</th>\n                  <th> Parameter\t</th>\n                  <th> Count\t</th>\n                  <th> Total Duration\t</th>\n                  <th> Longest Duration \t</th>\n                  <th> Longest Duration Start Time\t</th>\n                  <th> Alert Type\t</th>\n                  <th> Status\t</th>\n                  <th> AOT Remarks\t</th>\n                  <th> Mark Alert\t</th>\n                  <th> Root Cause\t</th>\n                  <th> Action Taken\t</th>\n                  <th> Use Case \t</th>\n                  <th> Cost Avoidance\t</th>\n                  <th> Remarks for Cost Avoidance\t</th>\n                  <th> Role of SMARTShip\t</th>\n                  <th> Potential Severity\t</th>\n                  <th> Potential Consequence\t</th>\n                  <th> Screenshot\t</th>\n                  <th> Month</th>\n                  <th> CurrentTSI\t</th>\n                  <th> TSI's Email ID </th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tr *ngFor=\"let emp of employeeService.employees\">\n                <td>\n                  <a class=\"action-btn\" (click)= \"onEdit(emp); open.current= !open.current;\" >\n                    <i class=\"material-icons\"> edit </i>\n                  </a>\n                </td>\n                <td>{{emp.Company}} </td>\n                <td>{{emp.Fleet}} </td>\n                <td>{{emp.VesselIMO}}\t</td>\n                <td>{{emp.VesselName}}\t</td>\n                <td>{{emp.Equipment}}\t</td>\n                <td>{{emp.Parameter}}</td>\n                <td>{{emp.Count}}\t</td>\n                <td>{{emp.TotalDuration}}\t</td>\n                <td>{{emp.LongestDuration}} \t</td>\n                <td>{{emp.LongestDurationStartTime}}\t</td>\n                <td>{{emp.AlertType}}\t</td>\n                <td>{{emp.Status}}\t</td>\n                <td>{{emp.AOTRemarks}}\t</td>\n                <td>{{emp.MarkAlert}}\t</td>\n                <td>{{emp.RootCause}}\t</td>\n                <td>{{emp.ActionTaken}}\t</td>\n                <td>{{emp.UseCase}}\t</td>\n                <td>{{emp.CostAvoidance}}\t\n                <td>{{emp.RemarksforCostAvoidance}}\t</td>\n                <td>{{emp.RoleofSMARTShip}}\t</td>\n                <td>{{emp.PotentialSeverity}}\t</td>\n                <td>{{emp.PotentialConsequence}}\t</td>\n                <td>{{emp.Screenshot}}\t</td>\n                <td>{{emp.Month}}\t</td>\n                <td>{{emp.CurrentTSI}}\t</td>\n                <td>{{emp.EmailID}}</td>\n              </tr>\n              </table>\n          </div>\n        "

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.open = {
            current: false
        };
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshEmployeeList();
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.employeeService.selectedEmployee = {
            _id: "",
            Company: "",
            Fleet: "",
            VesselIMO: "",
            VesselName: "",
            Equipment: "",
            Parameter: "",
            Count: "",
            TotalDuration: "",
            LongestDuration: "",
            LongestDurationStartTime: "",
            AlertType: "",
            Status: "",
            AOTRemarks: "",
            MarkAlert: "",
            RootCause: "",
            ActionTaken: "",
            UseCase: "",
            CostAvoidance: "",
            RemarksforCostAvoidance: "",
            RoleofSMARTShip: "",
            PotentialSeverity: "",
            PotentialConsequence: "",
            Screenshot: "",
            Month: "",
            CurrentTSI: "",
            EmailID: ""
        };
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        this.employeeService.putEmployee(form.value).subscribe(function (res) {
            _this.resetForm(form);
            _this.refreshEmployeeList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
        });
    };
    EmployeeComponent.prototype.refreshEmployeeList = function () {
        var _this = this;
        this.employeeService.getEmployeeList().subscribe(function (res) {
            _this.employeeService.employees = res;
        });
    };
    EmployeeComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = emp;
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("../../../../../src/app/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employee/employee.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.baseURL = 'employees';
    }
    EmployeeService.prototype.postEmployee = function (emp) {
        return this.http.post(this.baseURL, emp);
    };
    EmployeeService.prototype.getEmployeeList = function () {
        return this.http.get(this.baseURL);
    };
    EmployeeService.prototype.putEmployee = function (emp) {
        return this.http.put(this.baseURL + ("/" + emp._id), emp);
    };
    EmployeeService.prototype.deleteEmployee = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map