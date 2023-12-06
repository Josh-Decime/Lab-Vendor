import { AppState } from "../AppState.js"


export class Snack {
    name
    price
    imgUrl
    constructor(name, price, imgUrl) {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl

    }

    get snackCard() {
        return `
        <div class="row">
          <h3>${this.name}</h3>
          <h3>$ ${this.price}</h3>
          <img class="image-sizing" src="${this.imgUrl}" alt="${this.name}">
        </div>
        `
    }


}

