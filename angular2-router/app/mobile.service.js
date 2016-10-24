System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Mobile, MobileService, MobileArray, mobilesPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Mobile = (function () {
                function Mobile(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Mobile;
            }());
            exports_1("Mobile", Mobile);
            MobileService = (function () {
                function MobileService() {
                }
                MobileService.prototype.getMobiles = function () {
                    return mobilesPromise;
                };
                MobileService.prototype.getMobile = function (id) {
                    return mobilesPromise.then(function (mobiles) { return mobiles.filter(function (h) { return h.id === +id; })[0]; });
                };
                MobileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MobileService);
                return MobileService;
            }());
            exports_1("MobileService", MobileService);
            MobileArray = [
                new Mobile(11, '苹果'),
                new Mobile(12, '三星'),
                new Mobile(13, '小米'),
                new Mobile(14, '华为'),
                new Mobile(15, '乐视'),
                new Mobile(16, '魅族')
            ];
            mobilesPromise = Promise.resolve(MobileArray);
        }
    }
});
//# sourceMappingURL=mobile.service.js.map