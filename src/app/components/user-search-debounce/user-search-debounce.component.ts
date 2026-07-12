import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs';
import { switchMap } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { map } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-search-debounce',
  imports: [CommonModule],
  templateUrl: './user-search-debounce.component.html',
  styleUrl: './user-search-debounce.component.css',
})
export class UserSearchDebounceComponent {
  constructor(private searchService: SearchService) {}
  users: any[] = [];
  searchText$ = new Subject<string>(); //after if product owner says don't search the immediately wait for 500ms then do searching, then rxjs subject will be useful.
  ngOnInit() {
    this.searchText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchText =>

  this.searchService.getUsers().pipe(

    map(users =>

      users.filter(user =>

        user.name
          .toLowerCase()
          .includes(searchText.toLowerCase())

      )

    )

  )

)
      )
      .subscribe((users) => {
        console.log(users);

        this.users = users;
      });
  }
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchText$.next(value);
  }
}
