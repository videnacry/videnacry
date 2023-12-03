import { Observable, Observer } from "rxjs"


export interface iSpellText { isActive:boolean, chars:string }
/**
 * Usefull for text animation in a component
 * @description this function is supposed to return a changing string using an observer
 * @param {iSpellText} aSpellText - reference to the object wich contains the variables to spell and cancel the spell if necesary
 */
export const spellSubscriber = (aSpellText:iSpellText) => {
  let idx = 0
  let spelledOut = aSpellText.chars[idx]
  // This function runs when subscribe() is called
  const subscriber = (observer: Observer<string>) => {
    const recursive = () => {
      idx++
      spelledOut += aSpellText.chars[idx]
      observer.next(spelledOut);
      if (idx < (aSpellText.chars.length - 1) && aSpellText.isActive) {
        setTimeout( recursive, 32 )
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