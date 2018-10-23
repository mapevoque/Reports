let functions = require('./function');
let yandexHomepage = require('./YandexPage');
describe('PullTest1 POST', () => {
	
  it('Яндекс - перевод', () => {
	//allure.createStep('OpenStartPage',yandexHomepage.openStartPage());
    yandexHomepage.openStartPage();
	//allure.createStep('ClickOnlanguageList',yandexHomepage.ClickOnlanguageList());
    yandexHomepage.ClickOnlanguageList();
	//allure.createStep('selectLanguageFromList',yandexHomepage.selectLanguageFromList());
	yandexHomepage.selectLanguageFromList();
	//allure.createStep('CheckLanguage',yandexHomepage.CheckLanguage());
	yandexHomepage.CheckLanguage();
  });
});	