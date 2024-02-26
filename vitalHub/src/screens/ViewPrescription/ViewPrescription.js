import { ContainerUser, ContentProntuario, PhotoContainer } from '../../components/Container/Style'
import { InputUser } from '../../components/Input/Style'
import { SubTextQuick } from '../../components/Text/Text'
import { LabelUser, TitleUser } from '../../components/Title/Style'
import { UserContainer } from '../../components/UserContainer/Style'

export const ViewPrescription = () => {
    return(
        <ContainerUser contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <PhotoContainer>
        <UserContainer source={require('../../assets/UserDoctorBig.png')}/>
        </PhotoContainer>

        <ContentProntuario>
        <TitleUser>Dr. Cláudio</TitleUser>
        <SubTextQuick>Cliníco geral   CRM-15286</SubTextQuick>    
        </ContentProntuario>

        <LabelUser>Descrição da consulta</LabelUser>
        <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 80}}
        placeholder="..."
        placeholderTextColor="#4E4B59"
        /> 

        <LabelUser>Diagnóstico do paciente</LabelUser>
        <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0}}
        placeholder="..."
        placeholderTextColor="#4E4B59"
        /> 

        <LabelUser>Prescrição médica</LabelUser>
        <InputUser style={{  height: 133, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 80}}
        placeholder="..."
        placeholderTextColor="#4E4B59"
        /> 
        </ContainerUser>
    )
}