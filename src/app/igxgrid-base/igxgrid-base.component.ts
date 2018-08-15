import { Component, OnInit, Input } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { PeopleGenService } from '../services/people-gen.service';
import { DataGenService } from '../services/data-gen.service';
import { PersonEntity } from '../entities/person-entity';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Benchmark } from '../Assets/benchmark';


@Component({
  selector: 'app-igxgrid-base',
  templateUrl: './igxgrid-base.component.html',
  styleUrls: ['./igxgrid-base.component.css']
})
export class IgxGridBaseComponent implements OnInit {
  @Input() count;
  public data: Observable<PersonEntity[]>;
  public loadTime;
  public bm: Benchmark;
  constructor(private route: ActivatedRoute, private finDataService: DataGenService) {
    this.data = this.finDataService.records;
  }

  ngOnInit() {
    const start = new Date();
    setTimeout( function () {
      // Logs when Angular is done processing databinding
      this.renderingTime = new Date().valueOf() - start.valueOf();
      console.log('IGxGrid,' + this.renderingTime);
      });
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }


}
