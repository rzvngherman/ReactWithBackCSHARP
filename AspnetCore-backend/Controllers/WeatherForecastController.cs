using Microsoft.AspNetCore.Mvc;
using System;

namespace AspnetCore_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetAllRandom")]
        public IEnumerable<WeatherForecast> GetRandomData()
        {
            return GetAllData();
        }

        [HttpGet("GetOneRandom")]
        public WeatherForecast GetOnlyOne()
        {
            return GetAllData()
                    .First();
        }


        private WeatherForecast[] GetAllData()
        {
            var data = Enumerable.Range(1, 5).Select(
                index =>
                {
                    var wf = new WeatherForecast
                    {
                        Date = DateTime.Now.AddDays(index),
                        TemperatureC = Random.Shared.Next(-20, 55),
                        Summary = Summaries[Random.Shared.Next(Summaries.Length)],
                        Id = index,
                    };
                    wf.Details = "Details for id " + wf.Id + ", date " + wf.Date.ToString("f");
                    return wf;
                })
            .ToArray();

            return data;
        }
    }
}