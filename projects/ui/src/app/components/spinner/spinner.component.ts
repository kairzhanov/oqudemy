import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'projects/oqudemy/src/app/core/services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  
  isLoading!: boolean;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      this.isLoading = v;
    });
  }

  ngOnInit() {}

}
