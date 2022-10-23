import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { ɵshimHostAttribute } from "@angular/platform-browser";




@Component({
  selector: 'app-property-card',
  //template:  '',
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent {
  Property: any = {
    "Id" : 1,
    "Name" : "Aditya house",
    "Type" : "House",
    "Price": 12000
  }

}
