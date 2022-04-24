import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-retinopathy',
  templateUrl: './retinopathy.component.html',
  styleUrls: ['./retinopathy.component.css']
})
export class RetinopathyComponent implements OnInit {

  constructor(private fb:FormBuilder, private hs:HttpService) { }

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

    this.hs.getRetinopathyPrediction(formData)
    .subscribe(
      (data) => console.log(),
      (error) => console.log(error.error.text)
    )
  }


}
