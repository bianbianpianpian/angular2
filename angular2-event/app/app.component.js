System.register(['angular2/core', './click-me.component', './keyup.component', './loopback.component', './keyup2.component', './keyup3.component'], function(exports_1, context_1) {
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
    var core_1, click_me_component_1, keyup_component_1, loopback_component_1, keyup2_component_1, keyup3_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            },
            function (keyup_component_1_1) {
                keyup_component_1 = keyup_component_1_1;
            },
            function (loopback_component_1_1) {
                loopback_component_1 = loopback_component_1_1;
            },
            function (keyup2_component_1_1) {
                keyup2_component_1 = keyup2_component_1_1;
            },
            function (keyup3_component_1_1) {
                keyup3_component_1 = keyup3_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   \t\t<h1>Angular 2 App</h1>\n\t    <h2>\u70B9\u51FB\u4E8B\u4EF6</h2>\n\t    <click-me></click-me>\n\t    <h2>key up \u4E8B\u4EF6</h2>\n\t    <key-up></key-up>\n\t    <h2>loopback</h2>\n\t    <loopback></loopback>\n\t    <key-up2></key-up2>\n\t    <key-up3></key-up3>\n    ",
                        directives: [click_me_component_1.ClickMeComponent, keyup_component_1.KeyUpComponent, loopback_component_1.LoopbackComponent, keyup2_component_1.KeyUpComponent_v2, keyup3_component_1.KeyUpComponent_v3]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map