import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
	getHeroes() {
		// return HEROES;
		return Promise.resolve(HEROES);
	}

	// 模拟延迟请求
	getHeroesSlowly(){
		return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES),2000));
	}
}