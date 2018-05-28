import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { Http } from '@angular/http'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
    constructor(private httpClient: HttpClient) {
    }

    public List(limit = 8, offset = 0): any {
        var params = new HttpParams()
            .set("limit", limit.toString())
            .set("offset", offset.toString());

        return this.httpClient
            .get(appConfig.apiUrl, { params: params })
            .map((result: any) => {
                return result;
            });
    }

    public GetPokemonByName(name: string): Observable<any> {
        return this.httpClient

            .get(appConfig.apiUrl + name)
            .map((result: any) => {
                return result;
            });
    }

}