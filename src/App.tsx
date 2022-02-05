import * as React from "react";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridRowId } from '@mui/x-data-grid';
import { Dispatch } from "redux";

import "./App.scss";
import Loader from './components/Loader';
import { getTodoData } from "./store/actionCreators";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 600 },
    { field: 'completed', headerName: 'Completed', width: 100 },
];

const App: React.FC = () => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [showLoader, setShowLoader] = React.useState<boolean>(true);
    const todoData: readonly ITodo[] = useSelector(
        (state: AppState) => state.todoData,
    );

    const dispatch: Dispatch<any> = useDispatch();

    React.useEffect(() => {
        dispatch(getTodoData());
    }, [dispatch]);

    React.useEffect(() => {
        if (todoData.length && showLoader) {
            setShowLoader(false)
        }
    }, [todoData, showLoader])

    const deleteTodoData = (data: GridRowId[]) => dispatch({ type: 'DELETE_DATA', payload: data });

    return (
        <main className="main">
            {
                showLoader ?
                    <Loader /> :
                    <>
                        <div className="header">
                            <h1>To Do App</h1>
                            <Button
                                variant="contained"
                                color="error"
                                disabled={selectionModel.length === 0}
                                onClick={() => deleteTodoData(selectionModel)}
                            >Delete</Button>
                        </div>

                        <div style={{ height: 500, width: '100%' }}>
                            <DataGrid
                                rows={todoData}
                                columns={columns}
                                pageSize={25}
                                checkboxSelection
                                selectionModel={selectionModel}
                                onSelectionModelChange={(model) => setSelectionModel(model)}
                            />
                        </div>
                    </>
            }
        </main>
    );
};

export default App;
