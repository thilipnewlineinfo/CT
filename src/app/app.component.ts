import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CT';
  form: FormGroup;
  constructor(private titleService: Title, private _fb: FormBuilder, private http: HttpClient) {
    this.form = this._fb.group({
      email: new FormControl('',Validators.required),
      name: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl('')
    })
  }
  
  setDocTitle(title: string) {
    this.titleService.setTitle(title);
 }

 submit(value){
   console.log(value);
   var form_data = new FormData();
   for(var key in value){
     form_data.append(key,value[key]);
   }
   this.http.post("/mail.php",form_data).subscribe(res=>{
     console.log(res);
   })
 }

 get email() { return this.form.get('email'); }

}
