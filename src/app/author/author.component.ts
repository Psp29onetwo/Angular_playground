import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
    selector: 'authors',
    templateUrl : './author.component.html',
    styleUrls : ['./author.component.css']
})
export class AuthorComponent implements OnInit {
    authors: any;
    constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    }

    ngOnInit(): void {
    }

}
