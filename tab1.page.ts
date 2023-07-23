import { Component } from '@angular/core';
import { AlertController, IonicModule, NavController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {NgFor, CommonModule} from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgFor, CommonModule],
})
export class Tab1Page {
  
  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}
  
  async removeItem(item: { name: string; }, index: number){
    console.log("Removing Item - ", item)
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt(){
    const prompt = await this.alertCtrl.create({
      message: "Please enter item...",
      inputs:[
        {
          name:'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicker', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}


