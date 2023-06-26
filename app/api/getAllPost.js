import { URL_API } from '../shared/constants/ConfigApp';

export const fetchPosts = async (dataObject) => {
  try {
    const res = await fetch(URL_API + 'wp-json/v1/all_posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObject),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
