import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles, uploadFile } from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css';
import Popup from "./Popup";
import { setCurrentDir, setPopupDisplay } from "../../reducers/fileReducer";
import Uploader from "../uploader/Uploader";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);
    const dirStack = useSelector(state => state.files.currentDir);
    const [dragEnter, setDragEnter] = useState(false);
    const [sort, setSort] = useState('type');

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort]);

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop();
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files];
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        setDragEnter(true)
    }

    function dropHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        let files = [...event.dataTransfer.files];
        files.forEach(file => dispatch(uploadFile(file, currentDir)));
        setDragEnter(files)
    }

    return ( !dragEnter ?
            <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <div className="disk__btns" id="btns">
                    <button className="disk__back" onClick={() => backClickHandler()}>Go back</button>
                    <button className="disk__create" id="create" onClick={() => showPopupHandler()}>Create new folder</button>
                    <div className="disk__upload">
                        <label htmlFor="disk__upload-input" className="disk__upload-label">Upload file</label>
                        <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                    </div>
                    <select value={sort} onChange={(e) => setSort(e.target.value)} 
                    className="disk__select">
                        <option value="name">By name</option>
                        <option value="type">By type</option>
                        <option value="date">By date</option>
                    </select>
                </div>
                <FileList/>
                <Popup/>
                <Uploader/>
            </div>
            :
            <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Drop your files here
            </div>
    );
};

export default Disk;