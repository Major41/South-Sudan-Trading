import React from 'react';

const Tables = () => {
  const southSudanMarketData = [
    {
      product: 'Gold',
      buy: 2082.64,
      sell: 2182.64,
      updated: 'Updated',
      changed: 100.0,
    },
    {
      product: 'Silver',
      buy: 2082.64,
      sell: 2182.64,
      updated: 'Updated',
      changed: 100.0,
    },
    {
      product: 'Oil - Brent Crude',
      buy: 182.64,
      sell: 282.64,
      updated: 'Updated',
      changed: 100.0,
    },
    {
      product: 'Natural Gas',
      buy: 782.64,
      sell: 882.64,
      updated: 'Updated',
      changed: 100.0,
    },
  ];

  const data = [
    {
      product: 'Gold',
      buy: 2182.64,
      sell: 2582.64,
      updated: 'Updated',
      changed: 400.0,
    },
    {
      product: 'Silver',
      buy: 2182.64,
      sell: 2582.64,
      updated: 'Updated',
      changed: 400.0,
    },
    {
      product: 'Oil - Brent Crude',
      buy: 2182.64,
      sell: 2582.64,
      updated: 'Updated',
      changed: 400.0,
    },
    {
      product: 'Natural Gas',
      buy: 2182.64,
      sell: 2582.64,
      updated: 'Updated',
      changed: 400.0,
    },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-white -mt-12 py-12">
      <div className="container mb-10 text-black bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div data-aos="fade-up" className=" text-center mb-10 mt-10  mx-auto">
          <p className=" text-primary text-sm"></p>
          <h1 className="text-3xl font-bold dark:text-white pb-8">
            South Sudan Commodities Trading
          </h1>
          <p className="text-xl text-gray-400 border-2  border-accent">
            Pricing is indicative. Past performance is not a reliable indicator
            of future results. Client sentiment is provided by South Sudan
            Markets for general information only, is historical in nature and is
            not intended to provide any form of trading or investment advice -
            it must not form the basis of your trading or investment decisions.
            Number of indices available on MT4 may vary.
          </p>
        </div>

        {/* tables */}
        {/* first table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-center table-auto">
            <thead className="bg-green-400 text-white">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Buy</th>
                <th className="px-4 py-2">Sell</th>
                <th className="px-4 py-2">Updated</th>
                <th className="px-4 py-2">Changed</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`bg-${
                    index % 2 === 0 ? 'green-100' : 'white'
                  } dark:bg-gray-900`}
                >
                  <td className="border px-4 py-2">{row.product}</td>
                  <td className="border px-4 py-2">{row.buy.toFixed(2)}</td>
                  <td className="border px-4 py-2">{row.sell.toFixed(2)}</td>
                  <td className="border px-4 py-2">{row.updated}</td>
                  <td className="border px-4 py-2">{row.changed.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-left text-lg font-semibold mt-4">UAE Market</p>
        </div>

        {/* second table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-center table-auto">
            <thead className="bg-green-400 text-white">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Buy</th>
                <th className="px-4 py-2">Sell</th>
                <th className="px-4 py-2">Updated</th>
                <th className="px-4 py-2">Changed</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`bg-${
                    index % 2 === 0 ? 'green-100' : 'white'
                  } dark:bg-gray-900`}
                >
                  <td className="border px-4 py-2">{row.product}</td>
                  <td className="border px-4 py-2">{row.buy.toFixed(2)}</td>
                  <td className="border px-4 py-2">{row.sell.toFixed(2)}</td>
                  <td className="border px-4 py-2">{row.updated}</td>
                  <td className="border px-4 py-2">{row.changed.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-left text-lg font-semibold mt-4">UK Market</p>
        </div>

        {/* third table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-center table-auto mt-6">
            <thead className="bg-green-400 text-white">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Buy</th>
                <th className="px-4 py-2">Sell</th>
                <th className="px-4 py-2">Updated</th>
                <th className="px-4 py-2">Changed</th>
              </tr>
            </thead>
            <tbody>
              {southSudanMarketData.map((row, index) => (
                <tr
                  key={index}
                  className={`bg-${
                    index % 2 === 0 ? 'green-100' : 'white'
                  } dark:bg-gray-900`}
                >
                  <td className="border px-4 py-2">{row.product}</td>
                  <td className="border px-4 py-2">{row.buy.toFixed(2)}</td>
                  <td className="border px-4 py-2">{row.sell.toFixed(2)}</td>
                  <td className="border px-4 py-2">{row.updated}</td>
                  <td className="border px-4 py-2">{row.changed.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-left text-lg font-semibold mt-4">
            South Sudan Market
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tables;
