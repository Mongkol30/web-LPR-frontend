import { Component, OnInit } from '@angular/core';
import { LprModel, LprService } from './lpr.service';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-lpr',
  templateUrl: './lpr.component.html',
  styleUrls: ['./lpr.component.scss']
})
export class LprComponent implements OnInit{
    
  displayedColumns: string[] = ['Licenseplate', 'Date', 'Time'];
  text = '';
  lprmodel :LprModel []=[];
  lprmodelOut :LprModel []=[];

  constructor(private lprService:LprService,private loginservice:LoginserviceService){}
  
  ngOnInit(): void {
    this.search();
    this.searchOut();


  }

  search(): void {
    let js = {'key':this.text}
    this.lprService.search(js).subscribe(data =>{
      this.lprmodel = data;
      console.log(this.lprmodel);
    },(err)=>{
      console.log(err);
    })
  }


  searchOut(): void {
    let js = {'key':this.text}
    this.lprService.searchOut(js).subscribe(data =>{
      this.lprmodelOut = data;
      console.log(this.lprmodelOut);
    },(err)=>{
      console.log(err);
    })
  }

  logout(){
    this.loginservice.logout();
  }


}










// const search_Data: LprModel[]=[]
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }