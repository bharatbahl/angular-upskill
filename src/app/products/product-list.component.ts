import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageHeading: string = 'Product list';
    imageWidth: number =50;
    imageMargin:number=2;
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden cart",
            "productCode": "GDN-002",
            "releaseDate": "23-05-2021",
            "description": "a general description",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "GDN-001",
            "releaseDate": "22-05-2021",
            "description": "a general description",
            "price": 30.99,
            "starRating": 4.9,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

}