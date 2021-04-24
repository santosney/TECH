import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'
import {MatCarousel, MatCarouselComponent} from '@ngmodule/material-carousel'
import { config } from 'rxjs';
@Component({
  selector: 'app-portfoloy',
  templateUrl: './portfoloy.component.html',
  styleUrls: ['./portfoloy.component.scss']
})
export class PortfoloyComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    cnfig: NgbCarouselConfig
  ) {
    cnfig.interval = 2000;
    cnfig.wrap = false;
    cnfig.keyboard = false;
    cnfig.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

}
