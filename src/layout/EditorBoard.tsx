import MEditor from '@monaco-editor/react';
import { editorOptions } from '../config';
import { Context } from '../context';
import { useContext } from 'react';

const EditorPanel = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div className="h-100 py-1 position-relative">
      <nav>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-0 px-5"
              id="html"
              data-bs-toggle="tab"
              data-bs-target="#html-pane"
              type="button"
              role="tab"
              aria-controls="html-pane"
              aria-selected="true"
            >
              HTML
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-0 px-5"
              id="css"
              data-bs-toggle="tab"
              data-bs-target="#css-pane"
              type="button"
              role="tab"
              aria-controls="css-pane"
              aria-selected="false"
            >
              CSS
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-0 px-5"
              id="javascript"
              data-bs-toggle="tab"
              data-bs-target="#javascript-pane"
              type="button"
              role="tab"
              aria-controls="javascript-pane"
              aria-selected="false"
            >
              JS
            </button>
          </li>
        </ul>
      </nav>

      <div className="tab-content h-100" id="myTabContent">
        <div
          className="tab-pane fade show active h-100"
          id="html-pane"
          role="tabpanel"
          aria-labelledby="html"
          tabIndex={0}
        >
          <MEditor
            defaultLanguage="html"
            options={editorOptions}
            height="100%"
            value={state.html}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          className="tab-pane fade h-100"
          id="css-pane"
          role="tabpanel"
          aria-labelledby="css"
          tabIndex={0}
        >
          <MEditor
            defaultLanguage="css"
            options={editorOptions}
            height="100%"
            value={state.css}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          className="tab-pane fade h-100"
          id="javascript-pane"
          role="tabpanel"
          aria-labelledby="javascript"
          tabIndex={0}
        >
          <MEditor
            defaultLanguage="javascript"
            options={editorOptions}
            height="100%"
            value={state.javascript}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
