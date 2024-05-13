import { CldUploadButton } from 'next-cloudinary';
import React, { useState } from 'react';

const PhotoUpload: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleUpload = (result: any) => {
    setUploadedImage(result.info.secure_url);
    console.log(result.info.public_id);
  };

  const handleDelete = () => {
    setUploadedImage(null);
  };

  return (
    <div>
      <h2>Upload a Photo</h2>
      <CldUploadButton
        uploadPreset="yhxysssa"
        onUpload={handleUpload}
      />
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={uploadedImage} alt="Uploaded" width="300" height="250" crop="fill" />
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
