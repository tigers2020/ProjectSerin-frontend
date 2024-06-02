import React, { useState } from 'react';
import axios from 'axios';

interface AvatarUploadProps {
  userId: string;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("user_id", userId);

    try {
      await axios.post("/api/upload-avatar/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setAvatarUrl(`/api/avatars/${userId}`);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Upload Avatar</button>
      {avatarUrl && <img src={avatarUrl} alt="User Avatar" className="mt-4 w-32 h-32 rounded-full" />}
    </div>
  );
};

export default AvatarUpload;
