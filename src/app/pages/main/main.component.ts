import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/models/Report';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {

  reportsin: Array<Report> = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getSomething().subscribe(reports => {
      this.reportsin = reports;
    });
    console.log(this.reportsin)
  }

  ngAfterContentInit(): void {
  }


}
