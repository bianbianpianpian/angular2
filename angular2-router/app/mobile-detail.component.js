System.register(['angular2/core', 'angular2/router', './mobile.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mobile_service_1;
    var MobileDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            MobileDetailComponent = (function () {
                function MobileDetailComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                MobileDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getMobile(id).then(function (mobile) { return _this.mobile = mobile; });
                };
                MobileDetailComponent.prototype.gotoMobiles = function () {
                    var mId = this.mobile ? this.mobile.id : null;
                    // Like <a [routerLink]="['MobileList']">MobileList</a>
                    this._router.navigate(['MobileList', { id: mId, foo: 'foo' }]);
                };
                MobileDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n     <h2>Mobile Detail</h2>\n      <div *ngIf=\"mobile\">\n        <h3>\"{{mobile.name}}\"</h3>\n        <div>\n          <label>Id: </label>{{mobile.id}}</div>\n        <div>\n          <label>Name: </label>\n          <input [(ngModel)]=\"mobile.name\" placeholder=\"name\"/>\n        </div>\n        <button (click)=\"gotoMobiles()\">Back</button>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, mobile_service_1.MobileService])
                ], MobileDetailComponent);
                return MobileDetailComponent;
            }());
            exports_1("MobileDetailComponent", MobileDetailComponent);
        }
    }
});
//# sourceMappingURL=mobile-detail.component.js.map