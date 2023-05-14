import '@/styles/globals.css'
import '@/styles/alert.css'
import '@/styles/myAccount.css'
import '@/styles/productDetail.css'
import '@/styles/auth.css'
import Layout from '@/component/layout/layout'
import { Provider } from 'react-redux'
import { wrapper } from '@/store'

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App;