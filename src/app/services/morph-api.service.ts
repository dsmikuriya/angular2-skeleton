import { Injectable } from '@angular/core';
import { _ } from 'lodash';

import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { Token } from '../models/token';

@Injectable()
export class MorphApiService {
    private tokens: Token[] = [];

    constructor(private http: Http) {}

    getTokens(): Token[] {
        return this.tokens;
    }

    getTokensSortBy(sortKey, isAsc): Token[] {
        return _.sortBy(this.tokens, sortKey, isAsc ? 'asc' : 'desc');
    }

    clear(): void {
        this.tokens = [];
    }

    parse(content): void {
        if (!content) {
            return;
        }

        this.clear();

        const headers = new Headers();
        headers.append('x-api-key', environment.api.morph.key);

        this.http.post(
            environment.api.morph.url,
            { string: content },
            { headers: headers }
        )
        .subscribe(response => {
            response.json().forEach(array => {
                this.tokens.push(new Token(array));
            });
        });
    }
}
