import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  powers:string[] = ['Strength', 'Speed', 'Mind Control'];

  form!: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(null, Validators.required),
      alterEgo: this.fb.control(null, Validators.required),
      power: this.fb.control(null, Validators.required),
      enemy: this.fb.control(null, [Validators.required, Validators.maxLength(10)]),
      planet: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      weekness: this.fb.control(null)
    })
  }

  submit() {
    console.log(this.form!.value);

    this.form!.reset();
  }

  nameErrors(name:string) {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched;
  }

  alterEgoErrors(alterEgo:string) {
    return this.form.get(alterEgo)?.invalid && this.form.get(alterEgo)?.touched;
  }

  powerErrors(power:string) {
    return this.form.get(power)?.invalid && this.form.get(power)?.touched;
  }

  enemyErrors(enemy:string) {
    return this.form.get(enemy)?.invalid && this.form.get(enemy)?.touched || this.form.get(enemy)?.errors?.['maxlength'];
  }

  planetErrors(planet:string) {
    return this.form.get(planet)?.invalid && this.form.get(planet)?.touched || this.form.get(planet)?.errors?.['minlength'];
  }

}
