export interface EcomInter {
    vendorId: number;
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    address: string;
    stateId: number;
    cityId: number;
    stateName?: string; // Optional field if needed
    cityName?: string; 
  }
  export interface ProductInter{
    product_Id :number ;
    vendorId : number;
    colorId:number;
    sizeId:number;
    productName : string;
    imageUrl:string;
    description : string;
    unitPrice : number;
    gender:string;
    subCategoryId : number;
  }
  export interface purchaseInter{
    purchaseId:number;
    productName:string;
    quantity:number;
    unitPrice:number;
    totalPrice:number;
    sellPrice:number;
    purchaseDate:number;
    paymentMethod:string;
    status:string
    
  }
  
