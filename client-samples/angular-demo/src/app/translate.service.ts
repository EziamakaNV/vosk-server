import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateOutput, VoiceOutput } from "./interfaces";  

@Injectable({
    providedIn: 'root'
})

export class TranslateService {
    translateToLangUrl: string = "http://localhost:5000/mlservice/translate";
    textToVoiceUrl: string = "http://localhost:5000/mlservice/voice";
    constructor(private _httpClient: HttpClient) {

    }

    async translateToLang(text: string, source: string, target: string) {
        const result = await this._httpClient.post<TranslateOutput>(this.translateToLangUrl, {text: text, source: source, target: target}).toPromise();
        console.log(result.output[0]);
        return result.output[0];
    }

    async textToVoice(lang:string, text: string) {
        const result = await this._httpClient.post<VoiceOutput>(this.textToVoiceUrl, {lang, text}).toPromise();
        console.log(result.output);
        return result.output;
    }
}