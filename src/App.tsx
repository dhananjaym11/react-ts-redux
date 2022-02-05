import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridRowId } from '@mui/x-data-grid';
import { Dispatch } from "redux";

import "./App.scss";
import { getTodoData } from "./store/actionCreators";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'completed', headerName: 'Completed' },
];

const App: React.FC = () => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);

    const todoData: readonly ITodo[] = useSelector(
        (state: AppState) => state.todoData,
    );

    const dispatch: Dispatch<any> = useDispatch();

    React.useEffect(() => {
        dispatch(getTodoData())
    }, [dispatch])

    const deleteTodoData = (data: GridRowId[]) => dispatch({ type: 'DELETE_DATA', payload: data });

    return (
        <main>
            <h1>To Do App</h1>

            <button onClick={() => deleteTodoData(selectionModel)}>
                Delete
            </button>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={todoData}
                    columns={columns}
                    checkboxSelection
                    selectionModel={selectionModel}
                    onSelectionModelChange={(model) => setSelectionModel(model)}
                />
            </div>

        </main>
    );
};

export default App;
