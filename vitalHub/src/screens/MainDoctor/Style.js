import styled from "styled-components";

export const ContentIcon = styled.View.attrs({
    focus : true
})`
    border-radius: 18px;
    padding: 9px 12px;
    background-color: ${ props => `${props.tabBarActiveBackgroundColor}`};

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const TextIcon = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
`