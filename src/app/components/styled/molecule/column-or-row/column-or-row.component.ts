import { Component, Input } from '@angular/core';
import { color } from '../../../../types'
import { orientation, size } from '../../atom/standard-size/type';
import { ColumnOrRowProjection } from './class';


@Component({
  selector: 'app-column-or-row',
  templateUrl: './column-or-row.component.html',
  styleUrls: ['./column-or-row.component.scss']
})
export class ColumnOrRowComponent{

  @Input() title:string = ''
  @Input() isColumn:boolean = true

  @Input() upStyle:ColumnOrRowProjection = new ColumnOrRowProjection({})
  @Input() downStyle:ColumnOrRowProjection = new ColumnOrRowProjection({})

  @Input() color:color = 'primary'
  


}
