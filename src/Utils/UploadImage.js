import { Api_paths } from "./ApiPath";
import axiosInstance from "./axiosInstance";

const UploadImage = async(imageFile) =>{
    const formData = new FormData();

    formData.append("image" , imageFile);

    try {
        const response = await axiosInstance.post(Api_paths.IMAGE.UPLOAD_IMAGE , formData , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        });
        return response.data;

    } catch (error) {
        console.error("Error uploading the error" , error);
        throw error;
    }
};

export default UploadImage;