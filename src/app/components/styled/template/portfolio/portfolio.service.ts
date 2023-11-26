import { Injectable } from '@angular/core';

export type tPos = { x: number, y: number, z: number }

export class PortfolioSection {
  isActive:boolean = false 
  private _threePos = { x: 0, y: 0, z: 0}
  get threePos () { return this._threePos }

  constructor ({ x: aX, y: aY, z: aZ }: tPos) {
    this.setX(aX)
    this.setY(aY)
    this.setZ(aZ)
  }

  setX = (aX:number) => this._threePos.x = aX
  setY = (aY:number) => this._threePos.y = aY
  setZ = (aZ:number) => this._threePos.z = aZ
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  readonly projects = new PortfolioSection({ x: -30, y: -18, z: -4 })
  readonly summary = new PortfolioSection({ x: -12, y: -14, z: -35 })
  readonly room = new PortfolioSection({ x: -50, y: -40, z: 50 })

  constructor() { }

}
