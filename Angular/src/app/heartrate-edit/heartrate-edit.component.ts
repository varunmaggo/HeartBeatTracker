import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import HeartRateService from '../shared/api/heartrate.service';
import HeartRate from '../shared/models/HeartRate';

@Component({
  selector: 'app-sugarlevel-edit',
  templateUrl: './heartrate-edit.component.html',
  styleUrls: ['./heartrate-edit.component.css']
})
export class HeartRateEditComponent implements OnInit, OnDestroy {
  sugarLevel: HeartRate = new HeartRate();

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sugarLevelService: HeartRateService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.sugarLevelService.get(id).subscribe((sugarLevel: any) => {
          if (sugarLevel) {
            this.sugarLevel = sugarLevel;
            this.sugarLevel.measuredAt = new Date(
              this.sugarLevel.measuredAt
            ).toISOString();
          } else {
            console.log(
              `Sugar Level with id '${id}' not found, returning to list`
            );
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/sugarlevel-list']);
  }

  save(form: any) {
    this.sugarLevelService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  remove(id: number) {
    this.sugarLevelService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}
