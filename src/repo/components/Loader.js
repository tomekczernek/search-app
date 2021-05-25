import { Modal, ModalBody, Spinner } from 'reactstrap';

export default function Loader({loaderOpen}){
    return(
        <Modal
            isOpen={loaderOpen}
            centered>
            <ModalBody className="text-center">
                <p className=" m-0 p-3">Pobieranie danych...</p>
            </ModalBody>
            
        </Modal>
    );
};