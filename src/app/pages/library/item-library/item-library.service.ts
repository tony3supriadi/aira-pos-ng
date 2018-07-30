import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ItemlibraryService {

    url: any = "http://localhost:3000/api/library/";

    constructor(
        private http: Http
    ) { }

    all() {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    find(id) {
        return this.http.get(this.url + id)
            .map(res => res.json());
    }
    
    created(item) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.url, JSON.stringify(item), {headers: headers})
            .map(res => res.json());
    }

    updated(item) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this.url + item.id, JSON.stringify(item), {headers: headers})
            .map(res => res.json());
    }

    deleted(item) {
        return this.http.delete(this.url + item.id)
            .map(res => res.json());
    }
    
}