// import { Company } from "./Company";
// import { User } from "./User";

import { Company } from "./Company";
import { Map } from "./Map";
import { User } from "./User";

const customMap = new Map("map");
customMap.addMarker(new User());
customMap.addMarker(new User());
customMap.addMarker(new Company());
customMap.addMarker(new Company());


export {};
