import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DrinkModel } from "../models/drink.model";

@Injectable({
    providedIn: 'root'
})

export class DrinkService {

    constructor(private http: HttpClient) {}

    getAllDrinks() {
        return this.http.get<DrinkModel[]>('http://localhost:3000/drinks');
    }

    navigateToDrinkPage(id: number) {
        return this.http.get<DrinkModel>('http://localhost:3000/drinks/' + id);
    }
}