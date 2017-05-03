import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeProvider } from "../../providers/recipe-provider";
/**
 * Generated class for the FoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food-page',
  templateUrl: 'food-page.html',

})
export class FoodPage {
  isFoodExpiring: boolean;
  Badmeat: any; //Specifies which food you want, hopefully
  foodItem:IrecipeLayout[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private recipeProvider: RecipeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

  loadFoodItems() {
    this.Badmeat = "chicken";
    if (this.isFoodExpiring){
      this.recipeProvider.getRecipes(this.Badmeat).subscribe(foodItem => {
        this.foodItem = foodItem;
      });
    }
  }

}

interface IrecipeLayout {
  id: number;
  title: string;
  body: string;
}