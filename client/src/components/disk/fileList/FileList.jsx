import React from "react";
import './filelist.css';
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>);

    return (
        <div className="filelist">
            <div className="filelist__header" id="header">
                <div className="filelist__name" id="name">Name</div>
                <div className="filelist__date" id="date">Date</div>
                <div className="filelist__size" id="size">Size</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;