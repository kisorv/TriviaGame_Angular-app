import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  ngOnInit() {}

  startQuiz() {
    this.quizService.navigateToQuiz();
  }
}
