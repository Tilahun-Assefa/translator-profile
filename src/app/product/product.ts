import { required, schema, min, max, minLength } from "@angular/forms/signals";

export interface ProductResponse {
    success: boolean;
    message: string;
    data: Product[];
}

export interface ProductResponseById {
    success: boolean;
    message: string;
    data: Product;
}

export interface Product {
    id: number;
    name: string;
    partNumber: string;
    price: number;
    description: string;
    rating: number;
}

export interface ProductDto {
    name: string;   
    partNumber: string;
    price: number;
    description: string;
    rating: number;
}

export const productInitialState: ProductDto = {
    name: '',
    partNumber: '',
    price: NaN,
    description: '',
    rating: NaN
};

export const productSchema = schema<ProductDto>((rootpath) => {
    required(rootpath.name, { message: "Name is required" });
    required(rootpath.partNumber, { message: "Part Number is required" });
    required(rootpath.price, { message: "Price is required" });
    min(rootpath.price, 0, { message: "Price must be at least 0" });
    required(rootpath.description, { message: "Description is required" });
    minLength(rootpath.description, 10, { message: "Description must be at least 10 characters long" });
    min(rootpath.rating, 0, { message: "Rating must be at least 0" });
    max(rootpath.rating, 5, { message: "Rating cannot be more than 5" });
});