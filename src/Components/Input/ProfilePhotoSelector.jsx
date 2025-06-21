import React, { useRef, useState } from 'react'
import { LuTrash, LuUpload, LuUser } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {

    const inputRef = useRef(null);
    const [previewURL, setPreviewURL] = useState("");

    const HandleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);

            const preview = URL.createObjectURL(file);
            setPreviewURL(preview);
        }
    };

    const HandleRemoveImage = () => {
        setImage(null);
        setPreviewURL(null);
    };

    const onChoseFile = () => {
        inputRef.current.click();
    }

    return (
        <div className='flex justify-center mb-6'>
            <input type="file" accept='image/*' ref={inputRef} onChange={HandleImageChange} className='hidden' />

            {image ? (
                <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative'>
                    <img src={previewURL} className='w-20 h-20 rounded-full object-cover' alt="Profile Pic" />
                    <button
                        className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute bottom-1 right-0 z-20'
                        type='button'
                        onClick={HandleRemoveImage}
                    >
                        <LuTrash className='absolute z-30' />
                    </button>
                </div>
            ) : (
                <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative'>
                    <LuUser size={36} className='text-purple-500' />
                    <button
                        className='w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute bottom-1 right-0 z-20'
                        type='button'
                        onClick={onChoseFile}
                    >
                        <LuUpload />
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProfilePhotoSelector
