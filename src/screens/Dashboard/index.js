import React, {useEffect, useState} from 'react';
import icons from '../../assets/icons';
import RNCalendarEvents from 'react-native-calendar-events';
import {
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Toast from 'react-native-toast-message';

import TileView from '../../components/TileView';
import styles from './styles';
import CalendarView from '../../components/CalendarView';
import DASHBOARD_STRINGS from '../../constants/Strings';
import colors from '../../assets/theme/colors';
import ProfilePicView from '../../components/ProfilePicView';
import CategoryView from '../../components/CategoryView/CategoryView';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.backgroundColors.black,
        alignItems: 'center',
      }}>
      <ActivityIndicator
        size={'large'}
        color={colors.backgroundColors.primary}
      />
    </View>
  );
};
const Dashboard = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    askCalendarPermissions();
  }, []);

  useEffect(() => {
    fakeApiCall();
  }, []);

  const askCalendarPermissions = () => {
    RNCalendarEvents.requestPermissions()
      .then(res => {
        console.log('res', res);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const addEventToCalendar = async () => {
    try {
      const eventDetails = {
        title: 'My Event',
        title: 'Title here',
        startDate: moment(selectedDate)
          .utc()
          .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
        endDate: moment(selectedDate)
          .utc()
          .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      };

      await RNCalendarEvents.saveEvent('Event', eventDetails);
      showSuccessToast();
      console.log('Event added to calendar');
    } catch (error) {
      console.error('Error adding event to calendar', error);
    }
  };

  const onTicketClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onSelectDate = date => {
    setSelectedDate(date);
    console.log('date', date);
  };

  // Code snippet to open map
  const openMap = () => {
    const latitude = 51.758041;
    const longitude = -1.25452;
    const label = 'Custom Location';

    const mapUrl = `geo:${latitude},${longitude}?q=${latitude},${longitude}(${label})`;
    Linking.openURL(mapUrl);
  };

  const ReadMore = () => {
    return (
      <Text
        onPress={() => setIsTruncated(!isTruncated)}
        style={styles.readText}>
        {isTruncated ? 'Read more' : ' Read less'}
      </Text>
    );
  };

  const showToast = ({error, heading, description}) => {
    Toast.show({
      type: 'error',
      text1: 'Warning',
      text2: 'Please Select a Date First',
    });
  };

  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text2: 'Event Added to calendar ssuccessfully!',
    });
  };

  const fakeApiCall = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        source={icons?.bg}
        resizeMode="contain"
        style={styles.image}>
        <LinearGradient
          colors={['#000000A0', '#00000000']}
          style={{height: '50%', width: '100%'}}>
          <View style={styles.imgContainer}>
            <Image style={styles.leftIcon} source={icons.left} />
            <View style={styles.iconView}>
              <Image
                style={[styles.leftIcon, {marginRight: scale(10)}]}
                source={icons.heart}
              />
              <Image style={styles.leftIcon} source={icons.share} />
            </View>
          </View>
          <View style={styles.tag}>
            <Text style={styles.btnText}>{DASHBOARD_STRINGS.SOLD}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.upperView}>
        <View style={styles.patch}>
          <Text style={styles.patchText}> {DASHBOARD_STRINGS.PRICE}</Text>
        </View>
        <Text style={styles.headingText}>{DASHBOARD_STRINGS.HEADING}</Text>
        <View style={styles.descriptionView}>
          <Text
            numberOfLines={isTruncated ? 1 : Number.MAX_SAFE_INTEGER}
            style={styles.descriptionText}>
            {DASHBOARD_STRINGS.DESCRIPTION}
            {!isTruncated && <ReadMore />}
          </Text>
          {isTruncated && <ReadMore />}
        </View>
      </View>
      <TileView tileText="Participants" />
      <ProfilePicView />
      <TileView tileText="Categories" />
      <CategoryView />
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={selectedDate ? addEventToCalendar : showToast}>
          <View style={styles.calendarView}>
            <Image source={icons.calendar} style={styles.calendarImg} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onTicketClick}>
          <View style={styles.ticketView}>
            <Text style={styles.ticketText}>
              {selectedDate ? selectedDate : 'Select a Date'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {isModalVisible ? (
        <CalendarView
          isModalVisible={isModalVisible}
          onClose={onTicketClick}
          onSelectDate={onSelectDate}
          selectedDate={selectedDate}
        />
      ) : null}
      <TileView tileText="Date & Time" />
      <Text style={styles.dateText}>{DASHBOARD_STRINGS.DATE}</Text>
      <TileView tileText="Location" />
      <View style={styles.locationView}>
        <View style={styles.inner}>
          <Text style={styles.locationText}>{DASHBOARD_STRINGS.LOCATION}</Text>
          <View style={styles.directionView}>
            <Image source={icons.directions} style={styles.directionIcon} />
            <TouchableOpacity onPress={openMap}>
              <Text style={styles.directionText}>
                {DASHBOARD_STRINGS.DIRECTIONS}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={icons.location} style={styles.locationImage} />
      </View>
      <TileView tileText="Organized by" />
      <View style={styles.organizationView}>
        <Image source={icons.orgImg} style={styles.orgImg} />
        <View style={styles.innerView}>
          <Text style={styles.orgText}>{DASHBOARD_STRINGS.FOOTER}</Text>
          <View style={styles.button}>
            <Text style={styles.btnText}>{DASHBOARD_STRINGS.FOLLOW}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
