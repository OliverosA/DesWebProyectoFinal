import { Component, OnInit } from '@angular/core'
import {RouterExtensions} from "@nativescript/angular";


@Component({
  moduleId: module.id,
  selector: 'actBar',
    templateUrl: './actBar.component.html',
})
export class ActComponent implements OnInit {
  constructor(
    private router: RouterExtensions
  ) { }
  ngOnInit() { }

  public navigateCreate(){
    this.router.navigate(['/create'])
  }
  public navigateDelete(){
    this.router.navigate(['/delete'])
  }
  public navigateRead(){
    this.router.navigate(['/read'])
  }
  public navigateUpdate(){
    this.router.navigate(['/update'])
  }
}
