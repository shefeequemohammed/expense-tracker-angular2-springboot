import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/Vendor';
import { Vendor1 } from '../../models/vendor.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NewVendorService } from '../../services/new-vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendor1: Vendor1 = {
    vendorId: 0,
    vendorName:'',
    vendorPhone: 0,
    vendorBalance:0,
    vendorChequeAmount:0
  }
 
  errorsOnSubmit: boolean = false;
  
  constructor(
    private router: Router,
    private newVendorService: NewVendorService
 
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Vendor1, valid: boolean}){
    value.vendorBalance = 0;
    value.vendorChequeAmount = 0;
  
  if(!valid){
    
   this.errorsOnSubmit = true;
    this.router.navigate(['add-vendor']);
  } else {
   
    this.newVendorService.addVendor(this.vendor1)
    .subscribe( data => {(ok)=>{console.log(ok)
     
    }});

     swal({
      type: 'success',
      title: 'Vendor Added'
    });
    this.router.navigate(['/']); 
                
  }
}
   

  fireFocusEvent(e){
    this.errorsOnSubmit = false;
  }

}
