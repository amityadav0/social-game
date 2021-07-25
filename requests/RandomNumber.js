import * as Witnet from "witnet-requests"

// Retrieves Random number from randomnumber API
const randomNumber = new Witnet.Source("www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=1")
  .parseJSONMap() // Parse a `Map` from the retrieved `String`
  .getInteger("0");

  // Filters out any value that is more than 1.5 times the standard
// deviationaway from the average, then computes the average mean of the
// values that pass the filter.
const aggregator = new Witnet.Aggregator({
    filters: [
     [Witnet.Types.FILTERS.deviationStandard, 1.5]
    ],
    reducer: Witnet.Types.REDUCERS.averageMean
  })
  
  // Filters out any value that is more than 1.5 times the standard
  // deviationaway from the average, then computes the average mean of the
  // values that pass the filter.
  const tally = new Witnet.Tally({
    filters: [
     [Witnet.Types.FILTERS.deviationStandard, 1.5]
    ],
    reducer: Witnet.Types.REDUCERS.averageMean
  })
  
  const request = new Witnet.Request()
      .addSource(randomNumber)      // Use source 1
      .setAggregator(aggregator)    // Set the aggregation script
      .setTally(tally)              // Set the tally script
      .setQuorum(100)               // Set witness count
      .setFees(1000000, 1000)       // Set economic incentives (e.g. reward: 1 mWit, fee: 1 uWit)
      .setCollateral(10000000000)   // Set collateral (e.g. 10 Wit)
  

// Do not forget to export the request object
export { request as default }
