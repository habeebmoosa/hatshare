import React from "react";

export const About = () => {
    return (
        <div className="flex justify-center flex-col items-center text-center mb-10">
            <div className="mt-32 space-y-10">
                <h1 className="text-3xl font-bold mb-4">About HatShare</h1>
                <div className="flex flex-col space-y-10 max-w-3xl p-5">
                    <p className="text-lg">
                        HatShare is your go-to destination for easy and secure file sharing. We
                        provide a simple and efficient way to share your files with friends,
                        colleagues, or anyone you choose, all in one convenient platform.
                    </p>
                    <p className="text-lg mt-4">
                        With HatShare, you can upload your files, whether they are documents,
                        images, videos, or any other type of file, and instantly generate a
                        unique shareable link. Share this link with your intended recipient, and
                        they can easily download the shared file from anywhere in the world,
                        hassle-free.
                    </p>
                    <p className="text-lg mt-4">
                        Your files are kept private and secure, ensuring that only those with
                        the link can access and download them. Whether it's for work,
                        collaboration, or simply sharing memories, HatShare simplifies the file
                        sharing process for you.
                    </p>
                    <p className="text-lg mt-4">
                        Join the HatShare community today and experience a seamless and
                        efficient way to share files with the world.
                    </p>
                </div>
            </div>
        </div>

    )
}