import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {

  @Input() public link: string = '';
  @Input() public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
