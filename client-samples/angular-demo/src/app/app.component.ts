import { Component } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core'
import { DictateService } from "./dictate-service";
import 'rxjs/Rx';
import {PingService} from './ping.service.ts.service';
import languages from './constants';
import {TranslateService} from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DictateService, PingService]
})

export class AppComponent {

  @ViewChild('results') private results: ElementRef;

  buttonText = 'Start Recognition';
  textDataBase = '';
  textData = '';

  ping: number = 0;
  canShowSound: boolean = false;
  voiceUrl: string = '';
  languages = languages;
  selectedLanguage = '';
  testLang = "";
  

  constructor(private dictateService: DictateService, private _pingService: PingService, private _translateService: TranslateService) {
    this._pingService.pingStream.subscribe(ping => {
      this.ping = ping;
    })
  
  }

  async switchSpeechRecognition() {
    this.testLang = await this._translateService.translateToLang("hi how are you", "en", this.selectedLanguage);
    this.voiceUrl = "http://localhost:5000" + await this._translateService.textToVoice(this.selectedLanguage, this.testLang);
    this.canShowSound = true;
    if (!this.dictateService.isInitialized()) {
      this.dictateService.init({
        server: `wss://mageweave.xyz/websocket`,
        onResults: (hyp) => {
          console.log(hyp);

          this.textDataBase = this.textDataBase + hyp + '\n';
          this.textData = this.textDataBase;
          this.results.nativeElement.scrollTop = this.results.nativeElement.scrollHeight;
          
        },
        onPartialResults: (hyp) => {
          console.log(hyp);

          this.textData = this.textDataBase + hyp;
        },
        onError: (code, data) => {
          console.log(code, data);
        },
        onEvent: (code, data) => {
          console.log(code, data);
        }
      });
      this.buttonText = 'Stop Recognition';
    } else if (this.dictateService.isRunning()) {
      this.dictateService.resume();
      this.buttonText = 'Stop Recognition';
    } else {
      this.dictateService.pause();
      this.buttonText = 'Start Recognition';
    }
  }

  onLanguageChange(event) {
    console.log(event);
  }
}
