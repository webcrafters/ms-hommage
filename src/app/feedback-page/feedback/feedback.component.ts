import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  get checkedUnderstand(): boolean {
    return this.addressForm.get('terms').value;
  }

  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required, Validators.email],
    feedback: [null, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder,
    private feedbackSvc: FeedbackService) {}

  onSubmit() {
    if (this.addressForm.hasError) {
      return;
    }
    const feedback = this.addressForm.value;
    debugger;
    this.feedbackSvc.sendFeedback(feedback);
  }
}
