import { SnacksController } from './controllers/SnacksController.js';
import { router } from './router-config.js';



class App {

  router = router

  SnackController = new SnacksController

}

// console.log('😋 Snack:', Snack)
const app = new App()
// @ts-ignore
window.app = app
