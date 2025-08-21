import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section1 from '../../components/detail/section1/section1';
import Section2 from '../../components/detail/section2/Section2';
import { useParams } from 'react-router-dom';
import { detailActions } from '../../store/modules/detail/detailSlice';
import Modal from '../../components/modal';

const Detail = () => {
    const { type } = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    useEffect(() => {
        dispatch(detailActions.getDetail(type));
        setIsLoading(true);
    }, [dispatch, type]);

    if (!isLoading) return <div>로딩중...</div>;
    return (
        <>
            <Section1 setIsModal={setIsModal} setModalTitle={setModalTitle} />
            <Section2 type={type} />
            {isModal && <Modal title={modalTitle} setIsModal={setIsModal} />}
        </>
    );
};

export default Detail;
