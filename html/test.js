let functions = require('./function');
let yandexHomepage = require('./YandexPage');
describe('PullTest1 POST', () => {
	
  it('Яндекс - перевод', () => {
    yandexHomepage.openStartPage();
    yandexHomepage.ClickOnlanguageList();
	yandexHomepage.selectLanguageFromList();
	yandexHomepage.CheckLanguage();
  });
});	