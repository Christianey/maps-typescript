import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  
  popupContent(): string {
    return `Company Name: ${this.name} </br> 
            Company Catch-Phrase: ${this.catchPhrase}`;
  }

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
