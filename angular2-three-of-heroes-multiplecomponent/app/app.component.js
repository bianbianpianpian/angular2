System.register(['angular2/core', './hero-detail.component'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = '英雄之旅';
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n\n          <h2>\u53EF\u9009\u5217\u8868</h2>\n            <ul class=\"heroes\">\n                <li *ngFor=\"#hero of heroes\" \n                    [class.selected]=\"hero === selectedHero\"  \n                    (click)=\"onSelect(hero)\"> \n                    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n                </li>\n            </ul>\n          ",
                        styles: ["\n        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n        .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n        }\n        .selected { background-color: #EEE; color: #369; }\n    "],
                        directives: [hero_detail_component_1.HeroDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "苹果手机" },
                { "id": 12, "name": "亚马逊" },
                { "id": 13, "name": "谷歌" },
                { "id": 14, "name": "Facebook" },
                { "id": 15, "name": "雅虎" },
                { "id": 16, "name": "阿里巴巴" },
                { "id": 17, "name": "淘宝网" },
                { "id": 18, "name": "京东" },
                { "id": 19, "name": "小米" },
                { "id": 20, "name": "腾讯" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map