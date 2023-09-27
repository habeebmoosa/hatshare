import React, { useState } from "react";
import Axios from 'axios';

export const Home = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [fileLink, setFileLink] = useState({});

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };


    const uploadFile = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('myfile', selectedFile);

            try {
                const response = await Axios.post('http://localhost:3001/api/file', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                setFileLink(response.data);
                console.log(response.data);

                if (response.status === 200) {
                    console.log('File uploaded successfully');
                    alert('File uploaded successfully');
                    setIsUploaded(true);
                } else {
                    console.error('File upload failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Please select a file');
        }
    };

    const copyLinkUrl = () => {
        const text = fileLink.file;
        navigator.clipboard.writeText(text);
        alert('Link copied to clipboard');
    }

    return (
        <div className="home container flex flex-col">
            <div className="inputSection flex flex-col justify-center m-60 space-x-14 sm:flex-row">
                <div className="mx-auto p-4">

                    {
                        isUploaded ?
                            (
                                <div className="mt-10 mb-4">
                                    <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">File Link</label>
                                    <div id="file" className="fileLink border-2 rounded-lg p-10 bg-gray-100 shadow-md cursor-pointer" title="Click to Copy" onClick={copyLinkUrl}>
                                        {fileLink.file}
                                    </div>
                                </div>
                            ) :
                            (
                                <div className="border-2 rounded-lg p-12 shadow-lg">
                                    <div className="mt-8 mb-4">
                                        <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Upload File</label>
                                        <div className="flex items-center">
                                            <label className="w-64 flex justify-center items-center px-4 py-2 bg-white text-gray-600 rounded-lg tracking-wide border border-blue-200 cursor-pointer hover:bg-blue-200 hover:text-white">
                                                <span className="ml-2 text-sm">Select a file</span>
                                                <input type="file" className="hidden" id="file" name="file" onChange={handleFileChange} />
                                            </label>
                                        </div>
                                    </div>
                                    {selectedFile && (
                                        <p className="text-gray-600 mt-2">
                                            Selected File: {selectedFile.name}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between mt-4">
                                        <button type="button" onClick={uploadFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Upload File
                                        </button>
                                    </div>
                                </div>
                            )
                    }

                </div>
                <div className="message space-y-5">
                    <h2 className="
                        text-3xl 
                    ">Share files directly from your device to anywhere</h2>
                    <p className="
                        text-xl 
                        font-thin
                        text-gray-500
                        w-96
                    ">
                        HatShare is a free file sharing service that allows you to share files with anyone in the world.
                        You can share files up to 5GB for free and without registration.
                    </p>
                </div>
            </div>
            <div className="featuresSection
                flex flex-col
                justify-center
                items-center
                space-y-12 
                m-28 ">

                <h1 className="
                    text-4xl
                    text-center">
                    Features
                </h1>
                <div className="features flex flex-row justify-center space-x-10">
                    <div className="feature 
                        flex flex-col
                        justify-center
                        items-center
                        space-y-5
                    ">
                        <h2 className="
                            text-2xl
                            text-center
                        ">
                            No registration required
                        </h2>
                        <p className="
                            text-xl
                            font-thin
                            text-gray-500
                            text-center
                            w-96
                        ">
                            You can use HatShare without registration. Just upload your file and share the link with your friends or colleagues.
                        </p>
                    </div>
                    <div className="feature
                         flex flex-col
                         justify-center
                         items-center
                         space-y-5
                    ">
                        <h2 className="
                            text-2xl
                            text-center
                        ">
                            No file size limits
                        </h2>
                        <p className="
                            text-xl
                            font-thin
                            text-gray-500
                            text-center
                            w-96
                        ">
                            You can upload files up to 5GB for free. If you want to upload larger files, you can upgrade to our premium plans.
                        </p>
                    </div>
                    <div className="feature
                    
                    flex flex-col
                    justify-center
                    items-center
                    space-y-5
                    ">
                        <h2 className="
                            text-2xl
                            text-center
                        ">
                            No expiration date
                        </h2>
                        <p className="
                            text-xl
                            font-thin
                            text-gray-500
                            text-center
                            w-96
                        ">
                            Your files will be stored on our servers as long as you need them. You can share your files without worrying about them being deleted.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}