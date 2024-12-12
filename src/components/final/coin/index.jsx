import "./index.css";

import Accordion from "../../accordion/index.jsx";
import Tooltip from "../../tooltip/index.jsx";
import Typography from "../../typography/index.jsx";

export default function CoinElement(props) {
  const {
    csupply,
    id,
    market_cap_usd,
    msupply,
    name,
    nameid,
    percent_change_1h,
    percent_change_7d,
    percent_change_24h,
    price_btc,
    price_usd,
    rank,
    symbol,
    tsupply,
    volume24,
    volume24a,
  } = props.data;
  const formatChange = (value) => {
    const formattedValue = value > 0 ? `+${value}` : value;
    const color = value > 0 ? "green" : "red";
    return <span style={{ color }}>{formattedValue}%</span>;
  };

  return (
    <div>
      <Accordion className="coin-accordion" title={name}>
        <div className="coin-accordion--content">
          <Typography textSize="lg">
            <b>Symbol:</b> {symbol}{" "}
          </Typography>
          <Typography textSize="lg">
            <b>Price USD:</b> {price_usd}{" "}
          </Typography>
          <Typography textSize="lg">
            <b>Price BTC:</b> {price_btc}
          </Typography>
          <Typography textSize="lg">
            <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
              <b>
                Market Cap USD:
              </b>
            </Tooltip>
            <space></space> {market_cap_usd}
          </Typography>
          <Typography textSize="lg">
            <b>Percent Change 24H: <space></space></b>
            {formatChange(percent_change_24h)}
          </Typography>
        </div>
      </Accordion>
    </div>
  );
}
