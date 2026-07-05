import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {}

  user: any;
  posts: any[] = [];
  todos: any[] = [];

  ngOnInit(): void {

    forkJoin({
      user: this.dashboardService.getUser(),
      posts: this.dashboardService.getPosts(),
      todos: this.dashboardService.getTodos()
    }).subscribe(response => {

      console.log(response);

      this.user = response.user;
      this.posts = response.posts;
      this.todos = response.todos;

    });

  }

}
