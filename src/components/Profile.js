import React, { useState } from "react";
import axios from "axios";

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/user/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Avatar uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upload Avatar</h2>
      {preview && <img src={preview} alt="avatar preview" width="120" style={{ borderRadius: "50%" }} />}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Profile;
