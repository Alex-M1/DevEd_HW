import { TIMER } from "../constants"

export default class Controller {
  constructor(view) {
    this.view = view
  }

  move = () => {
    this.view.rerender()
  }

}