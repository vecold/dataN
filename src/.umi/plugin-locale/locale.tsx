import React from 'react';
import EventEmitter from 'events';
import { ConfigProvider } from 'antd';

import { RawIntlProvider, getLocale, setIntl, getIntl, localeInfo } from './localeExports';

export const event = new EventEmitter();
event.setMaxListeners(5);
export const LANG_CHANGE_EVENT = Symbol('LANG_CHANGE');

export function _onCreate() {
  const locale = getLocale();
  setIntl(locale);
}

export const _LocaleContainer = props => {
  const [locale, setLocale] = React.useState(() => getLocale());
  const [intl, setContainerIntl] = React.useState(() => getIntl(locale, true));

  const handleLangChange = (locale) => {
    setLocale(locale);
    setContainerIntl(getIntl(locale));
  };

  React.useLayoutEffect(() => {
    event.on(LANG_CHANGE_EVENT, handleLangChange);
    return () => {
      event.off(LANG_CHANGE_EVENT, handleLangChange);
    };
  }, []);

  return (
    <ConfigProvider locale={localeInfo[locale]?.antd}>
      <RawIntlProvider value={intl}>{props.children}</RawIntlProvider>
    </ConfigProvider>
  )

  return <RawIntlProvider value={intl}>{props.children}</RawIntlProvider>;
};
