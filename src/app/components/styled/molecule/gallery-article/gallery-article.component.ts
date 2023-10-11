import { Component, HostBinding, Input } from '@angular/core';
import { orientation, size } from '../../atom/standard-size/type';
import { color } from '../../../../types';
import { padding } from '../../atom/article/types';

@Component({
  selector: 'app-gallery-article',
  templateUrl: './gallery-article.component.html',
  styleUrls: ['./gallery-article.component.scss']
})
export class GalleryArticleComponent {


  windowInnerWidth = window.innerWidth
  
  @Input() size:size = 'a5'
  @Input() sizeTablet:size = 'a4'
  @Input() padding:padding = 'sm'
  @Input() orientation:orientation = 'vertical'
  @Input() color:color = 'primary'
  @Input() title:string = ''
  @Input() lines:string[] = ['']
  
  @HostBinding('class') get colorClass():string {return this.color}
}
