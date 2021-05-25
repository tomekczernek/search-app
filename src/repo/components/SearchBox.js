import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import api from '../../api';
import Loader from '../components/Loader';

export default function SearchBox({ setRepoList }) {

    const [searchValue, setSearchValue] = useState('');
    const [loaderOpen, setLoaderOpen] = useState(false);

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchAction = () => {
        if (searchValue) {
            setLoaderOpen(true);
            api.get(searchValue).then(response => {
                setRepoList(response.data.items);
                setLoaderOpen(false);
            });
        }
    };

    return (
        <div className="py-2 px-0">
            <Form inline className="mt-2 p-2 shadow bg-light">
                <Row className="align-items-end">
                    <Col sm="10">
                        <FormGroup className="">
                            <Label>Nazwa repozytorium</Label>
                            <Input
                                type="text"
                                value={searchValue}
                                onChange={handleSearchValue}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        handleSearchAction();
                                    }
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <Button className="float-right m-0" color="danger" onClick={handleSearchAction}>Szukaj</Button>
                    </Col>
                </Row>
            </Form>
            <Loader loaderOpen={loaderOpen}/>
        </div>
    );
};