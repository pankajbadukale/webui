import { EN } from './lang/en';
import { eLang } from './enums';
export class LANG {
    public static consoleErr: string = LANG.getProperty(eLang.consoleErr);
    public static getProperty(key: eLang) {
        let name = eLang[key];
        let selectedLanguage = 'EN';
        return selectedLanguage === 'EN' ? ( EN[name] !== undefined ? EN[name] : null ) : null;
    }
}