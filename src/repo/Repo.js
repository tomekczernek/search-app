import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import SearchBar from './components/SearchBox';
import RepoFoundList from './components/RepoFoundList';
import AddCommentBox from './components/AddCommentBox';
import RepoSaveList from './components/RepoSaveList';

export default function Repo() {

    const [repoList, setRepoList] = useState([]);
    const [repoSaveList, setRepoSaveList] = useState([]);
    const [openCommentInput, setOpenCommentInput] = useState(false);
    const [commentedRepoId, setCommentedRepoId] = useState(null);
    const LOCAL = [];

    for (let i = 0; i < localStorage.length; i++) {
        const keyId = localStorage.key(i);
        LOCAL.push(JSON.parse(localStorage.getItem(keyId)));
    }

    useEffect(() => {
        setRepoSaveList(LOCAL);
    }, []);

    return (
        <Container fluid="xl">
            <Row>
                <Col lg="7">
                    <SearchBar
                        setRepoList={setRepoList}
                    />
                    <RepoFoundList
                        repoList={repoList}
                        repoSaveList={repoSaveList}
                        setRepoSaveList={setRepoSaveList}
                    />
                </Col>
                <Col lg="5">

                    <RepoSaveList
                        setOpenCommentInput={setOpenCommentInput}
                        repoSaveList={repoSaveList}
                        setRepoSaveList={setRepoSaveList}
                        setCommentedRepoId={setCommentedRepoId}
                    />
                </Col>
                <AddCommentBox
                    openCommentInput={openCommentInput}
                    setOpenCommentInput={setOpenCommentInput}
                    repoSaveList={repoSaveList}
                    setRepoSaveList={setRepoSaveList}
                    commentedRepoId={commentedRepoId}
                    setCommentedRepoId={setCommentedRepoId}
                />
            </Row>
        </Container>
    );
};