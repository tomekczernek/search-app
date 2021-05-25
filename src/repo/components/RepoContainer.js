export default function RepoFoundList({...props}){
    return(
        <div className="my-2 p-2 border border-secondary d-flex justify-content-between align-items-center">
            {props.children}
        </div>
    );
};