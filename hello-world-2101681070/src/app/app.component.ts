import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items =  [
    { title: "Information", info: "Name:Vesela Apostolova,Web Developer from Bulgaria " , opened: false},
    { title: "Hobbies", info: "Volleyball, Videogames ", opened: false},
    { title: "Favourite Chanel ", info: "MrWebDesignerAnas", opened: false},
    { title: "My Chanel", info: " Developing modern websites ", opened: false},
    { title: "An example of appropriation", info: "Showing interesting and useful tutorials ", opened: false},

  ];

    toggle(item : any) {
      this.items.forEach(i => {
        if(i !== item) i.opened = false;
    });
      item.opened = !item.opened;
    }

}
