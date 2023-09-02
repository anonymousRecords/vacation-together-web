import styled from 'styled-components';
import Calendar from './components/Calendar';
import Header from '../common/components/Header';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

type ConvertDate = Record<string, number>;

export type GroupMemberData = {
    memberId: number;
    selectedDates: string[];
}

type SelectedDate = string;

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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

const postSelectedData = (memberId: number, selectedDates: string[]) => {
    const host = `52.78.130.4:8080/api/v1/date`;
    fetch(host, {
        method: "POST",
        body: JSON.stringify({
            memberId: memberId,
            selectedDates: selectedDates
        })
    })
}

const SchedulePage = () => {
    const params = useParams();
	const groupId = params.groupId as string;

    const memberId = 1234;
    const [selectedDates, setSelectedDates] = useState<GroupMemberData['selectedDates']>([]);
    const [groupMemberData, setGroupMemberData] = useState<GroupMemberData[]>([]);
    const groupMemberTotal = useMemo(() => groupMemberData.length, [groupMemberData]);

    useEffect(() => {
        getGroupData(+groupId).then(({message, result}) => {
            setGroupMemberData(result.dateResponseDtoList);
        });
    }, []);

    const [calendarData, setCalendarData] = useState<ConvertDate>({});
    useEffect(() => {
        const newData: ConvertDate = {}

        groupMemberData.forEach(member => {
            member.selectedDates.forEach(date => {
                newData[date] = newData[date] ? newData[date] + 1 : 1;
            });
        });

        setCalendarData(newData);
    }, [groupMemberData]);


    const date = dayjs();

    const currentDatess = new Date();
    const daysInMonth = new Date(currentDatess.getFullYear(), currentDatess.getMonth() + 1, 0).getDate();
    const monthDates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    
    const makeDate = useCallback(() => {
        const newData: ConvertDate = {}
        groupMemberData.forEach(member => {
            member.selectedDates.forEach(date => {
                newData[date] = newData[date] ? newData[date] + 1 : 1;
            });
        });
        selectedDates.forEach(date => {
            newData[date] = newData[date] ? newData[date] + 1 : 1;
        })

        return monthDates.map(date => 
            <CalendarDateWrap key={date} onClick={() => {
                const selectedDate = dayjs(`2023-09-${date}`).format('YYYY-MM-DD');
                if (selectedDates.includes(selectedDate)) {
                    const newSelectedDates = selectedDates.filter(date => date !== selectedDate);
                    setSelectedDates(newSelectedDates);
                } else {
                    setSelectedDates(prev => {
                        return [...prev, selectedDate];
                    })
                }
            }}>
                <CalendarDate percent={ calendarData[dayjs(`2023-09-${date}`).format('YYYY-MM-DD')] / groupMemberTotal}>
                    {date}
                </CalendarDate>
            </CalendarDateWrap>
        )
    }, [groupMemberData, selectedDates, calendarData]);

    

    return <Container>
        <Header title="일정 정하기" onBack={() => console.log('onBack')} />
        <CalendarWrap>
            <CalendarContainer>
                <CalendarHeader>{date.format('YYYY. MM')}</CalendarHeader>
                <CalendarLayout>
                    {DAYS.map(day => (
                        <CalendarDay key={day} isHoliday={day === 'SUN'}>{day}</CalendarDay>
                    ))}
                </CalendarLayout>
                <CalendarLayout>
                    {
                        Array.from({ length: 5 }, (_, i) => i + 1).map(date => <CalendarDateWrap key={date}>
                            <CalendarDate percent={0}>
                                
                            </CalendarDate>
                        </CalendarDateWrap>)
                    }
                    {makeDate()}
                </CalendarLayout>
            </CalendarContainer>
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

const CalendarContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 24px 16px;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 24px;
    background: white;
    border: 1px solid gray;
`;

const CalendarLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    text-align: center;
`

const CalendarHeader = styled.div`
    color: #212121;
    text-align: center;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 20px */
    letter-spacing: -0.6px;
    margin-bottom: 24px;
`;

const CalendarDay = styled.div<{isHoliday: boolean}>`
${({ isHoliday }) => isHoliday ? `color: red` : 'color: black'};
`

const CalendarDateWrap = styled.div`
    display: flex;
    width: 100%;
    height: 52px;
    padding: 8x;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
`
const CalendarDate = styled.div<{percent: number}>`
display: flex;
background: ${({ percent }) => `rgba(1, 113, 0, ${percent || 0})`};
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`

const SelectMemberWrap = styled.div``;