import { Injectable } from "@angular/core";

@Injectable()
export class Util {
    getUrlParameters(name: string, url: string) {
        const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    }
}