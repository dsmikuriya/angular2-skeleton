import { Component, OnInit } from '@angular/core';

import { MorphApiService } from '../../../services/morph-api.service';
import { Token } from '../../../models/token';

@Component({
    selector: 'app-morph-list',
    templateUrl: './morph-list.component.html',
    styleUrls: ['./morph-list.component.css']
})
export class MorphListComponent implements OnInit {
    constructor(private morphApiService: MorphApiService) { }

    ngOnInit() {
    }
}
