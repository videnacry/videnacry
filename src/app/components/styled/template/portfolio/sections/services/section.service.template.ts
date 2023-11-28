import { Observable, Observer } from "rxjs"

export interface iPos { x?: number, y?: number, z?: number }
export interface iSpellText { isActive:boolean, chars:string }

export class SectionServiceTemplate {

  private _threePos
  get threePos () { return this._threePos }

  private _isActive
  get isActive () { return this._isActive }

  constructor ({ threePos = {x:0, y:0, z:0}, isActive = false}) {
    this._threePos = threePos
    this._isActive = isActive
  }


  /**
   * this function is supposed to return a changing string using an observer
   * @param {iSpellText} aSpellText - reference to the object wich contains the variables to spell and cancel the spell if necesary
   */
  spellSubscriber = (aSpellText:iSpellText) => {
    let idx = 0
    let spelledOut = ''
    // This function runs when subscribe() is called
    const subscriber = (observer: Observer<string>) => {

      const recursive = () => {
        idx++
        spelledOut += aSpellText.chars[idx]
        observer.next(spelledOut);
        if (idx < (aSpellText.chars.length - 1) && aSpellText.isActive) {
          setTimeout( recursive, 30 )
        } else {
          observer.complete();
          
          // not sure if needed
          // return {unsubscribe() {}};
        }
      }
      setTimeout( recursive, 30 )
    }
    return new Observable(subscriber)
  }

  /**
   * This function is  made to implement inmutability, so when you want to change a property of the threePos it is created a new object with overriden values instead.
   * @param {tPos} overrideProperties - object with all the properties as optionals, so for example if you give { x: 1, y: 1} it is going to take along with the old z for the the threePos.
   */
  updateThreePos = ({ x = this._threePos.x, y = this._threePos.y, z = this._threePos.z }:iPos):void => {
    this._threePos = { x, y, z }
  }

  toggleIsActive = () => {
    this._isActive = !this._isActive
  }

}
