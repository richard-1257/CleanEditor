import React from 'react';
import Split from 'react-split';
import { EditorPanel } from './EditorPanel';

export const Layout = () => {
    return (
        <Split className="split" sizes={[40, 60]} minSize={300}>
            <EditorPanel />
            <div>Preview</div>
        </Split>
    );
}
