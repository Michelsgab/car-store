import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Carstore } from 'src/Carstore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  carStore: Carstore[] = [];

  constructor(private mainService: MainService) {
    this.getCars();
  }

  ngOnInit(): void {}

  getCars(): void {
    this.mainService
      .getAll()
      .subscribe((carStore) => (this.carStore = carStore));
  }
}
