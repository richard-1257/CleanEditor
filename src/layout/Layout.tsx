import React from 'react';
import Split from 'react-split';

export const Layout = () => {
    return (
        <Split className="split" sizes={[40, 60]} minSize={300}>
            <div>Editor</div>
            <div>Preview</div>
        </Split>
    );
}