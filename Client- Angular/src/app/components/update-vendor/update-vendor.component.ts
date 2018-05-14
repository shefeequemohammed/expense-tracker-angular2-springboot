import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Vendor } from '../../models/Vendor';
import { Vendor1 } from '../../models/vendor.model';
import { NewVendorService } from '../../services/new-vendor.service';
import swal from 'sweetalert2';
import {VendorsComponent} from '../vendors/vendors.component';

@Component({
  providers:[VendorsComponent ],
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {
  id: number;
  vendor1: Vendor1 = {
    vendorId: 0,
    vendorName:'',
    vendorPhone: 0,
    vendorBalance:0,
    vendorChequeAmount:0
  }

  
  recordUpdated:boolean = false;

  constructor(
    private newVendorService: NewVendorService,
    private router: Router,
    private route: ActivatedRoute,
    private comp: VendorsComponent
  ) {
    this.route.params.subscribe((params:Params) => {
      console.log(params);
          
    });
     }

  ngOnInit() {
     // Get id from url
    this.id = this.route.snapshot.params['id'];
     this.newVendorService.getVendor(this.id).subscribe(vendor => {
     this.vendor1 = vendor;
     
    });
    
  }
  fireFocusEvent(e){
    //add any processing required
  }
  goBack():void{
    //do nothing
  }
  save(vendor1:Vendor1): void {
    console.log(vendor1);
    this.newVendorService.updateVendor2(vendor1)
      .subscribe(() => this.goBack());
      swal({
        type: 'success',
        title: 'Vendor Updated'
      });
        this.router.navigate(['/']);
  }
  
  onUpdate({value, valid}: {value: Vendor1,valid:boolean}){
    
    if(!valid){
      this.router.navigate(['vendor/'+this.id]);
    } else {
    
  this.newVendorService.updateVendor2(this.vendor1)
  .subscribe(() => this.goBack());
 // this.comp.reloadPage();
  swal({
    type: 'success',
    title: 'Vendor Updated'
  });
    
    this.router.navigate(['/']);

  }
}

 
}