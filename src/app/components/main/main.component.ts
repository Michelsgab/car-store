import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Carstore } from 'src/Carstore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  carStore: Carstore[] = [];

  constructor(private mainService: MainService, private router: Router) {
    this.getCars();
  }

  ngOnInit(): void {}

  handleButton(id: number): void {
    const carId: number = id;
    this.router.navigate(['car/', carId])

  }

  getCars(): void {
    this.mainService
      .getAll()
      .subscribe((carStore) => (this.carStore = carStore));
  }
}
