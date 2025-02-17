import {
  DataContainer,
  DataHeader,
  DataGrid,
  DataFile,
  DataListRow,
} from "styles/data/data.style";

import {
  ArrowDropDownIcons,
  ListIcons,
  InfoOutlinedIcons,
  InsertDriveFileIcons,
  ArrowDownwardIcons,
} from "components/common/SvgIcons";

import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Data = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "myfiles"), // "myfiles" 컬렉션을 참조
      (snapshot) => {
        setFiles(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      (error) => {
        console.error("Error getting documents: ", error);
      }
    );

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => unsubscribe();
  }, []);

  // bytes 변환 (1024 : 1KB, 1048576 : 1MB)
  const changeBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <DataContainer>
      <DataHeader>
        <div className="headerLeft">
          <p>My Drive</p>
          <ArrowDropDownIcons />
        </div>
        <div className="headerRight">
          <ListIcons />
          <InfoOutlinedIcons />
        </div>
      </DataHeader>
      <div>
        <DataGrid>
          {files.map((file) => (
            <DataFile key={file.id}>
              <InsertDriveFileIcons />
              <p>{file.data.filename}</p>
            </DataFile>
          ))}
        </DataGrid>
        <div>
          <DataListRow>
            <p>
              <b>
                Name <ArrowDownwardIcons />
              </b>
            </p>
            <p>
              <b>Owner</b>
            </p>
            <p>
              <b>Last Modified</b>
            </p>
            <p>
              <b>File Size</b>
            </p>
          </DataListRow>
          {files.map((file) => (
            <DataListRow key={file.id}>
              <a href={file.data.fileURL} target="_blank">
                <p>
                  <InsertDriveFileIcons /> {file.data.filename}
                </p>
              </a>
              <p>Owner</p>
              <p>
                {new Date(file.data.timestamp?.seconds * 1000).toUTCString()}
              </p>
              <p>{changeBytes(file.data.size)}</p>
            </DataListRow>
          ))}
        </div>
      </div>
    </DataContainer>
  );
};

export default Data;
