import colors from '../../assets/theme/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';

const CalendarView = ({
  isModalVisible,
  onClose,
  onSelectDate,
  selectedDate,
}) => {
  return (
    <Modal isVisible={isModalVisible} onBackdropPress={onClose}>
      <View>
        <Calendar
          style={{
            borderRadius: 6,
            height: 350,
          }}
          theme={{
            backgroundColor: colors.backgroundColors.grey,
            calendarBackground: colors.backgroundColors.grey,
            textSectionTitleColor: '#ffffff',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#ffffff',
          }}
          onDayPress={day => {
            onSelectDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
          onDayLongPress={day => console.log('onDayLongPress', day)}
          onMonthChange={date => console.log('onMonthChange', date)}
          onPressArrowLeft={goToPreviousMonth => {
            console.log('onPressArrowLeft');
            goToPreviousMonth();
          }}
          onPressArrowRight={goToNextMonth => {
            console.log('onPressArrowRight');
            goToNextMonth();
          }}
        />
      </View>
    </Modal>
  );
};
export default CalendarView;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    // marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
