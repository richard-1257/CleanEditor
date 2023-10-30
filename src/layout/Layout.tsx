import Split from 'react-split';
import EditorBoard from './EditorBoard';

const Layout = () => {
  return (
    <Split className="split" sizes={[40, 60]} minSize={300}>
      <EditorBoard />
      <div>Preview</div>
    </Split>
  );
};

export default Layout;
