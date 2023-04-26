import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number, lng: number
  }
  popupContent(): string {
    return `Name of User: ${this.name}`
  }

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
