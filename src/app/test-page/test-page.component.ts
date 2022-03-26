import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Question{
  question: string,
  option1: string,
  option2: string,
  option3: string,
  answer: number
}

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})


export class TestPageComponent implements OnInit {

  constructor() { }

  questions:Question[] = [
    {
      question: 'https://iq-global-test.com/upload/media/default/0011/01/1_0_0.png',
      option1: 'https://iq-global-test.com/upload/media/default/0011/01/1_2_0.png',
      option2: 'https://iq-global-test.com/upload/media/default/0011/01/1_1_0.png',
      option3: 'https://iq-global-test.com/upload/media/default/0011/01/1_3_0.png',
      answer: 1,
    },
    {
      question: 'https://iq-global-test.com/upload/media/default/0011/01/2_0_0.png',
      option1: 'https://iq-global-test.com/upload/media/default/0011/01/2_1_0.png',
      option2: 'https://iq-global-test.com/upload/media/default/0011/01/2_5_0.png',
      option3: 'https://iq-global-test.com/upload/media/default/0011/01/2_4_0.png',
      answer: 2
    },
    {
      question: 'https://iq-global-test.com/upload/media/default/0011/01/3_0_0.png',
      option1: 'https://iq-global-test.com/upload/media/default/0011/01/3_1_0.png',
      option2: 'https://iq-global-test.com/upload/media/default/0011/01/3_3_0.png',
      option3: 'https://iq-global-test.com/upload/media/default/0011/01/3_2_0.png',
      answer: 3
    }
  ]

  handleSubmit(testForm:NgForm){
    console.log(testForm.value);
  }

  ngOnInit(): void {
  }

}
