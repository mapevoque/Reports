let functions = require('./function');
let yandexHomePage = function() {	 
  languageList = $$('div.col.headline__bar-item.b-langs > div > a > span'); 
  selectedLanguage = $$('li.b-menu__item.b-menu__layout-vert-cell.b-menu__item_pos_first > span > div > a');
  
  allure.createStep
  this.openStartPage = allure.createStep('Переход на страницу',() => {
    browser.get('https://yandex.by/');
  });
  this.ClickOnlanguageList = allure.createStep('Нажали на список языков',() => {
    languageList.click();
  });
  this.selectLanguageFromList = allure.createStep('Выбрали язык из списка',() => {
    selectedLanguage.click().then(() =>{
		functions.sleep(5000);
	});
  });
  this.CheckLanguage = allure.createStep('Проверили что язык изменился на Bel',() => {
	  expect(languageList.getText()).toEqual([ 'Bel' ]);
  });
};
module.exports = new yandexHomePage();