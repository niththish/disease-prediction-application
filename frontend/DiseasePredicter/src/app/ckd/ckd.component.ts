import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-ckd',
  templateUrl: './ckd.component.html',
  styleUrls: ['./ckd.component.css']
})
export class CkdComponent implements OnInit {

reactiveForm: FormGroup;

  constructor(private fb:FormBuilder, private hs:HttpService) {
    this.myForm();
   }

  ngOnInit(): void {
  }

  
  myForm(){
    this.reactiveForm = this.fb.group({
      age:"", bp:"", sg:"", amyloidosis:"",
      su:"", rbc:"", pc:"", pcc:"",
      ba:"", bgr:"", bu:"", sc:"",
      sod:"", pot:"", hemo:"", pcv:"",
      wc:"", rc:"", htn:"", dm:"",
      cad:"",appet:"",pe:"",ane:""
    })
  }

  onSubmit(): void {
    console.log('submitted:-', this.reactiveForm.value);
    this.hs.getCKDPrediction(this.reactiveForm.value)
    .subscribe(data => console.log(data));
    this.reactiveForm.reset();
  }
}
