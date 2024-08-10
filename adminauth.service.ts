import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }




  authenticate(username:string,password:string){

    if(username=="starSt"&&password=="112233"){
      sessionStorage.setItem('username2',username)
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){

    console.log("user login ho gaya hai");
    let user=sessionStorage.getItem('username2');

    return !(user==null)
  }
  logout(){
    sessionStorage.removeItem('username2');
  }
}
