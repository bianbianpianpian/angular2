import {Component} from 'angular2/core';
import {ClickMeComponent} from './click-me.component';
import {KeyUpComponent} from './keyup.component';
import {LoopbackComponent} from './loopback.component';
import {KeyUpComponent_v2} from './keyup2.component';
import {KeyUpComponent_v3} from './keyup3.component';

@Component({
    selector: 'my-app',
    template: `
   		<h1>Angular 2 App</h1>
	    <h2>点击事件</h2>
	    <click-me></click-me>
	    <h2>key up 事件</h2>
	    <key-up></key-up>
	    <h2>loopback</h2>
	    <loopback></loopback>
	    <key-up2></key-up2>
	    <key-up3></key-up3>
    `,
    directives:[ClickMeComponent, KeyUpComponent, LoopbackComponent, KeyUpComponent_v2, KeyUpComponent_v3]
})
export class AppComponent { }