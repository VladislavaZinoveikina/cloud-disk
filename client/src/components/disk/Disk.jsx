import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css';
import Popup from "./Popup";
import { setPopupDisplay } from "../../reducers/fileReducer";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir]);

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    return (
        <div className="disk">
            <div className="disk__btns" id="btns">
                <button className="disk__back">Go back</button>
                <button className="disk__create" id="create" onClick={() => showPopupHandler()}>Create new folder</button>
            </div>
            <FileList/>
            <Popup/>
        </div>
    );
};

export default Disk;