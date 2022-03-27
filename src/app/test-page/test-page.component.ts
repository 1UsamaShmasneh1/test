import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Question{
  question: string,
  option1: string,
  option2: string,
  option3: string,
  answer: number
}

export interface Result{
  name:string,
  result:number
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

  results:Result[] = [];

  customerAnswers:any = {};
  name = "";
  result = 0;
  readonly TestResult_KEY = 'test result';
  isTestStart = true;
  isTestEnd  = false;
  isHasName = false;

  calculateREsult():void{
    let i = 0;
    for (const answer in this.customerAnswers) {
        if(this.customerAnswers[answer] === ""){
          this.result += 0;
        }else if(parseInt(this.customerAnswers[answer]) === this.questions[i].answer){
          this.result += 50;
        }
        i++;
    }
  }

  handleSubmit(testForm:NgForm):void{
    this.customerAnswers = testForm.value;
    this.calculateREsult();
    this.isTestEnd = true;
    this.isTestStart = false;
  }

  handleGetResult(getNameForm:NgForm):void{
    this.name = getNameForm.value.name;
    this.results.push({name:this.name, result:this.result});
    this.isTestEnd = false;
    this.isHasName = true;
  }

  handleSave():void{
    localStorage.setItem(this.TestResult_KEY,JSON.stringify(this.results));
  }

  ngOnInit(): void {
    let savedResultsJson = localStorage.getItem(this.TestResult_KEY);
    if(savedResultsJson != null){
      this.results = JSON.parse(savedResultsJson);
    }
  }

}
