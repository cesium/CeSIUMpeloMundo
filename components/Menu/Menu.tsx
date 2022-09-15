import classnames from 'classnames';
import styles from './style.module.css';
import { Props } from './types';

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
          className={classnames(styles.line, { [styles.open_line]: isOpen })}
        ></div>
      ))}
    </label>
  );
}
