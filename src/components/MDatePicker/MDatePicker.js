import React,{useState} from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue(props) {
  const [value, setValue] = useState(dayjs('2022-01-18'));

//new Date()
  const handleDateChange=(val)=>{
    const originalDate=val.$d
    
    const month = originalDate.getMonth() + 1; 
    const day = originalDate.getDate();
    const year = originalDate.getFullYear();

    const updatedDate=`${year}/${month}/${day}`
    props.handleDateChangeP(updatedDate)
  } 



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="From"
          value={value}
          onChange={(newValue) => handleDateChange(newValue) }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
