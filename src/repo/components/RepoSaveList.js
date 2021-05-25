import { Button } from 'reactstrap';

export default function RepoSaveList({ setOpenCommentInput, repoSaveList, setRepoSaveList, setCommentedRepoId }) {

    const handleAddComment = (param) => () => {
        setCommentedRepoId(param.id);
        setOpenCommentInput(true);
    };

    const handleRemoveFromSave = (param) => () => {
        const updatedRepoSaveList = repoSaveList.filter(item => item.id !== param.id);
        setRepoSaveList(updatedRepoSaveList);
        setOpenCommentInput(false);

        localStorage.removeItem(param.id);
    };

    return (
        <div className="app-save-repo-list shadow bg-light my-2 p-2">
            {repoSaveList.length ? <p className="py-2 font-weight-bold">List zapisanych repozytoriów</p> : <p className="text-center p-3 m-0">Brak zapisanych repozytoriów</p>}
            {repoSaveList.length ? repoSaveList.map(item => (
                <div key={`save-id-${item.id}`} className="my-2 p-2 border border-secondary">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{item.name}</h5>
                            <p>{item.owner}</p>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <Button size="sm" className="mb-1" onClick={handleAddComment({ id: item.id })}>Dodaj komentarz</Button>
                            <Button size="sm" onClick={handleRemoveFromSave({ id: item.id })}>Usuń z ulubionych</Button>
                        </div>
                    </div>
                    {item.commentsList.length > 0 ? (
                        <div className="p-2 mt-2 bg-grey">
                            <p className="py-2 m-0 font-weight-bold">Lista komentarzy</p>
                            {item.commentsList.map(item => (
                                <div key={`comment-id-${item.createDate}`} className="mb-2 py-2 border-secondary border-top" >
                                    <h6 className="font-weight-bold">{item.text}</h6>
                                    <p className="m-0">{item.createDate}</p>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            )) : null}
        </div>
    );
};