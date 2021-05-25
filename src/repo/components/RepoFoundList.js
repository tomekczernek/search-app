import {Button} from 'reactstrap';

import RepoContainer from './RepoContainer';

export default function RepoFoundList({ repoList, repoSaveList, setRepoSaveList }) {

    const handleAddRepoToSave = (param) => () => {
        param.commentsList = [];
        const repoExist = repoSaveList.filter(item => item.id === param.id).length;
        if (!repoExist) {
            setRepoSaveList([...repoSaveList, param]);

            localStorage.setItem(param.id, JSON.stringify(param));
        }
    };

    return (
        <div className="app-search-repo-list shadow bg-light my-2 p-2">
            {repoList.length ? <p className="py-2 font-weight-bold">List wyników</p> : <p className="text-center p-3 m-0">Brak wyników dla podanej wartości</p>}
            {repoList.length ? repoList.map(item => (
                <RepoContainer key={item.id}>
                    <div>
                        <h5>{item.full_name}</h5>
                        <p>{item.owner.login}</p>
                    </div>
                    <Button size="sm" onClick={handleAddRepoToSave({ id: item.id, name: item.full_name, owner: item.owner.login })}>Dodaj do ulubionych</Button>
                </RepoContainer>
            )) : null}
        </div>
    );
};