import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';


interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void
}

interface TelegramWebApp {
  MainButton: TgButton;
  webApp: any;
}

interface Window {
  Telegram: TelegramWebApp;
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: Window | null;
  tg: any;
  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView as Window | null;
    this.tg = this.window?.Telegram?.webApp;
   }

   get MainButton(): TgButton {
    return this.tg.MainButton;
   }
}
