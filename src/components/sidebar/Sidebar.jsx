import {
  SidebarContainer,
  SidebarBtn,
  SidebarOptions,
  SidebarOption,
  ModalPopup,
  ModalHeading,
  ModalBody,
  UploadingPara,
} from "styles/sidebar/sidebar.style";

import {
  MobileScreenShareIcon,
  DevicesIcons,
  PeopleAltIcon,
  QueryBuilderIcon,
  StarBorderIcon,
  DeleteOutlineIcon,
  CloudQueueIcons,
} from "components/common/SvgIcons";

import { Modal } from "@mui/material";
import { useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";

const Siderbar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setUploading(true);

    // Firebase Storage에 업로드할 파일 경로를 참조
    const fileRef = ref(storage, `files/${file.name}`);

    const fileSize = file.size;

    // 파일을 Firebase Storage에 업로드
    uploadBytes(fileRef, file)
      .then((snapshot) => {
        console.log(snapshot);

        // 업로드된 파일의 다운로드 URL을 가져오기
        getDownloadURL(fileRef).then((url) => {
          // Firestore에 파일 정보를 추가
          addDoc(collection(db, "myfiles"), {
            timestamp: serverTimestamp(),
            filename: file.name,
            fileURL: url,
            size: fileSize, // 업로드된 파일 크기
          })
            .then(() => {
              setUploading(false);
              setFile(null);
              setOpen(false);
            })
            .catch((error) => {
              console.error("파일 추가 실패:", error);
              setUploading(false);
            });
        });
      })
      .catch((error) => {
        console.error("파일 업로드 실패:", error);
        setUploading(false);
      });
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalPopup>
          <form onSubmit={handleUpload}>
            <ModalHeading>
              <h3>Select file you want to upload</h3>
            </ModalHeading>
            <ModalBody>
              {uploading ? (
                <UploadingPara>Uploading...</UploadingPara>
              ) : (
                <>
                  <input
                    type="file"
                    className="modal__file"
                    onChange={handleFile}
                  />
                  <input type="submit" className="modal__submit" />
                </>
              )}
            </ModalBody>
          </form>
        </ModalPopup>
      </Modal>
      <SidebarContainer>
        <SidebarBtn>
          <button onClick={() => setOpen(true)}>
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
            <span>New</span>
          </button>
        </SidebarBtn>
        <SidebarOptions>
          <SidebarOption>
            <MobileScreenShareIcon />
            <span>My Drive</span>
          </SidebarOption>
          <SidebarOption>
            <DevicesIcons />
            <span>Computers</span>
          </SidebarOption>
          <SidebarOption>
            <PeopleAltIcon />
            <span>Shared with me</span>
          </SidebarOption>
          <SidebarOption>
            <QueryBuilderIcon />
            <span>Recent</span>
          </SidebarOption>
          <SidebarOption>
            <StarBorderIcon />
            <span>Starred</span>
          </SidebarOption>
          <SidebarOption>
            <DeleteOutlineIcon />
            <span>Trash</span>
          </SidebarOption>
        </SidebarOptions>
        <hr />
        <SidebarOptions>
          <div class="option">
            <CloudQueueIcons />
            <span>Storage</span>
          </div>
          <div className="progress_bar">
            <progress size="tiny" value="50" max="100" />
            <span>105GB of 200GB used</span>
          </div>
        </SidebarOptions>
      </SidebarContainer>
    </>
  );
};

export default Siderbar;
