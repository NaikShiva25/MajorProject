import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name:process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_APIKEY, 
  api_secret:process.env.CLOUD_SECREATKEY 
});

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });
const uploadOnCloudinary = async (localFilePath)=>{
     try {
        if(!localFilePath) return null;
       const result = await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"});
       console.log("file uploaded on cloudinary :",result.url);
       fs.unlink(localFilePath);
       return result;
     } catch (error) {
        fs.unlinkSync(localFilePath);//remove the locally saved temp file
        return null;
     }
}
export {uploadOnCloudinary}