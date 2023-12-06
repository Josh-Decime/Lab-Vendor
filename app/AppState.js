import { Snack } from './models/SnackModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'



class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  Snacks = [
    new Snack('Koala Cola', '4.50', './assets/img/Kolla.png'),
    new Snack('Slug Soda', '4.00', './assets/img/Sulr.png'),
    new Snack('Root Boar', '4.75', './assets/img/Roor.png'),
    new Snack('Gator Drink', '5.00', './assets/img/Gator.png'),
  ]









}

export const AppState = createObservableProxy(new ObservableAppState())
console.log('👌 Appstate connected', AppState)