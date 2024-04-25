import axios from "axios";
import { addFile, setFiles } from "../reducers/fileReducer";

export function getFiles(dirId) {
    return async dispatch => {
        try {
            const responce = await axios.get(`http://localhost:3000/api/files${dirId ? '?parent='+dirId : ''}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(setFiles(responce.data))
        } catch (e) {
            alert(e.responce.data.message)
        }
    };
};

export function createDir(dirId, name) {
    return async dispatch => {
        try {
            const responce = await axios.post(`http://localhost:3000/api/files`, {
            name,
            parent: dirId,
            type: 'dir'
        }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(addFile(responce.data))
        } catch (e) {
            alert(e.responce.data.message)
        }
    };
};