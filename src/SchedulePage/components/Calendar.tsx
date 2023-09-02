import styled from 'styled-components';
import dayjs from 'dayjs';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

type SelectedDate = string;

type Props = {
}

const Calendar = ({}: Props) => {
    const date = dayjs();
    

  // 현재 날짜를 가져오고, 이번 달의 첫째 날을 계산합니다.
  const currentDatess = new Date();
  const daysInMonth = new Date(currentDatess.getFullYear(), currentDatess.getMonth() + 1, 0).getDate();

  // 이번 달의 날짜 배열을 생성합니다.
  const monthDates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <Container>
        <CalendarHeader>{date.format('YYYY. MM')}</CalendarHeader>
        <CalendarLayout>
            {DAYS.map(day => (
                <CalendarDay key={day} isHoliday={day === 'SUN'}>{day}</CalendarDay>
            ))}
        </CalendarLayout>
        <CalendarLayout>
            {
                Array.from({ length: 5 }, (_, i) => i + 1).map(date => <CalendarDateWrap key={date}>
                    <CalendarDate>
                        
                    </CalendarDate>
                </CalendarDateWrap>)
            }
            {monthDates.map(date => (
                <CalendarDateWrap key={date}>
                    <CalendarDate>
                        {date}
                    </CalendarDate>
                </CalendarDateWrap>
            ))}
        </CalendarLayout>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
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
    height: 62px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
`
const CalendarDate = styled.div`
display: flex;

`

const SelectMemberWrap = styled.div`
`