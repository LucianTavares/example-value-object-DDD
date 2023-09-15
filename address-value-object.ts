import { City } from "./city-value-object"
import { State } from "./state-value-objects"

export type AddressConstructorProps = {
  street: string
  neighborhood: string
  city: City
  state: State
  number: number
  zipCode: string
}

export class Address {

  street: string
  neighborhood: string
  city: City
  state: State
  number: number
  zipCode: string

  constructor(props: AddressConstructorProps) {
    this.street = props.street
    this.neighborhood = props.neighborhood
    this.city = props.city
    this.state = props.state
    this.number = props.number
    this.zipCode = props.zipCode

    this.validate()
  }

  validate() {
    // aqui você pode implementar a regra e validação de cada um dos atributos que ainda não foram validados.
    // City e State possuem o seu próprio metódo de validação dentro da sua class.
  }
}