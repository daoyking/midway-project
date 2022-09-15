import { Controller, Get, Query, Inject } from '@midwayjs/decorator';
import { WeatherInfo } from '../interface';
import { WeatherService } from '../service/weather.service';

@Controller('/')
export class WeatherController {
  @Inject()
  weatherService: WeatherService;

  // 这里是装饰器，定义一个路由
  @Get('/weather')
  async getWeatherInfo(@Query('id') cityId: string): Promise<WeatherInfo> {
    // 这里是 http 的返回，可以直接返回字符串，数字，JSON，Buffer 等
    return this.weatherService.getWeather(cityId);
  }
}
