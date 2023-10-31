import Split from 'react-split';
import EditorBoard from './EditorBoard';
import PreviewBoard from './PreviewBoard';

const Layout = () => {
  return (
    <Split className="split" sizes={[40, 60]} minSize={300}>
      <EditorBoard />
      <PreviewBoard />
    </Split>
  );
};

export default Layout;
