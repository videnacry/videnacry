import { Component } from '@angular/core';
import { PortfolioSection, PortfolioService, tPos } from '../portfolio.service';

/**
 * this component is just to be put inside a canvas
 */
@Component({
  selector: 'portfolio-summary-three',
  template: `
    <portfolio-sphere [clickHandler]="clickHandler" [pos]="summaryState.threePos" [isActive]="summaryState.isActive"/>
  `,
})
export class SummaryThreeComponent {
  private _summaryState = new PortfolioSection({ x: 0, y: 0, z: 0})
  get summaryState () { return this._summaryState }

  constructor ({ summary: aSummary }: PortfolioService) {
    this._summaryState = aSummary
  }

  clickHandler = () => {}
}