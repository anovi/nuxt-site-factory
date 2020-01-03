/* eslint-disable */

import cookies from "js-cookie";
import env from "~~/services/env";

export default async ({}) => {
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    const data = {
        utm: [
            'utm_medium',
            'utm_source',
            'utm_campaign',
            'utm_term',
            'utm_content',
            'fpc'
        ],
        domain: process.env.baseUrl,
    };

    data.utm.forEach((tag) => {
        const tagValue = env.getParameterByName(tag);

        if (tagValue !== null) {
            cookies.set(tag, tagValue, {expires: 365, path: '/', domain: '.' + data.domain});
        }
    });
}
