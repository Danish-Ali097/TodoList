import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
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
  
  constructor() { }

  onEnterKey(event:any){
    this.val = event.target.value;
    debugger;
    if(this.val == ""){
      //alert("value is empty");
      this.emptySwal.fire();
    }
    else
    {
      this.list.forEach(element => {
        if(element.text == this.val){
          this.duplicate++;
        }
      });
      
      if(this.duplicate < 1){
        this.list.push({"text" : this.val, "isChecked" : false});
      }
      event.target.value = "";
    }
  }
  
  onAddBtnClick(newitem:any){
    this.val = newitem.value;
    if(this.val == ""){
      //alert("value is empty");
      this.emptySwal.fire();
    }
    else
    {
      this.list.forEach(element => {
        if(element.text == this.val){
          this.duplicate++;
        }
      });

      if(this.duplicate < 1){
        this.list.push({"text" : this.val, "isChecked" : false});
      }
      newitem.value = "";
    }
  }

  ngOnInit(): void {
  }

}
