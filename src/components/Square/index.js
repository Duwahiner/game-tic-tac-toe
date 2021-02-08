import {
  Block,
  ContainerSquare,
  Container,
  ContainerBlock
} from './styleComponents'

const Square = ({ handleClick, margin }) => {
  const handleStyleBorder = (style) => `solid 8px ${style}`

  return (
    <ContainerSquare
      width={1}
      flexDirection='column'
    >
      <Block width={1}>
        <Container
          style={{
            borderRight: handleStyleBorder('#EBF20C'),
            borderBottom: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--0'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>

        <Container
          style={{
            borderBottom: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--1'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>

        <Container
          style={{
            borderLeft: handleStyleBorder('#EBF20C'),
            borderBottom: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--2'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>
      </Block>

      <Block width={1}>
        <Container
          style={{
            borderRight: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--3'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>

        <Container>
          <ContainerBlock
            id='board--square--gm--4'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>

        <Container
          style={{
            borderLeft: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--5'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>
      </Block>

      <Block>
        <Container
          style={{
            borderTop: handleStyleBorder('#EBF20C'),
            borderRight: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--6'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>

        <Container
          style={{
            borderTop: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--7'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>

        <Container
          style={{
            borderTop: handleStyleBorder('#EBF20C'),
            borderLeft: handleStyleBorder('#EBF20C')
          }}
        >
          <ContainerBlock
            id='board--square--gm--8'
            onClick={handleClick}
            margin={margin}
            justifyContent='center'
            alignItems='center'
            flex='none'
          />
        </Container>
      </Block>
    </ContainerSquare>
  )
}
export default Square
