import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { GreetingService } from '../../core/rest-service/greeting.service';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  public greeting: string | null = null;

  constructor(private readonly greetingService: GreetingService) {}
  ngOnInit() {
    this.fetchGreeting();
  }

  public fetchGreeting(): void {
    this.greetingService.getGreeting().subscribe((greeting) => {
      this.greeting = greeting;
      console.log(greeting);
    });
  }
}
