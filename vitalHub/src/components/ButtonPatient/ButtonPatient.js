import { AppointmentBox, AppointmentIcon } from './Style'

export const ButtonPatient = ({ onPressSchedule }) => {
    return(
        <AppointmentBox onPress={onPressSchedule}>
        <AppointmentIcon 
        source={require('../../assets/jam_medical.png')}
        />
    </AppointmentBox>
    )
}