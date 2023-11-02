import { SetStateAction, useContext, useState } from 'react';
import MEditor from '@monaco-editor/react';
import { editorOptions } from '../config';
import { context } from '../context';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

const EditorPanel = () => {
  const { state, dispatch } = useContext(context);
  const [activeTab, setActiveTab] = useState('html');

  const handleTabClick = (tabId: SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  return (
    <div className="h-100 py-1 position-relative">
      <div className="position-absolute end-0 me-1">
        <ThemeSwitcher />
      </div>
      <nav>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === 'html' ? 'active' : ''
              } rounded-0 px-5`}
              id="html"
              onClick={() => handleTabClick('html')}
              type="button"
              role="tab"
              aria-controls="html-pane"
              aria-selected={activeTab === 'html'}
            >
              HTML
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === 'css' ? 'active' : ''
              } rounded-0 px-5`}
              id="css"
              onClick={() => handleTabClick('css')}
              type="button"
              role="tab"
              aria-controls="css-pane"
              aria-selected={activeTab === 'css'}
            >
              CSS
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === 'javascript' ? 'active' : ''
              } rounded-0 px-5`}
              id="javascript"
              onClick={() => handleTabClick('javascript')}
              type="button"
              role="tab"
              aria-controls="javascript-pane"
              aria-selected={activeTab === 'javascript'}
            >
              JS
            </button>
          </li>
        </ul>
      </nav>

      <div className="tab-content h-100" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeTab === 'html' ? 'show active' : ''
          } h-100`}
          id="html-pane"
          role="tabpanel"
          aria-labelledby="html"
        >
          <MEditor
            defaultLanguage="html"
            options={editorOptions}
            height="100%"
            value={state.html}
            onChange={(value) =>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              dispatch((prevState: any) => ({
                ...prevState,
                html: value ? value : '',
              }))
            }
            theme={state.theme === 'dark' ? 'vs-dark' : state.theme}
          />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === 'css' ? 'show active' : ''
          } h-100`}
          id="css-pane"
          role="tabpanel"
          aria-labelledby="css"
        >
          <MEditor
            defaultLanguage="css"
            options={editorOptions}
            height="100%"
            value={state.css}
            onChange={(value) =>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              dispatch((prevState: any) => ({
                ...prevState,
                css: value ? value : '',
              }))
            }
            theme={state.theme === 'dark' ? 'vs-dark' : state.theme}
          />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === 'javascript' ? 'show active' : ''
          } h-100`}
          id="javascript-pane"
          role="tabpanel"
          aria-labelledby="javascript"
        >
          <MEditor
            defaultLanguage="javascript"
            options={editorOptions}
            height="100%"
            value={state.javascript}
            onChange={(value) =>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              dispatch((prevState: any) => ({
                ...prevState,
                javascript: value ? value : '',
              }))
            }
            theme={state.theme === 'dark' ? 'vs-dark' : state.theme}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
