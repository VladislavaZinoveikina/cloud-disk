import React from "react";
import './file.css';
import dirLogo from '../../../../assets/img/dir.png';
import fileLogo from '../../../../assets/img/file.png';

const File = ({file}) => {
    return (
        <div className="file">
            <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img" id="img"/>
            <div className="file__name">{file.name}</div>
            <div className="file__date" id="date">{file.date.slice(0,10)}</div>
            <div className="file__size" id="size">{file.size}</div>
        </div>
    );
};

export default File;