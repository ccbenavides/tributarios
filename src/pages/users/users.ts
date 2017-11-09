import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import { UserService} from '../../providers/user-service/user-service';


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any[] = [];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userService : UserService,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {

    let loader = this.loadingController.create({  content: "usuarios..."  });  

    loader.present();

    this.userService
        .getUsers()
        .subscribe(
          (data) => { // Success
            loader.dismiss();
            this.users = data['results'];
          },
          (error) =>{
            loader.dismiss();
            console.error(error);
          }
        )
  }


}
