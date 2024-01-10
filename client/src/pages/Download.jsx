import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Download = () => {
    const { uid } = useParams();
    const [file, setFile] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/file/${uid}`);
                setFile(response.data);
            } catch (error) {
                console.error("Error fetching file:", error);
            }
        };

        fetchData();
    }, [uid]);


    return (
        <div className="mb-72 flex flex-col justify-center items-center gap-8 p-2">
            <div className="mt-32 space-y-10">
                <h1 className="text-3xl font-bold text-center">Download</h1>
                <div className="downloadSection flex flex-col justify-center items-center gap-4 border-2 shadow-lg p-10 rounded-lg">
                    <div className="fileInfo">
                        <p>File Name: {file.name}</p>
                        <p>File Size: {file.size}</p>
                    </div>
                    <div className="downloadButton ">
                        <a href={`${import.meta.env.VITE_API_BASE_URL}/api/file/download/${uid}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Download
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}