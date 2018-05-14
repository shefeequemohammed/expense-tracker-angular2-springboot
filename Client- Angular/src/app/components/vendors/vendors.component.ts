import { Component, OnInit,NgZone } from '@angular/core';
import { NewVendorService } from '../../services/new-vendor.service';
import { Vendor } from '../../models/Vendor';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';
import { Vendor1 } from 'app/models/vendor.model';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: any[];
  vendorsNew:any[];
  totalOwed: number;
  id: string;
  vendor1:Vendor1;

  constructor(
    private newVendorService: NewVendorService,
    private router: Router,
    private route: ActivatedRoute,
    private zone: NgZone
  ) { }

  
  ngOnInit(){
          this.getVendors();
      }
  
  getVendors():void{
    this.newVendorService.getVendors()
    .subscribe( data => {
     this.vendorsNew = data;
    });
  }
  
  reloadPage() { 
    this.zone.runOutsideAngular(() => {
    location.reload();
    });
    }
         
 onDeleteClick(vendor1: Vendor1){
    swal({
      title: 'Are you sure?',
      //text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      width: 400
      
    }).then((result) => {
      if (result.value) {
        this.newVendorService.deleteVendor(vendor1).subscribe( data => {
          this.vendorsNew = this.vendorsNew.filter(u => u !== vendor1)});
          this.reloadPage();
        swal(
          'Deleted!',
          'Vendor has been deleted.',
          'success'
        );
        
      }
    })
    
  }
}

  
  





