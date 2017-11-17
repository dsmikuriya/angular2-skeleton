import { Component, OnInit } from '@angular/core';

import { MorphApiService } from '../../../services/morph-api.service';

@Component({
  selector: 'app-morph-form',
  templateUrl: './morph-form.component.html',
  styleUrls: ['./morph-form.component.css']
})
export class MorphFormComponent implements OnInit {
    constructor(private morphApiService: MorphApiService) {}

    ngOnInit() {}

    parse(value: string): void {
        this.morphApiService.parse(value);
    }
}
