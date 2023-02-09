import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class fetchData{
    constructor(
        private http: HttpClient
    ){}

    fetchMaps(): Observable<any>{
        return this.http.get<Observable<any>>('https://coinmap.org/api/v1/venues/')
    }
}