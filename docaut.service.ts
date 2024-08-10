import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocautService {

  constructor() { }

  authenticate(username:string,password:string){

    if(username=="Dr.Rathod"&&password=="123456"){

      sessionStorage.setItem('username',username);
      return true;
    }else{

      
      return false;
    }
  }
  isuserLoggedIn(){
   let user= sessionStorage.getItem('username');
   return !(user==null)
  }

  logout(){

    sessionStorage.removeItem('username')
  }
}
