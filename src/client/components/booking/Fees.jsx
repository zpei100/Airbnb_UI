import React from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import currencyFormatter from 'currency-formatter';
import Fee from './Fee.jsx';

const Fees = ({guest, startDate, endDate, price, pricePerPerson, serviceFee, serviceFeePerPerson, cleaningFee}) => {

  const days = Moment(endDate).diff(Moment(startDate), 'days');
  const convertUSD = value => currencyFormatter.format(value, {code: 'USD'});


  const _cleaningFee = convertUSD(cleaningFee);
  const _serviceFee = convertUSD(serviceFeePerPerson * guest + serviceFee);
  const _rent = convertUSD((price + pricePerPerson * guest) * days);
  const total = convertUSD(cleaningFee + (serviceFeePerPerson * guest + serviceFee) + ((price + pricePerPerson * guest) * days));

  return (
    days ? 
      <div>
        <Fee text={`$${price} x ${days} nights`} price={_rent} />
        <Fee text="Cleaning fee" price={_cleaningFee} />
        <Fee text="Service fee" price={_serviceFee} />
        <Fee text="Total" price={total} />
      </div>
    : ''
  )
}

const mapStateToProps = ({dateRange: { startDate, endDate }, room: {price, serviceFee, serviceFeePerPerson, cleaningFee, pricePerPerson}}) => {
  return {startDate, endDate, price, serviceFee, serviceFeePerPerson, cleaningFee, pricePerPerson}
}

export default connect(mapStateToProps)(Fees);