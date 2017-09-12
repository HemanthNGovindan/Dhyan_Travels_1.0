class Customer {
    FullName: string;
    PhoneNumber: string;
    EmailId: string;
    constructor(FullName: string = '', PhoneNumber: string = '', EmailId: string = '') {
        this.FullName = FullName;
        this.PhoneNumber = PhoneNumber;
        this.EmailId = EmailId;
    }

}

class Vehicle {
    ID: string;
    Type: string;
    Capacity: number;
    CostPerKilometer: number;
    Title: string;
    ShortDescription: string;

    constructor(ID: string = '', Type: string = '', Capacity: number = 0, CostPerKiloMeter: number = 0, Title: string = '', ShortDescription: string = '') {
        this.ID = ID;
        this.Type = Type;
        this.Capacity = Capacity;
        this.CostPerKilometer = CostPerKiloMeter;
        this.Title = Title;
        this.ShortDescription = ShortDescription;
    }
}


class EnquiryRequest {
    Customer: Customer;
    Vehicle: Vehicle;
    TravelDate: string;
    Cab_FromPlace: string;
    Cab_ToPlace: string;
    Trip_NumberOfDays: string;
    Trip_Places: string;

    constructor(tempCustomer: Customer, TravelDate: string = '', Cab_ToPlace: string = '', Cab_FromPlace: string = '', Trip_NumberOfDays: string = '', Trip_Places: string = '', tempCab: Vehicle = null) {

        this.Cab_FromPlace = Cab_FromPlace;
        this.Cab_ToPlace = Cab_ToPlace;
        this.TravelDate = TravelDate;
        this.Trip_NumberOfDays = Trip_NumberOfDays;
        this.Trip_Places = Trip_Places;
        if (tempCustomer === null) {
            tempCustomer = new Customer('', '', '');
        }
        this.Customer = new Customer(tempCustomer.FullName, tempCustomer.PhoneNumber, tempCustomer.EmailId)
        if (tempCab === null) {
            tempCab = new Vehicle('', '', 0, 0);
        }
        this.Vehicle = new Vehicle(tempCab.ID, tempCab.Type, tempCab.Capacity, tempCab.CostPerKilometer);
    }
}

class ContactUsRequest {
    Customer: Customer;
    constructor(tempContact: Customer) {
        if (tempContact === null) {
            tempContact = new Customer('', '', '');
        }
        this.Customer = new Customer(tempContact.FullName, tempContact.PhoneNumber, tempContact.EmailId)

    }
}
export { Customer, Vehicle, EnquiryRequest, ContactUsRequest };