import '@/styles/globals.css'
import '@/styles/alert.css'
import '@/styles/myAccount.css'
import '@/styles/productDetail.css'
import '@/styles/auth.css'
import Layout from '@/component/layout/layout'
import { Provider } from 'react-redux'
import { wrapper } from '@/store'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        {
        isLoading && <div className="loading-indicator">
          <div className="spinner" />
        </div>
        }
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App;