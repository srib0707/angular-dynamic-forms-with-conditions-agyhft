import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }


  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  }

  getValue(controlName: string) {
    let control = this.form.get(controlName);
    console.log(control.value);
    return control.value;
  }

  isVisible(value){
    //console.log(eval(value));
    return eval(value); 
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/