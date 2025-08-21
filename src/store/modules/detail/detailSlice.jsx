import { createSlice, current } from '@reduxjs/toolkit';
import phoneCaseData from '../../../assets/detail/phoneCaseData';

/* 
    아이템 요소 분리가 제대로 이루어지지 않았기 때문에 
    detail 페이지에서 사용되는 데이터는 고정 데이터로 사용 될 수 있도록 처리 하였습니다.
 */
const initialState = {
    data: phoneCaseData,
    currentData: {},
    otherList: [],
};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        getDetail: (state, action) => {
            switch (action.payload) {
                case 'phone':
                default:
                    const phoneData = state.data.find((item) => item.type === action.payload);
                    const currentCaseData = phoneData.case.find((item) => item.id === 1);
                    state.currentData = {
                        type: 'phone',
                        name: '리플케이스 - 프림로즈 핑크 2',
                        firstTitle: '손안에 피어나는 꽃들의 속삭임',
                        secondTitle: `미니멀리즘의 새로운 물결이 찾아왔습니다.
            강력한 보호력과 심플함의 미학을 세련되게 담아낸 실루엣. 
            아름다운 계절에 꽃처럼 물든 컬러로 만나보세요.`,
                        forPhone: '아이폰 16 Pro Max',
                        caseData: currentCaseData,
                        colors: ['white', '#D3BDAF', '#EDBAD2', '#2D59C5', '#000080', '#000'],
                    };
                    state.otherList = phoneData.case;
                    break;
            }
        },
        editCurrentItem: (state, action) => {
            const { type, id } = action.payload;
            const dataList = state.data.find((item) => item.type === type);

            const target = dataList.case.find((item) => item.id === id);
            state.currentData.caseData = target;
        },
    },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
