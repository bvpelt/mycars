export class Car {


    constructor(public id: number, 
        public merk: string,
        public type: string,
        public pk: number,
        public image?: string,
        public rating?: number){};
}