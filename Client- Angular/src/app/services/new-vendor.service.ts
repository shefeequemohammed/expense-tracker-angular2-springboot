import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import { Vendor } from '../models/Vendor';
import { catchError, map, tap } from 'rxjs/operators';
import { Vendor1 } from '../models/vendor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class NewVendorService {
  
  private extractData(res: Response) {        
    return res.text() ? res.json() : {}; ;
}
  constructor(private http:Http, private http1:HttpClient) { }

  private vendorUrl = 'http://localhost:8089/vendors';
  //private vendorUrl = '/vendors';
    public getVendors(): Observable<Vendor[]> {
     // return this.http.get(this.vendorUrl);
      return this.http1.get<Vendor[]>(this.vendorUrl)
      .pipe(
        catchError(this.handleError)
      );
    }
    // Promise way
   /* getVendors() : Promise<Vendor[]>{
      console.log("inside service ");
          return this.http
              .get(this.vendorUrl)
              .toPromise()
              .then(response => response.json() as Vendor[])
              .catch(this.handleError);
   }*/

      
   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); 
       console.log('An error occurred', error); 
       return Promise.reject(error.message || error);
   }

   public addVendor(vendorNew) {
     console.log("vendornew");
     return this.http1.post<Vendor>(this.vendorUrl, vendorNew);
    
  }

  public updateVendor(vendorNew, vendorId) {
       return this.http1.put<Vendor>(this.vendorUrl + "/"+ vendorId, vendorNew);
 }

 updateVendor2 (vendor1: Vendor1): Observable<any> {
  return this.http1.put(this.vendorUrl+"/"+ vendor1.vendorId, vendor1, httpOptions).pipe(
    tap(_ => this.log("updated vendor id=${vendor1.vendorId}"))
    
  );
}
private log(message: string) {
  console.log(message);
}



  public getVendor(vendorId:number): Observable<Vendor> {
    // return this.http.get(this.vendorUrl);
    console.log(this.vendorUrl + "/"+ vendorId);
     return this.http1.get<Vendor>(this.vendorUrl  + "/"+ vendorId)
     .pipe(
       catchError(this.handleError)
     );
   }

  public deleteVendor(vendorNew) {
    console.log("deleting.....");
    console.log(this.vendorUrl + "/"+ vendorNew.vendorId);
    return this.http1.delete(this.vendorUrl + "/"+ vendorNew.vendorId);
    /*.subscribe((ok)=>{console.log(ok)})*/
  }

}
