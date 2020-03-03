import { Injectable } from '@angular/core';
import { FeedbackModel } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  sendFeedback(feedback: FeedbackModel) {
    // post to api
  }
}
