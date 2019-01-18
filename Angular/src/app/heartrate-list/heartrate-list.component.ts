import { Component, OnInit } from '@angular/core';
import HeartRate from '../shared/models/HeartRate';
import HeartRateService from '../shared/api/heartrate.service';

@Component({
  selector: 'app-heartrate-list',
  templateUrl: './heartrate-list.component.html',
  styleUrls: ['./heartrate-list.component.css']
})
export class HeartRateListComponent implements OnInit {
  sugarLevels: Array<HeartRate>;

  constructor(private sugarLevelService: HeartRateService) { }

  ngOnInit() {
    this.sugarLevelService.getAll().subscribe(data => {
      this.sugarLevels = data;
    });
  }
}
