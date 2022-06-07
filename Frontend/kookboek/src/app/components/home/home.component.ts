import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  guestForm!: FormGroup;
  response!: string;

  constructor(private formBuilder: FormBuilder, private guestService: GuestService ) { }

  ngOnInit(): void {
    this.guestForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      onsubmit() {
      this.petService.getGuestByPhoneNumber(this.guestForm.get('phoneNumber')?.value)
          .subscribe()({
            next: (data) => {
              this.response = data;
            },
            error: (error) => {
              this.response = error.error
            }
          })
      }
    });
  }

  
}
