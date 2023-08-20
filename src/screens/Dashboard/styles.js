import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: scale(350),
    width: scale(350),
  },
  leftIcon: {
    height: scale(30),
    width: scale(30),
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: colors.backgroundColors.black,
  },
  imgContainer: {
    flexDirection: 'row',
    marginTop: scale(40),
  },
  scrollView: {
    backgroundColor: colors.backgroundColors.black,
    flex: 1,
  },
  patch: {
    backgroundColor: colors.backgroundColors.primary,
    height: scale(26),
    width: scale(110),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(10),
  },
  upperView: {
    marginTop: scale(20),
  },
  patchText: {
    fontWeight: '500',
    fontSize: scale(14),
    color: colors.textColors.white,
  },
  headingText: {
    fontWeight: '500',
    fontSize: scale(24),
    color: colors.textColors.white,
    marginHorizontal: scale(10),
  },
  descriptionText: {
    fontWeight: '500',
    fontSize: scale(14),
    color: colors.textColors.grey,
    flex: 1,
    lineHeight: scale(18),
  },
  descriptionView: {marginHorizontal: scale(10), flexDirection: 'row'},
  readText: {
    fontWeight: '500',
    fontSize: scale(14),
    color: colors.textColors.primary,
  },
  tile: {
    height: scale(18),
    width: scale(5),
    backgroundColor: colors.backgroundColors.primary,
  },
  profileImage: {
    height: scale(39),
    width: scale(120),
  },
  artTag: {
    borderColor: colors.borderColors.grey,
    borderWidth: 1,
    borderRadius: 24,
    padding: scale(10),
    height: scale(43),
    width: scale(140),
  },
  movieTag: {
    borderColor: colors.borderColors.grey,
    borderWidth: 1,
    borderRadius: 24,
    padding: scale(10),
    height: scale(43),
    width: scale(96),
  },
  label: {
    height: scale(15),
    width: scale(104),
  },
  movielabel: {
    height: scale(19),
    width: scale(59),
  },
  sportlabel: {
    height: scale(19),
    width: scale(63),
  },
  calendarView: {
    height: scale(50),
    width: scale(54),
    borderColor: colors.borderColors.primary,
    borderWidth: 1,
    borderRadius: 15,
    padding: scale(10),
    alignItems: 'center',
  },
  calendarImg: {
    height: scale(24),
    width: scale(24),
  },
  mainView: {
    flexDirection: 'row',
    marginVertical: scale(20),
    marginHorizontal: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketView: {
    width: scale(260),
    height: scale(50),
    backgroundColor: colors.backgroundColors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(10),
  },
  ticketText: {
    fontWeight: '500',
    fontSize: scale(18),
    color: colors.textColors.white,
  },
  dateText: {
    fontWeight: '500',
    fontSize: scale(20),
    color: colors.textColors.white,
    marginHorizontal: scale(10),
  },
  locationText: {
    fontWeight: '300',
    fontSize: scale(14),
    color: colors.textColors.white,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: scale(10),
    justifyContent: 'space-between',
  },
  locationImage: {
    width: scale(94),
    height: scale(94),
  },
  directionIcon: {
    width: scale(14),
    height: scale(14),
  },
  directionView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(5),
  },
  directionText: {
    fontWeight: '500',
    fontSize: scale(14),
    color: colors.textColors.primary,
    marginLeft: scale(5),
  },
  organizationView: {
    width: scale(330),
    height: scale(106),
    marginHorizontal: scale(10),
    backgroundColor: colors.backgroundColors.grey,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(5),
    marginBottom: scale(10),
  },
  orgImg: {
    width: scale(92),
    height: scale(92),
  },
  button: {
    width: scale(70),
    height: scale(30),
    backgroundColor: colors.backgroundColors.primary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orgText: {
    fontWeight: '500',
    fontSize: scale(18),
    color: colors.textColors.white,
    marginLeft: scale(5),
    width: scale(140),
    height: scale(44),
  },
  btnText: {
    fontWeight: '500',
    fontSize: scale(14),
    color: colors.textColors.white,
  },
  innerView: {
    marginLeft: scale(5),
  },
  tag: {
    width: scale(97),
    height: scale(26),
    backgroundColor: colors.backgroundColors.tertiary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(10),
    position: 'absolute',
    marginTop: scale(310),
  },
  iconView: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: scale(260),
  },
  inner: {
    width: scale(220),
    height: scale(63),
  },
});
