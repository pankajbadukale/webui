export class WebuiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('webui-app h1')).getText();
  }
}
