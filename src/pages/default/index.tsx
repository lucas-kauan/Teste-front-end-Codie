import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { IDefault } from '../../interfaces/pages'
import { ContainerHome } from './style'

const DefaultPage = ({children, isHome}: IDefault) => {
    return (
        
        isHome ?
            <ContainerHome>
                <Header />
                {
                    children
                }
                <Footer />
            </ContainerHome>
            :
            <>
                <Header />
                    {
                        children
                    }
                <Footer />
            </>
            
    )
}

export default DefaultPage