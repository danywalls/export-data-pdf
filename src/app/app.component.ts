import { NbaService } from './services/nba.service';
import { Component, inject } from '@angular/core';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nba = inject(NbaService)
  players$ = this.nba.get();
  userName!: string;

  getAllBtnStatus = 'Get All Players';
  remoteData: any;

  async getAll(pdfExport: PDFExportComponent) {
    this.getAllBtnStatus = "Downloading Data..."
    const data = await firstValueFrom(this.players$);
    this.remoteData = data;
    setTimeout(() => {
      this.getAllBtnStatus = "Get All Players"
      pdfExport.saveAs('all-data.pdf');
    }, 2000)
  }
}
