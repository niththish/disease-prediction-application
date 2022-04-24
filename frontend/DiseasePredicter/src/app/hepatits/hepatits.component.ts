import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-hepatits',
  templateUrl: './hepatits.component.html',
  styleUrls: ['./hepatits.component.css']
})
export class HepatitsComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder, private hs:HttpService) {
    this.myForm();
   }

  ngOnInit(): void {
  }

  
  myForm(){
    this.reactiveForm = this.fb.group({
      age:"", gender:"", alb:"",
      alp:"", alt:"", ast:"",
      bil:"", che:"", chol:"",
      crea:"", ggt:"", prot:"",
    })
  }

  onSubmit(): void {
    console.log('submitted:-', this.reactiveForm.value);
    this.hs.getHepatitsPrediction(this.reactiveForm.value)
    .subscribe(data => console.log(data));
    this.reactiveForm.reset();
  }

}
