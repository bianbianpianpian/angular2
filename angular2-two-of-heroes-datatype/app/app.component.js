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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = '英雄之旅';
                    this.hero = {
                        id: 1,
                        name: '乔布斯'
                    };
                    this.heroes = [
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
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<h2>\u82F1\u96C4\u5BF9\u8C61</h2>\n\t\t<div>{{hero.name}} </div>\n\t\t<div><label>id: </label>{{hero.id}}</div>\n\t\t<div>\n\t\t<label>name: </label>\n\t\t<div><input [(ngModel)]=\"hero.name\" placeholder=\"name\"></div>\n\t\t</div>\n\n\t\t<h2>\u82F1\u96C4\u5217\u8868</h2>\n\t\t<ul class=\"heroes\">\n\t\t    <li *ngFor=\"#hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\"> \n\t\t          <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t    </li>\n\t\t</ul>\n\n\t\t<h2>\u82F1\u96C4\u8BE6\u60C5</h2>\n\t\t<div *ngIf=\"selectedHero\">\n\t\t\t <h2>{{selectedHero.name}} </h2>\n\t\t  <div><label>id: </label>{{selectedHero.id}}</div>\n\t\t  <div>\n\t\t    <label>name: </label>\n\t\t    <div><input [(ngModel)]=\"selectedHero.name\"  placeholder=\"name\"></div>\n\t\t  </div>\n\t\t</div>\n    \t",
                        styles: ["\n\t        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t        .heroes .badge {\n\t\t        font-size: small;\n\t\t        color: white;\n\t\t        padding: 0.1em 0.7em;\n\t\t        background-color: #369;\n\t\t        line-height: 1em;\n\t\t        position: relative;\n\t\t        left: -1px;\n\t\t        top: -1px;\n\t        }\n\t        .selected { background-color: #EEE; color: #369; }\n\t    "]
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