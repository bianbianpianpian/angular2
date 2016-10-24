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
    var MobileListComponent;
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
            MobileListComponent = (function () {
                function MobileListComponent(_router, _service, routeParams) {
                    this._router = _router;
                    this._service = _service;
                    this._selectedId = routeParams.get('id');
                }
                MobileListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getMobiles().then(function (mobiles) { return _this.mobiles = mobiles; });
                };
                MobileListComponent.prototype.onSelect = function (mobile) {
                    this._router.navigate(['MobileDetail', { id: mobile.id }]);
                };
                MobileListComponent.prototype.isSelected = function (m) {
                    return m.id === this._selectedId;
                };
                MobileListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Mobile List</h3>\n    <ul>\n      <li *ngFor=\"#m of mobiles\"\n        (click)=\"onSelect(m)\" [class.selected]=\"isSelected(m)\">\n        <span class=\"badge\">{{m.id}}</span> {{m.name}}\n      </li>\n    </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, mobile_service_1.MobileService, router_1.RouteParams])
                ], MobileListComponent);
                return MobileListComponent;
            }());
            exports_1("MobileListComponent", MobileListComponent);
        }
    }
});
//# sourceMappingURL=mobile-list.component.js.map