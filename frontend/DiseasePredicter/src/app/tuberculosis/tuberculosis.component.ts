import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-tuberculosis',
  templateUrl: './tuberculosis.component.html',
  styleUrls: ['./tuberculosis.component.css']
})
export class TuberculosisComponent implements OnInit {
  
  
  constructor(private fb:FormBuilder, private hs:HttpService) {
   }

  ngOnInit(): void {
  }

  File:any;
  imageSrc:any;
  
  getFile(event:any){
    this.File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(this.File);
    
    console.log(this.File);
  }

  submitData(){
    let formData = new FormData()
    formData.set("file",this.File)

    this.hs.getTuberculosisPrediction(formData)
    .subscribe(
      (data) => console.log(),
      (error) => console.log(error.error.text)
    )
  }

}
