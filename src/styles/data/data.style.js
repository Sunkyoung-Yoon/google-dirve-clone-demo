import styled from "styled-components";

const DataContainer = styled.div`
  flex: 1 1;
  padding: 10px 0px 0px 20px;
`;

const DataHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  height: 40px;
  .headerLeft {
    display: flex;
    align-items: center;
  }
  .headerRight svg {
    margin: 0px 10px;
  }
`;

const DataGrid = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const DataFile = styled.div`
  text-align: center;
  border: 1px solid rgb(204 204 204 / 46%);
  margin: 10px;
  min-width: 200px;
  padding: 10px 0px 0px 0px;
  border-radius: 5px;
  svg {
    font-size: 60px;
    color: gray;
  }
  p {
    border-top: 1px solid #ccc;
    margin-top: 5px;
    font-size: 12px;
    background: whitesmoke;
    padding: 10px 0px;
  }
`;

const DataListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  p {
    display: flex;
    align-items: center;
    font-size: 13px;
    b {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 22px;
      margin: 10px;
    }
  }
`;

export { DataContainer, DataHeader, DataGrid, DataFile, DataListRow };
