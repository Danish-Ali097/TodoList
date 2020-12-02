import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import {DbfirestoreService} from '../dbfirestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('emptySwal') private emptySwal!: SwalComponent;
  list:any[] = new Array();
  val:string = "";
  duplicate:number = 0;
  
  constructor(public db:DbfirestoreService) { 
    console.log(db.GetItems());
    debugger;
  }
  ngOnInit(): void {
  }
  onEnterKey(event:any){
    this.duplicate = 0;
    this.val = event.target.value;
    this.validateAndAddItem(this.val);
    event.target.value = "";
  }
  
  onAddBtnClick(newitem:any){
    this.duplicate = 0;
    this.val = newitem.value;
    this.validateAndAddItem(this.val);
    newitem.value = "";
    
  }

  validateAndAddItem(item:any){
    if(this.val == ""){
      this.emptySwal.fire();
    }
    else
    {
      // this.list.forEach(element => {

      //   if(element.text == this.val)
      //   {
      //     this.duplicate++;
      //   }

      // });

      if(this.duplicate < 1){
        //this.list.push({"text" : this.val, "isChecked" : false});
        this.db.AddItem({"text" : this.val, "isChecked" : false});
      }
      
    }
  }
  toggleStatus(item:any) {
    this.list.forEach(element => {
      if(element.text == item.text)
      {
        if(element.isChecked == true)
        {
          element.isChecked = false;
        }
        else
        {
          element.isChecked = true;
        }
      }
    });
  }
  

}
