import TranslatorContext from 'shared/util/translator-context';
import { Storage } from 'shared/util/Storage';

import { setLocale } from 'shared/reducers/locale';

TranslatorContext.setDefaultLocale('zh-cn');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  'zh-cn': { name: '中文（简体）' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = (store) => {
  store.dispatch(setLocale(Storage.session.get('locale', 'zh-cn')));
};
