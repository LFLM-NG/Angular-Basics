import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
  
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.searchTextChange.emit(this.searchText)
  }

  updateSearchText(event: any){
    this.searchText = event.target.value;
  }
}
