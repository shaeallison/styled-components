import styled from 'styled-components'

const HelpText = styled.div`
  margin-top: 0.2rem;
  display: block;
`

const LegendText = styled.div`
  text-transform: uppercase;
`

const ErrorText = styled.div`
  color: red;
`

const Text = (props) => {
  const {as, style, children} = props

  return (
    <>
      {style === 'help' &&
        <HelpText as={as}>{children}</HelpText>
      }

      {style === 'legend' &&
        <LegendText as={as}>{children}</LegendText>
      }

      {style === 'error' &&
        <ErrorText as={as}>{children}</ErrorText>
      }
    </>
  )
}

export default Text
