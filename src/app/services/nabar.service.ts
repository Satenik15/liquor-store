import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavbarModel } from "../models/navbar.model";

@Injectable({
    providedIn: 'root'
})

export class NavbarService {
    constructor(private http: HttpClient) {}

    getNavbar() {
        return this.http.get<NavbarModel[]>("http://localhost:3000/navbar");
    }
}