import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder, private hs:HttpService) {
    this.myForm();
   }

  ngOnInit(): void {
  }

  
  myForm(){
    this.reactiveForm = this.fb.group({
      pregnancies:"",
      glucose : "",
      bloodpressure:"",
      skinthickness:"",
      insulin:"",
      bmi:"",
      diabetespedigreefunction:"",
      age:""
    })
  }

  onSubmit(): void {
    console.log('submitted:-', this.reactiveForm.value);
    this.hs.getDiabeticsPrediction(this.reactiveForm.value)
    .subscribe(data => console.log(data));
    this.reactiveForm.reset();
  }

}
