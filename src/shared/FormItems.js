import styled from 'styled-components'

const StyledFormItem = styled.div`
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
  display: block;
`

const StyledInput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.8rem;
  display: block;
  width: 100%;
  padding: 1rem 1.2rem;
`

const StyledText = styled.span`
  margin-top: 0.2rem;
  display: block;
`

const StyledError = styled(StyledText)`
  color: red;
`

const FormItems = (props) =>  {
  const {tag, label, type, required, id, help, error} = props

  return (
    <StyledFormItem>
      <StyledLabel for={id}>{label}</StyledLabel>
      <StyledInput id={id} type={type} required={required}/>
      {help !== null &&
        <StyledText type='help'>{help}</StyledText>
      }
      <StyledError>{error}</StyledError>
    </StyledFormItem>
  )
}

export default FormItems
