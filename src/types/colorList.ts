export interface ColorListStoreSelector {
  state: ColorListStore
}

export interface ColorListStore {
  colorListStore: any;
  roleStore: ColorListSlice
}

export interface ColorListSlice {
  value: (ColorListEntity)[];
}

export interface ColorListEntity {
  color: string;
  dateTime: number;
  points: Points;
}
export interface Points {
  lat: number,
  long: number
}

export const ColorListDefaults = [
  {
    color: '#ff0055',
    dateTime: 1607110465663,
    points: {lat: 47.454554, long: 12.21121}
  }
];
