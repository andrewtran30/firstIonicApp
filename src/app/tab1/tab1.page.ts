import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
helloWorld() {
  alert('Modus Application has an error!!!!')
  console.log('Hello World')
}
dissapearImg() {
  var img = document.getElementById('SFTS-image');

  var imgSrc = img.getAttribute('src');

  imgSrc = "/assets/shapes.svg"
}
  constructor() {}

}
