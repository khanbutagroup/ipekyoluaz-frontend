import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }

    }

    render() {
        return (
            <Html>
                <Head>
                 <meta charSet="UTF-8"/>
                 <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
                 <title>Wolmart - Marketplace</title>
                 <link rel="icon" type="image/png" href="assets/images/icons/favicon.png"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/photoswipe/photoswipe.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/photoswipe/default-skin/default-skin.min.css"/>
                 <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                 <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                 <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                 <link rel="preload" href="assets/fonts/wolmart.woff?png09e" as="font" type="font/woff" crossOrigin="anonymous"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css"/>
                 <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/animate/animate.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/magnific-popup/magnific-popup.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/css/demo8.min.css"/>
                 <link rel="preload" href="assets/fonts/wolmart.woff?png09e" as="font" type="font/woff" crossOrigin="anonymous"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/animate/animate.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/magnific-popup/magnific-popup.min.css"/>
                 <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/css/style.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/animate/animate.min.css"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                <script src="assets/vendor/jquery/jquery.min.js"></script>
                <script src="assets/vendor/jquery.plugin/jquery.plugin.min.js"></script>
                <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
                <script src="assets/vendor/zoom/jquery.zoom.js"></script>
                <script src="assets/vendor/jquery.countdown/jquery.countdown.min.js"></script>
                <script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="assets/vendor/skrollr/skrollr.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/js/main.min.js"></script>
                <script src="assets/vendor/photoswipe/photoswipe.min.js"></script>
                <script src="assets/vendor/photoswipe/photoswipe-ui-default.min.js"></script>
                <script src="assets/vendor/parallax/parallax.min.js"></script>
                <script src="assets/vendor/jquery.plugin/jquery.plugin.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
                <script src="assets/vendor/skrollr/skrollr.min.js"></script>
                <script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="assets/vendor/zoom/jquery.zoom.js"></script>
                <script src="assets/vendor/jquery.countdown/jquery.countdown.min.js"></script>
                <script src="assets/mainJs/index.js"></script>
                <script src="assets/mainJs/main.js"></script>
                <script src="assets/vendor/jquery.count-to/jquery.count-to.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
                <script src="assets/vendor/jquery/jquery.min.js"></script>
                <script src="assets/vendor/sticky/sticky.min.js"></script>
                <script src="assets/vendor//jquery.plugin/jquery.plugin.min.js"></script>
                <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
                <script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/zoom/jquery.zoom.js"></script>
                <script src="assets/js/main.min.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument