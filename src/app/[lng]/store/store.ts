// app/store/translationsStore.ts
import { makeAutoObservable } from "mobx";

class TranslationsStore {
  translations: Record<string, any> = {};

  constructor() {
    makeAutoObservable(this);
  }

  setTranslations(translations: Record<string, any>) {
    this.translations = translations;
  }

  getTranslation(key: string) {
    return key
      .split(".")
      .reduce((acc, part) => acc && acc[part], this.translations);
  }
}

const translationsStore = new TranslationsStore();
export default translationsStore;
