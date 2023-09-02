import styled from 'styled-components';
import Calendar from './components/Calendar';
import Header from '../common/components/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type ConvertDate = Record<string, number>;

export type GroupMemberData = {
    memberId: number;
    selectedDates: string[];
}

const getGroupData = (groupId: number) => {
    const host = `52.78.130.4:8080/api/v1/date?groupId=${groupId}`;

    return new Promise((resolve, reject) => {
        resolve(
            {
                "message": {
                    "code": 200,
                    "message": "API 요청 성공"
                },
                "result": {
                    "dateResponseDtoList": [
                    {
                        "memberId": 1,
                        "selectedDates": [
                        "2023-09-01",
                        "2023-09-02",
                        "2023-09-12"
                        ]
                    },
                    {
                        "memberId": 2,
                        "selectedDates": [
                        
                        ]
                    },
                    {
                        "memberId": 3,
                        "selectedDates": [
                        
                        ]
                    }
                    ]
                }
                }
        )
    })
}

const SchedulePage = () => {
    const params = useParams();
	const groupId = params.groupId;

    const [groupMemberData, setGroupMemberData] = useState<GroupMemberData[]>([]);

    useEffect(() => {
        getGroupData(groupId).then(({message, result}) => {
            setGroupMemberData(result.dateResponseDtoList);
        });
    }, []);

    const membersData = [{ member_id: '1234', selected_dates: ['2023-09-01', '2023-09-02', '2023-09-03']}, { member_id: '1235', selected_dates: ['2023-09-01', '2023-09-02', '2023-09-03']}];
    const convertDate: ConvertDate = {};


    const [selectedDate, setSelectedDate] = useState<string[]>([]);

    
    const totalMember = membersData.length;
    membersData.forEach(member => {
        member.selected_dates.forEach(date => {
            convertDate[date] = convertDate[date] ? convertDate[date] + 1 : 1;
        });
    });

    console.log(convertDate);

    return <Container>
        <Header title="일정 정하기" onBack={() => console.log('onBack')} />
        <CalendarWrap>
            <Calendar selectedDate={selectedDate} />
        </CalendarWrap>
    </Container>
};

export default SchedulePage;

const Container = styled.div`
height: 100vh;
border-left: 1px solid gray;
border-right: 1px solid gray;
`

const CalendarWrap = styled.div`
margin-top: 100px;
padding: 8px;
`;


// const Styled = styled.div`
// // min-width: 360px;
// // height: 100%;
// // display: flex;
// // flex-direction: column;
// // justify-content: center;
// // align-items: center;
// // background: #ffffff;
// `;