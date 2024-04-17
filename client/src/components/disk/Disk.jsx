import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css';

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir]);

    return (
        <div className="disk">
            <div className="disk__btns" id="btns">
                <button className="disk__back">Go back</button>
                <button className="disk__create" id="create">New folder</button>
            </div>
            <FileList/>
        </div>
    );
};

export default Disk;