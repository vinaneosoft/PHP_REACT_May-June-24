export class MyCustomer{

  constructor(customerName="", customerContact="",customerEmail="", username="", password="", customerImage="sampleprofilepic.jpg"){
    this.id=Math.round((Math.random()*1000))+"";
    this.customerName=customerName;
    this.customerContact=customerContact;
    this.customerEmail=customerEmail;
    this.username=username;
    this.password=password;
    this.customerImage=customerImage;
  }

}