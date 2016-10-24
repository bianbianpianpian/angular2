System.register(['angular2/core', 'angular2/router', './mobile-list.component', './ceo-list.component', './mobile.service', './mobile-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, mobile_list_component_1, ceo_list_component_1, mobile_service_1, mobile_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mobile_list_component_1_1) {
                mobile_list_component_1 = mobile_list_component_1_1;
            },
            function (ceo_list_component_1_1) {
                ceo_list_component_1 = ceo_list_component_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            },
            function (mobile_detail_component_1_1) {
                mobile_detail_component_1 = mobile_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Component Router</h1>\n    <nav>\n      <a [routerLink]=\"['MobileList']\">Mobile List</a>\n      <a [routerLink]=\"['CeoList']\">CEO List</a>\n    </nav>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [mobile_service_1.MobileService],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/mobiles',
                            name: 'MobileList',
                            component: mobile_list_component_1.MobileListComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/mobile/:id',
                            name: 'MobileDetail',
                            component: mobile_detail_component_1.MobileDetailComponent
                        },
                        {
                            path: '/ceos',
                            name: 'CeoList',
                            component: ceo_list_component_1.CeoListComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map