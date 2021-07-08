import { all } from "redux-saga/effects";
import { watcherAddContato, watcherDeleteContato, watcherLoadContatos } from "../ducks/contatos";
// importar outros watchers

export default function* rootSaga() {
    yield all([
        watcherAddContato(),
        watcherDeleteContato(),
        watcherLoadContatos()
    ]);
}