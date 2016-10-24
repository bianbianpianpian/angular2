import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';


@Component({
    selector: 'my-app',
    template: `

        <my-hero-detail [hero]="selectedHero"></my-hero-detail>

          <h2>可选列表</h2>
            <ul class="heroes">
                <li *ngFor="#hero of heroes" 
                    [class.selected]="hero === selectedHero"  
                    (click)="onSelect(hero)"> 
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
            </ul>
          `,
    styles:[`
        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
        .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
    `],
    directives: [HeroDetailComponent]
})
export class AppComponent { 
    public title = '英雄之旅';

    public heroes = HEROES;

    public selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
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