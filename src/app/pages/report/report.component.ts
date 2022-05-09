import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Report } from 'src/app/shared/models/Report';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  stance = new FormControl('');
  picked = new FormControl('');

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.picked.value)
    const report: Report = {
      code: '0001',
      stance: this.stance.value,
      date: this.picked.value
    }
    this.reportService.add(report)
  }

}
