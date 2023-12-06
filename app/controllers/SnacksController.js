import { AppState } from "../AppState.js";
import { Snack } from "../models/SnackModel.js";


export class SnacksController {
    constructor() {
        console.log('Give me those snacks! 🫱')
        // this.drawSnacks()
        this.drawSnackCard()
    }

    // drawSnacks() {
    //     const snacks = AppState.Snacks
    //     let content = ''
    //     snacks.forEach(snack => content += snack.imgUrl)
    //     document.getElementById('snack-img').innerHTML = content

    // }

    drawSnackCard() {
        const drawSnacks = AppState.Snacks
        let content = ''
        drawSnacks.forEach(snack => content += snack.snackCard)
        document.getElementById('snack-img').innerHTML = content
    }

}
