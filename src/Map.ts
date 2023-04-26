import * as L from "leaflet";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  popupContent(): string;
}

export class Map {
  private map: L.Map;

  constructor(divId: string) {
    this.map = new L.Map(document.getElementById(divId) as HTMLElement).setView(
      [6.5244, 3.3792],
      1
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  addMarker = (mappable: Mappable): void => {
    const marker = L.marker(
      [mappable.location.lat, mappable.location.lng],
      {}
    ).addTo(this.map);
    marker.bindPopup(mappable.popupContent());
  };
}
