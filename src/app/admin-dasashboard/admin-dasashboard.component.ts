import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dasashboard',
  templateUrl: './admin-dasashboard.component.html',
  styleUrls: ['./admin-dasashboard.component.css']
})
export class AdminDasashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeBar() {
    let closer: any = document.querySelector('#closer');
    // let nav: any = document.querySelector('#nav');
    // let cart: any = document.querySelector('#cart');
    // let login: any = document.querySelector('#login');
    // let user: any = document.querySelector('#user');

    closer.style.display = 'none';
    // nav.classList.remove('active');
    // cart.classList.remove('active');
    // login.classList.remove('active');
  }
  // (document).ready(function(){

  // ('.sub-btn').click(function(){
  //      (this).next('.sub-menu').slideToggle();
  //     (this).find('.dropdown').toggleClass('rotate');
  //  });
   
  //  ('.menu-btn').click(function(){
  //  ('.side-bar').addClass('active');
  //      $('.menu-btn').css("visibility", "hidden");
  //   });
   
  //  $('.close-btn').click(function(){
  //   $('.side-bar').removeClass('active');
  //   $('.menu-btn').css("visibility", "visible");
  //    })
  //  ;
  //  });

  public show(wrapper:any){
    wrapper.classList.toggle("toggled");
}
   
}
