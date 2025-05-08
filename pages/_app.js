import '../assets/css/style.css';
import '../assets/css/theme.css';
import '../assets/icons/style.css';

import '../vendor/jquery-ui-1.12.1/jquery-ui.min.css';
import '../vendor/jquery.scrollbar/jquery.scrollbar.css';
import '../vendor/fancybox/dist/jquery.fancybox.min.css';
import { PostHogProvider} from 'posthog-js/react'

const options = {
  api_host: 'https://us.i.posthog.com',
}



function MyApp({ Component, pageProps }) {
  return (
      <PostHogProvider
          apiKey={"phc_yXtbEhUIGrPF3wctuj31qmpateKRyHny5SOeW9k2sgT"}
          options={options}
      >
        <Component {...pageProps} />
      </PostHogProvider>
  )
}

export default MyApp
