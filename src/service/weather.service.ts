// src/service/weather.service.ts
import { Provide } from '@midwayjs/decorator';
import { makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    const result = await makeHttpRequest(
      `http://www.weather.com.cn/data/cityinfo/${cityId}.html`,
      {
        dataType: 'json',
      }
    );

    console.log('result:', result);

    if (result.status === 200) {
      return result.data;
    }
  }
}
