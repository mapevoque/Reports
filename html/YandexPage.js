let functions = require('./function');
let yandexHomePage = function() {	 
  languageList = $$('div.col.headline__bar-item.b-langs > div > a > span'); 
  selectedLanguage = $$('li.b-menu__item.b-menu__layout-vert-cell.b-menu__item_pos_first > span > div > a');
  
  
  this.openStartPage = () => {
    browser.get('https://yandex.by/');
  };
  this.ClickOnlanguageList = () => {
    languageList.click();
  };
  this.selectLanguageFromList = () => {
    selectedLanguage.click().then(() =>{
		functions.sleep(5000);
	});
  };
  this.CheckLanguage = () => {
	  expect(languageList.getText()).toEqual([ 'Bel' ]);
  };
};
module.exports = new yandexHomePage();