import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    private _isInPortfolio = true
    get isInPortfolio () { return this._isInPortfolio }

    constructor () {}
    
    goToPortfolio = () => this._isInPortfolio = true
    goToArtworks = () => this._isInPortfolio = false
  
}
