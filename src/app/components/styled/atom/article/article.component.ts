import { Component, HostBinding, Input } from '@angular/core';
import { padding } from './types';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() title:string = ''
  @Input() lines:string[] = []
  @Input() padding:padding = 'sm'
  @HostBinding('class') get getClassStyle():string {return this.padding}
}
