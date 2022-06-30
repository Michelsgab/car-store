import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carstore } from 'src/Carstore';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carstore?: Carstore;

  constructor(private mainService: MainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.mainService.getUniqueCar(id).subscribe((carstore) => (this.carstore = carstore ));
  }

}
