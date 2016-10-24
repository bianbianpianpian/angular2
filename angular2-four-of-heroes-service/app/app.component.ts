import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>

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
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit { 
    public title = '英雄之旅';

    public heroes: Hero[];

    public selectedHero: Hero;

    constructor(private _heroService: HeroService) {}
    getHeroes() {
        // this.heroes = this._heroService.getHeroes();//直接获取
      this._heroService.getHeroes().then(heroes => this.heroes = heroes);
      // this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);//延迟
    }
    ngOnInit() {
      this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}