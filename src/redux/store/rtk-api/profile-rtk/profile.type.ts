export interface IProfile {
  id: number;
  money: number;
  phone: string;
  tickets: any[];
  bus: {
    coordinates: null | ICoordinates;
    id: number;
    image: string;
    number: "";
    type: IMeType;
  };
}

export interface IMeType {
  cost: number;
  id: number;
  title: string;
}

export interface IProfileUpdate {
  firstName: string;
  secondName: string;
  email: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
}

export interface ICoordinates {
  id: number;
  lat: number;
  lon: number;
}
