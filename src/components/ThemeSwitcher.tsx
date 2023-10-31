import { useContext } from 'react';
import { context } from '../context';
import { EditorTheme } from '../model';

export const ThemeSwitcher = () => {
  const { state, dispatch } = useContext(context);

  const setTheme = (theme: EditorTheme) => {
    dispatch((prevState) => ({
      ...prevState,
      theme,
    }));
  };

  return (
    <div>
      <div className="dropdown">
        <span className="mx-2">Theme </span>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {state.theme}
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => setTheme('dark')}>
            dark
          </li>
          <li className="dropdown-item" onClick={() => setTheme('light')}>
            light
          </li>
        </ul>
      </div>
    </div>
  );
};
