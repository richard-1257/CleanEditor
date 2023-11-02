import { useContext, useEffect, useState } from 'react';
import { context } from '../context';

const PreviewBoard = () => {
  const { state } = useContext(context);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const srcDoc = `
                <html>
                    <style>${state.css}</style>
                    <body>${state.html}</body>
                    <script>${state.javascript}</script>
                </html>    
                `;
      setSrcDoc(srcDoc);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [state.html, state.css, state.javascript]);
  return (
    <div className="p-3 border-bottom mx-1 w-100">
      <iframe srcDoc={srcDoc} title="output" width="100%" height="100%" />
    </div>
  );
};

export default PreviewBoard;
