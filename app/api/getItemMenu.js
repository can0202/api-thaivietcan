import { URL_API } from '../shared/constants/ConfigApp';

export const fetchMenus = async (id) => {
  try {
    const res = await fetch(URL_API + `wp-json/v1/get_menu_item?menu_id=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
