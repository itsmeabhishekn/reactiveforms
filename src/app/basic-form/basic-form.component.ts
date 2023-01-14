import { Component ,OnInit} from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})

export class BasicFormComponent {
  
}
/* export class BasicFormComponent implements OnInit{

myForm = FormGroup; //clearing the variable type to the formgroup

  constructor(private fb: FormBuilder){ }



  ngOnInit(){
this.myForm = this.fb.group({
  email: '',
  message: '',
  career: ''
})

this.myForm.valueChanges.suscribe()

  }

}
 */