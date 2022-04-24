import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http:HttpClient) { }
  baseUrl = "http://127.0.0.1:5000/"
  
  getDiabeticsPrediction(data:any){
    return this.http.post(this.baseUrl+"diabetes",data);
  }
  getCKDPrediction(data:any){
    return this.http.post(this.baseUrl+"ckd",data);
  }

  getHepatitsPrediction(data:any){
    return this.http.post(this.baseUrl+"hepatitis",data);
  }

  getTuberculosisPrediction(data:any){
    return this.http.post(this.baseUrl+"tuberculosis",data);
  }

  getRetinopathyPrediction(data:any){
    return this.http.post(this.baseUrl+"retinopathy",data);
  }

}
