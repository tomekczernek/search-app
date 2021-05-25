import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default function AddCommentBox({ openCommentInput, setOpenCommentInput, repoSaveList, setRepoSaveList, commentedRepoId, setCommentedRepoId }) {

    const [commentValue, setCommentValue] = useState('');

    const handleCommentValue = (event) => {
        setCommentValue(event.target.value);
    };

    const handleSaveComment = () => {
        if (commentValue && commentedRepoId) {
            repoSaveList.map(item =>
                item.id === commentedRepoId
                    ? item.commentsList.push({ text: commentValue, createDate: new Date().toLocaleString().replace(/,/g, '') })
                    : item
            );
            setRepoSaveList(repoSaveList);

            localStorage.setItem(commentedRepoId, JSON.stringify(repoSaveList[0]));
        }
        setCommentedRepoId(null);
        setOpenCommentInput(false);
        setCommentValue('');
    };

    return (
        <Modal
            isOpen={openCommentInput}
            centered>
            <ModalHeader>Dodaj komentarz</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Twój komentarz:</Label>
                        <Input
                            type="textarea"
                            name="text"
                            value={commentValue}
                            onChange={handleCommentValue}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSaveComment();
                                }
                            }}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter className="d-flex justify-content-between">
                <Button size="sm" color="secondary" onClick={setOpenCommentInput}>Anuluj</Button>
                <Button size="sm" color="danger" onClick={handleSaveComment}>Zapisz</Button>
            </ModalFooter>
        </Modal>
    );
};