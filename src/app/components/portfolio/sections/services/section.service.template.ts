import { ComponentType } from "@angular/cdk/portal"
import { MatDialog } from "@angular/material/dialog"
import { spellSubscriber } from "./utils"

export interface iPos { x?: number, y?: number, z?: number }

/**
 * This class shouldn't be used directly, it's whole purpose is to be a template for services to create interactive 3d spheres connected to angular components
 */
export class SectionServiceTemplate {

  get threePos () { return this._threePos }
  get sphereClickHandler () { return this._sphereClickHandler }

  constructor (
    public dialog: MatDialog, 
    private _threePos = { x:0, y:0, z:0 },
    private _sphereClickHandler: () => void,
    private _modal?:{width:string, component:ComponentType<any>} 
  ) { }
  
  openDialog (): void {
    if (this._modal) {
      this.dialog.open(this._modal.component, {
        panelClass: 'dialog-no-bg',
        maxWidth: '90vw',
        width: this._modal.width,
        enterAnimationDuration: '800ms',
        exitAnimationDuration: '800ms'
      });
    } else {
      throw new Error('There isn\'t any modal to show, please make sure to pass a ComponentType<any> instance to the constructor')
    }
  }

  /**
   * Usefull for text animation in a component
   * @description this function is supposed to return a changing string using an observer
   * @param {iSpellText} aSpellText - reference to the object wich contains the variables to spell and cancel the spell if necesary
   */
  spellSubscriber = spellSubscriber


  
  /**
   * This function is  made to implement inmutability, so when you want to change a property of the threePos it is created a new object with overriden values instead.
   * @param {tPos} overrideProperties - object with all the properties as optionals, so for example if you give { x: 1, y: 1} it is going to take along with the old z for the the threePos.
   */
  updateThreePos = ({ x = this._threePos.x, y = this._threePos.y, z = this._threePos.z }:iPos):void => {
    this._threePos = { x, y, z }
  }


}