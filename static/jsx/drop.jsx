import React from 'react';
import { useDropzone } from 'react-dropzone'

function DropzoneWithoutClick(props) {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noClick: true });
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Dropzone without click events</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    );
}

export { DropzoneWithoutClick };