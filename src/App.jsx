import { ResetStyled } from './styles/ResetStyled'
import { GlobalStyled } from './styles/GloblalStyled'
import { RoutesMain } from './routes/RoutesMain'


const App = () => {

  return (
    <>
      <RoutesMain />
      <ResetStyled/>
      <GlobalStyled/>
    </>
  )
}

export default App
