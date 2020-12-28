import React from 'react';
import { GridOverlay, DataGrid } from '@material-ui/data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "@material-ui/core/Button";

import { MdModeEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

const AudienceDataTable = (props) => {

    const columns = [
        { field: 'id', headerName: 'ID', flex: 2 },
        { field: 'email', headerName: 'E-mail address', flex: 2 },
        { field: 'first_name', headerName: 'Firstname', type: 'date', flex: 2 },
        { field: 'lastname', headerName: 'Lastname', flex: 2 },
        {
            field: 'tags', headerName: 'Tags', flex: 2, sortable: false,
            renderCell: (param) => {
                return (
                    <div> {JSON.stringify(param)}
                    </div>
                );
            }
        },
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
    )
}

export default AudienceDataTable;
