import { useState } from 'react';
import classnames from 'classnames';

import styles from './style.module.css';

export function menu() {
  const input = document.getElementById(
    'menu_checkbox'
  ) as HTMLInputElement | null;
  let box = document.getElementById('sidebar');
  let content = document.getElementById('content');

  if (input.checked) {
    box.classList.add('sidebar_show');
    setTimeout(function () {
      content.classList.add('content_show');
    }, 400);
  } else {
    content.classList.remove('content_show');
    setTimeout(function () {
      box.classList.remove('sidebar_show');
    }, 400);
  }
}

interface Props {
  isOpen: boolean;
  setOpen: (boolean) => void;
}

export default function Menu({ isOpen, setOpen }: Props) {
  return (
    <label
      className={classnames(styles.menu, { [styles.open]: isOpen })}
      title="Menu"
      onClick={() => setOpen((open) => !open)}
    >
      {[1, 2, 3].map((key) => (
        <div
          key={key}
          className={classnames({ [styles.shortlines]: isOpen })}
        ></div>
      ))}
    </label>
  );
}
