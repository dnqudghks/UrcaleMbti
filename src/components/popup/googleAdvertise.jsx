import { useEffect } from 'react';

function GoogleAdvertise() {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log('Advertise is pushed');
        } catch (e) {
            if (process.env.NODE_ENV !== 'production')
                console.error('AdvertiseError', e);
        }
    }, []);

    return (
        <ins
            class="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8322455834008082"
            data-ad-slot="6613230913"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
}

export default GoogleAdvertise;
