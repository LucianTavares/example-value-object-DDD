enum StateList {
  Acre = "AC",
  Alagoas = "AL",
  Amapá = "AP"
}

export class State {

  name: StateList

  constructor(name: StateList) {
    this.name = name
  }

  validate() {
    // inclua a lógica de validação.
  }
}