export interface VehicleCode {
  "id": string;
  "shortId": string;
  "code1c": string;
  "organizationId"?: string;
  "vehicleId"?: string;
  "aggregateId"?: string;
  "drivers"?: Array<any>;
  "deleted"?: boolean;
  "repv"?: number;
  Drivers?: Employee[];
  Vehicle?: Vehicle;
  Aggregate?: Aggregate;
}

export interface Vehicle {
  "id": string;
  "name": string;
  "organizationId"?: string;
  "departmentId"?: string;
  "contragentId"?: string;
  Organization?: Organization;
  Department?: Department;
  Contragent?: Contragent;
}
export interface Aggregate {
  "id": string;
  "name"?: string;
}

export interface Organization {
  "id": string;
  "name"?: string;
}

export interface Employee {
  "id"?: string;
  "name"?: string;
}


export interface Department {
  "id": string;
  "name"?: string;
}

export interface Contragent {
  "id": string;
  "name"?: string;
}
