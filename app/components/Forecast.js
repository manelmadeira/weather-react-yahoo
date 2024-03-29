import React, {Component} from 'react';

import ForecastDay from './ForecastDay';

import '../styles/_forecast.scss';


const Forecast = (props) => {
  return (
    <div className="forecast">
      <h1 className="forecast__city">
        { props.city }
      </h1>

      {
        !props.info
        ? <div className="forecast__not-found">
            <i className="forecast__not-found-icon fa fa-exclamation-circle"></i>
            <span className="forecast__not-found-text">No weather info found.<br />Please check the spelling.</span>
          </div>
        : <div className="forecast__info">
            <div className="forecast__now">
              <ForecastDay
                units={props.units}
                item={props.info.condition} />
            </div>

            <div className="forecast__next-days">
              <h2 className="forecast__subtitle">Next Days</h2>

              <div className="forecast__next-days-items">
                {
                  props.info.forecast
                    .slice(0, 5)
                    .map((itemDay, idx) => (
                      <ForecastDay
                        units={props.units}
                        item={itemDay}
                        key={idx} />
                    ))
                }
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default Forecast;