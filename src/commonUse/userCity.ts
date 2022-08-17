import { onMounted } from 'vue'
import provinces from "china-division/dist/provinces";
import cities from "china-division/dist/cities";
import areas from "china-division/dist/areas";

export const userCity = (props) => {
  const { key } = props;
  console.error('key', key);
  areas.forEach((area: { cityCode: string; name: string; code: any }, id: number) => {
    const matchCity = cities.filter((city: { code: string }) => city.code === area.cityCode)[0];
    if (matchCity) {
      matchCity.children = matchCity.children || [];
      matchCity.children.push({
        label: area.name,
        value: key && area[key] ? area[key] : area.code,
        id,
      });
    }
  });

  cities.forEach(
    (
      city: { provinceCode: any; name: string; string: any; children: any; code?: string },
      id: number,
    ) => {
      const matchProvince = provinces.filter(
        (province: { code: string }) => province.code === city.provinceCode,
      )[0];
      if (matchProvince) {
        matchProvince.children = matchProvince.children || [];
        matchProvince.children.push({
          label: city.name,
          value: key && city[key] ? city[key] : city.code,
          id,
          children: city.children,
        });
      }
    },
  );

  const cityOptions = provinces.map(
    (province: { name: any; code: any; children: any }, id: number) => ({
      label: province.name,
      value: key && province[key] ? province[key] : province.code,
      id,
      children: province.children,
    }),
  );

  return {
    cityOptions,
  };
};