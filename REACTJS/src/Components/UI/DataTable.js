import React from 'react';
import { GridOverlay, DataGrid } from '@material-ui/data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "@material-ui/core/Button";

import { GrAnalytics } from 'react-icons/gr';
import { MdModeEdit, MdSend } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

const DataTable = (props) => {

  const columns = [
    { field: 'id', headerName: 'ID', flex: 2 },
    { field: 'name', headerName: 'Campaign name', flex: 2 },
    { field: 'created_at', headerName: 'Crated at', type: 'date', flex: 2 },
    { field: 'audience_id', headerName: 'Audience', flex: 2 },
    {
      field: 'buttons', sortable: false, disableClickEventBubbling: true, headerName: 'Actions', width: 300,
      renderCell: (param) => {
        const onClick = () => {
          alert(param.row.id);
          console.log(param);
        }
        return (
          <div>
            <Button className="ActionButtons" onClick={onClick}><MdModeEdit /></Button>
            <Button className="ActionButtons" onClick={onClick}><AiFillDelete /></Button>
            {param.value ?
              <Button className="ActionButtons" onClick={onClick}><MdSend /></Button> :
              <Button className="ActionButtons" onClick={onClick}><GrAnalytics /></Button>
            }
          </div>
        );
      }
    }
  ];

  const loadingOverlay = () => {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      </GridOverlay>
    );
  }

  return (
    <div style={{ height: 'calc(100vh - 80px)', margin: '10px', width: 'calc(100% - 20px)', backgroundColor: '#dddddd', borderRadius: '4px', textAlign: 'center' }}>
        <DataGrid
          components={{
            loadingOverlay: loadingOverlay,
          }}
          onSelectionChange={(newSelection) => {
            console.log(newSelection.rowIds);
          }}
          loading={props.loading}
          stickyHeader
          rows={props.rows}
          columns={columns}
          pageSize={15}
          checkboxSelection
        />
    </div>
  );
}

export default DataTable;