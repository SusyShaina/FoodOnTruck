import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Items} from "./menu.interface";

@Injectable()
export class MenuService {

    private menuURL = "./assets/data.json";

    constructor(private http: Http) {}

    getMenu(): Observable<any> {
        return this.http
            .get(this.menuURL)
            .map((response: Response) => {
                return <any>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
