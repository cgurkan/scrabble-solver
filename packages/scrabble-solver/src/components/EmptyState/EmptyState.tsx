import classNames from 'classnames';
import { FunctionComponent, ReactNode, useMemo } from 'react';

import { LOCALE_FEATURES } from 'i18n';
import { COLOR_BLUE, COLOR_GREEN, COLOR_RED, COLOR_YELLOW } from 'parameters';
import { selectLocale, useTranslate, useTypedSelector } from 'state';
import { Translations } from 'types';

import PlainTiles from '../PlainTiles';

import styles from './EmptyState.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  type: 'error' | 'info' | 'success' | 'warning';
}

const TITLE_KEY_PER_TYPE: Record<Props['type'], keyof Translations> = {
  error: 'empty-state.error',
  info: 'empty-state.info',
  success: 'empty-state.success',
  warning: 'empty-state.warning',
};

const COLORS_PER_TYPE: Record<Props['type'], string> = {
  error: COLOR_RED,
  info: COLOR_BLUE,
  success: COLOR_GREEN,
  warning: COLOR_YELLOW,
};

const EmptyState: FunctionComponent<Props> = ({ className, children, type }) => {
  const translate = useTranslate();
  const locale = useTypedSelector(selectLocale);
  const { direction } = LOCALE_FEATURES[locale];
  const title = useMemo(() => translate(TITLE_KEY_PER_TYPE[type]), [translate]);
  const message = direction === 'ltr' ? title : title.split('').reverse().join('');
  const content = useMemo(() => [[message.toUpperCase()]], [title]);

  return (
    <div className={classNames(styles.emptyState, className)}>
      <PlainTiles className={styles.tiles} color={COLORS_PER_TYPE[type]} content={content} />

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default EmptyState;
