import axios from "axios";
import { addFile, deleteFileAction, setFiles } from "../reducers/fileReducer";

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

export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            if (dirId) {
                formData.append('parent', dirId)
            }
            const responce = await axios.post(`http://localhost:3000/api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength);
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            });
            dispatch(addFile(responce.data))
        } catch (e) {
            alert(e?.responce?.data?.message)
        }
    };
};


export async function downloadFile(file) {
    const responce = await fetch(`http://localhost:3000/api/files/download?id=${file._id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (responce.status === 200) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        link.remove()
    }
}

export function deleteFile(file, dirId) {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/files/download?id=${file._id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(deleteFileAction(file._id))
            alert(response.data.message)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    };
};