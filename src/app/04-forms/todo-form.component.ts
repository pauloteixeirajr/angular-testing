import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

export class TodoFormComponent {
  form: UntypedFormGroup;

  constructor(fb: UntypedFormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
}
