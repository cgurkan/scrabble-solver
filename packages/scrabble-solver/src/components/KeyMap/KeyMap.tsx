import React, { FunctionComponent } from 'react';

import { useTranslate } from 'state';

import Sidebar from '../Sidebar';

import { Mapping } from './components';
import mapping from './mapping';

interface Props {
  className?: string;
  hidden: boolean;
  onClose: () => void;
}

const KeyMap: FunctionComponent<Props> = ({ className, hidden, onClose }) => {
  const translate = useTranslate();

  const handleClose = () => {
    if (!hidden) {
      onClose();
    }
  };

  return (
    <Sidebar className={className} hidden={hidden} title={translate('keyMap')} onClose={handleClose}>
      <Sidebar.Section title={translate('keyMap.board-and-rack')}>
        <Mapping description={translate('keyMap.board-and-rack.navigate')} mapping={mapping.navigate} />
        <Mapping description={translate('keyMap.board-and-rack.remove-tile')} mapping={mapping.removeTile} />
        <Mapping description={translate('keyMap.board-and-rack.submit')} mapping={mapping.submit} />
      </Sidebar.Section>

      <Sidebar.Section title={translate('keyMap.board')}>
        <Mapping description={translate('keyMap.board.toggle-blank')} mapping={mapping.toggleBlank} />
        <Mapping description={translate('keyMap.board.toggle-direction')} mapping={mapping.toggleDirection} />
      </Sidebar.Section>

      <Sidebar.Section title={translate('keyMap.rack')}>
        <Mapping description={translate('keyMap.rack.insert-blank')} mapping={mapping.insertBlank} />
      </Sidebar.Section>
    </Sidebar>
  );
};

export default KeyMap;
